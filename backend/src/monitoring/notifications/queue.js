const { db } = require('../db/knex');
const { logger } = require('../utils/logger');
const { decrypt } = require('../utils/crypto');
const { getLocalDateTime, formatPtBr } = require('../utils/date');
const { TelegramProvider } = require('./telegram');
const { EmailProvider } = require('./email');
const { DiscordProvider } = require('./discord');
const { SlackProvider } = require('./slack');
const { GenericWebhookProvider } = require('./webhook');

const providers = {
  telegram: new TelegramProvider(),
  email: new EmailProvider(),
  discord: new DiscordProvider(),
  slack: new SlackProvider(),
  webhook: new GenericWebhookProvider()
};

/**
 * Enfileira uma notificação para envio assíncrono com retentativas e registro em log
 * @param {object} notification Registro da tabela notifications
 * @param {object} monitor Registro da tabela monitors
 * @param {object} heartbeat Registro da tabela heartbeats
 * @param {'down'|'up'|'cert'|'resend'} event Tipo de evento
 * @param {string} [downtime] Tempo formatado de indisponibilidade
 */
function enqueueNotification(notification, monitor, heartbeat, event, downtime = null) {
  setImmediate(async () => {
    let attempts = 0;
    const maxAttempts = 3;
    let lastError = null;

    let config = null;
    try {
      config = decrypt(notification.config_encrypted);
    } catch (err) {
      logger.error(`Erro ao descriptografar config da notificação ID ${notification.id}:`, err);
      await recordLog(notification.id, monitor.id, event, 'failed', 1, 'Erro ao descriptografar configuração.');
      return;
    }

    const provider = providers[notification.type];
    if (!provider) {
      logger.error(`Provedor de notificação não suportado: ${notification.type}`);
      await recordLog(notification.id, monitor.id, event, 'failed', 1, `Tipo não suportado: ${notification.type}`);
      return;
    }

    const isDown = event === 'down' || event === 'resend';
    const statusText = isDown ? '🔴 DOWN' : (event === 'cert' ? '⚠️ CERTIFICADO' : '🟢 UP');

    const context = {
      name: monitor.name,
      hostnameOrURL: monitor.url || monitor.hostname || '-',
      status: statusText,
      msg: heartbeat?.msg || (event === 'cert' ? 'Certificado próximo da expiração' : 'Status alterado'),
      localDateTime: formatPtBr(heartbeat?.time ? new Date(heartbeat.time) : new Date()),
      downtime,
      event,
      monitor,
      heartbeat
    };

    while (attempts < maxAttempts) {
      attempts++;
      try {
        await provider.send(config, context);
        await recordLog(notification.id, monitor.id, event, 'sent', attempts, null);
        logger.info(`Notificação ${notification.name} (${notification.type}) enviada com sucesso para monitor "${monitor.name}" (tentativa ${attempts}).`);
        return;
      } catch (err) {
        lastError = err.message || String(err);
        logger.warn(`Tentativa ${attempts}/${maxAttempts} falhou para notificação ${notification.name} (${notification.type}): ${lastError}`);
        if (attempts < maxAttempts) {
          await new Promise(r => setTimeout(r, attempts * 1000));
        }
      }
    }

    await recordLog(notification.id, monitor.id, event, 'failed', attempts, lastError);
  });
}

/**
 * Grava o resultado na tabela notification_log
 */
async function recordLog(notificationId, monitorId, event, status, attempts, error) {
  try {
    await db('notification_log').insert({
      notification_id: notificationId,
      monitor_id: monitorId,
      event,
      status,
      attempts,
      error: error ? String(error).slice(0, 500) : null,
      created_at: getLocalDateTime()
    });
  } catch (err) {
    logger.error('Erro ao gravar notification_log:', err);
  }
}

/**
 * Dispara teste imediato para um canal de notificação específico
 * @param {object} notification
 * @param {object} [overrideConfig]
 * @returns {Promise<void>}
 */
async function testNotificationChannel(notification, overrideConfig = null) {
  const config = overrideConfig || decrypt(notification.config_encrypted);
  const provider = providers[notification.type];
  if (!provider) {
    throw new Error(`Tipo de notificação desconhecido: ${notification.type}`);
  }

  const context = {
    name: 'Teste de Canal de Notificação',
    hostnameOrURL: 'https://dc-monitoramento.local',
    status: '🟢 Teste',
    msg: 'Esta é uma mensagem de teste enviada pelo DC Monitoramento para validar seu canal.',
    localDateTime: formatPtBr(new Date()),
    downtime: null,
    event: 'test',
    monitor: { id: 0, name: 'Teste' },
    heartbeat: null
  };

  await provider.send(config, context);
}

module.exports = {
  enqueueNotification,
  testNotificationChannel
};

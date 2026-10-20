const cron = require('node-cron');
const { db } = require('../db/knex');
const { logger } = require('../utils/logger');
const { enqueueNotification } = require('../notifications/queue');
const { formatPtBr, getLocalDateTime } = require('../utils/date');

function initCertJob() {
  // Executa diariamente às 06:00
  cron.schedule('0 6 * * *', async () => {
    logger.info('Iniciando verificação diária de expiração de certificados TLS...');

    try {
      const monitors = await db('monitors')
        .where({ active: true, cert_expiry_alert: true })
        .whereIn('type', ['http']);

      const now = new Date();

      for (const m of monitors) {
        const tlsInfo = await db('tls_info').where({ monitor_id: m.id }).first();
        if (!tlsInfo || !tlsInfo.valid_to) continue;

        const validTo = new Date(tlsInfo.valid_to);
        const daysRemaining = Math.floor((validTo.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

        const thresholds = [30, 14, 7];
        for (const threshold of thresholds) {
          if (daysRemaining <= threshold && daysRemaining > threshold - 1) {
            const alertedKey = `cert_alert_${m.id}_${threshold}`;
            const alreadyAlerted = await db('settings').where({ key: alertedKey }).first();
            if (alreadyAlerted) continue;

            await db('settings').insert({
              key: alertedKey,
              value: JSON.stringify({ alertedAt: getLocalDateTime(), daysRemaining })
            }).onConflict('key').merge();

            const notifications = await db('notifications')
              .join('monitor_notification', 'notifications.id', 'monitor_notification.notification_id')
              .where('monitor_notification.monitor_id', m.id)
              .andWhere('notifications.active', true)
              .select('notifications.*');

            const fakeHeartbeat = {
              status: 2,
              msg: `Certificado TLS expira em ${daysRemaining} dia(s) (Vencimento: ${formatPtBr(validTo)}). Emissor: ${tlsInfo.issuer || 'N/A'}.`,
              ping_ms: 0,
              time: getLocalDateTime()
            };

            for (const notif of notifications) {
              enqueueNotification(notif, m, fakeHeartbeat, 'cert');
            }
          }
        }
      }
    } catch (err) {
      logger.error('Erro no job de certificados TLS:', err);
    }
  });
}

module.exports = { initCertJob };

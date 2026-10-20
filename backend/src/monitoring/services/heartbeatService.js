const { db } = require('../db/knex');
const { logger } = require('../utils/logger');
const { getLocalDateTime } = require('../utils/date');
const { isUnderMaintenance } = require('./maintenanceService');
const { openIncident, closeIncident } = require('./incidentService');
const { recordStats, getMonitorStats } = require('./statsService');
const { enqueueNotification } = require('../notifications/queue');
const { emitEvent } = require('../socket/socketServer');

const lastResendMap = new Map();

/**
 * Processa e persiste o batimento de um monitor
 * @param {object} monitor
 * @param {object} probeResult { ok, msg, pingMs, extra, statusOverride }
 * @param {number} failureCount Contador atual de falhas
 * @returns {Promise<{ newStatus: number, newFailureCount: number, beat: object }>}
 */
async function processHeartbeat(monitor, probeResult, failureCount = 0) {
  const now = new Date();
  const nowIso = getLocalDateTime(now);

  // 1. Janela de manutenção
  const inMaintenance = await isUnderMaintenance(monitor.id);
  if (inMaintenance) {
    const beat = await createBeat(monitor.id, 3, 'Serviço em janela de manutenção programada.', probeResult.pingMs || 0, false, 0, nowIso);
    emitEvent('heartbeat', beat);
    return { newStatus: 3, newFailureCount: 0, beat };
  }

  // 2. Status preliminar da sonda
  let probeOk = probeResult.ok;
  let statusOverride = probeResult.statusOverride;

  let currentProbeStatus = statusOverride !== undefined
    ? statusOverride
    : (probeOk ? 1 : 0);

  // Regra: se o ping estiver constando inacessível (ou qualquer probe com immediateDown/unreachable),
  // deve ser dado como DOWN (0) imediatamente sem passar pela fase intermediária de retentativas PENDING (2).
  const isImmediateDown = Boolean(
    probeResult.immediateDown ||
    probeResult.unreachable ||
    (monitor.type === 'ping' && currentProbeStatus === 0)
  );

  let newFailureCount = failureCount;
  let finalStatus = 1;

  if (currentProbeStatus === 1) {
    newFailureCount = 0;
    finalStatus = 1;
  } else {
    const maxRetries = monitor.max_retries || 2;
    if (isImmediateDown) {
      newFailureCount = maxRetries + 1;
      finalStatus = 0; // DOWN imediato sem espera de retentativas
    } else {
      newFailureCount = failureCount + 1;
      if (newFailureCount <= maxRetries) {
        finalStatus = 2; // PENDING
      } else {
        finalStatus = 0; // DOWN
      }
    }
  }

  // 3. Dependência de monitor pai
  let parentIsDown = false;
  if (monitor.parent_id) {
    const parentLastBeat = await db('heartbeats')
      .where({ monitor_id: monitor.parent_id })
      .orderBy('id', 'desc')
      .first();
    if (parentLastBeat && parentLastBeat.status === 0) {
      parentIsDown = true;
    }
  }

  let beatMsg = probeResult.msg || '';
  if (parentIsDown && finalStatus === 0) {
    beatMsg = `[suprimido: pai DOWN] ${beatMsg}`;
  }

  // 4. Duração e transições
  const prevBeat = await db('heartbeats')
    .where({ monitor_id: monitor.id })
    .orderBy('id', 'desc')
    .first();

  let durationS = 0;
  if (prevBeat) {
    const prevTime = new Date(prevBeat.time).getTime();
    durationS = Math.max(0, Math.round((now.getTime() - prevTime) / 1000));
  }

  const lastStableBeat = await db('heartbeats')
    .where({ monitor_id: monitor.id })
    .whereIn('status', [0, 1])
    .orderBy('id', 'desc')
    .first();

  let isImportant = false;
  let eventType = null;
  let downtimeFormatted = null;

  if (!lastStableBeat) {
    isImportant = true;
    if (finalStatus === 0) {
      eventType = 'down';
      await openIncident(monitor.id, beatMsg);
    }
  } else {
    const prevStableStatus = lastStableBeat.status;

    if (finalStatus === 0 && prevStableStatus === 1) {
      isImportant = true;
      eventType = 'down';
      await openIncident(monitor.id, beatMsg);
    } else if (finalStatus === 1 && prevStableStatus === 0) {
      isImportant = true;
      eventType = 'up';
      const closed = await closeIncident(monitor.id);
      if (closed?.downtimeStr) {
        downtimeFormatted = closed.downtimeStr;
        beatMsg += ` (Ficou indisponível por ${downtimeFormatted})`;
      }
      lastResendMap.delete(monitor.id);
    } else if (finalStatus === 0 && prevStableStatus === 0) {
      // Se continuou DOWN, certifica que existe incidente aberto registrado no banco
      const existingInc = await db('incidents')
        .where({ monitor_id: monitor.id })
        .whereNull('ended_at')
        .first();
      if (!existingInc) {
        await openIncident(monitor.id, beatMsg);
      }

      if (monitor.resend_interval_min && monitor.resend_interval_min > 0) {
        const lastSent = lastResendMap.get(monitor.id) || (new Date(lastStableBeat.time).getTime());
        const resendMs = monitor.resend_interval_min * 60 * 1000;
        if (now.getTime() - lastSent >= resendMs) {
          isImportant = true;
          eventType = 'resend';
          lastResendMap.set(monitor.id, now.getTime());
        }
      }
    }
  }

  // 5. Salva TLS se capturado
  if (probeResult.extra?.certInfo) {
    try {
      const ci = probeResult.extra.certInfo;
      const existingTls = await db('tls_info').where({ monitor_id: monitor.id }).first();
      if (!existingTls) {
        await db('tls_info').insert({
          monitor_id: monitor.id,
          valid_to: ci.validTo,
          issuer: ci.issuer,
          last_checked: nowIso
        });
      } else {
        await db('tls_info').where({ monitor_id: monitor.id }).update({
          valid_to: ci.validTo,
          issuer: ci.issuer,
          last_checked: nowIso
        });
      }
    } catch (e) {
      logger.warn(`Erro ao atualizar tls_info para monitor ${monitor.id}: ${e.message}`);
    }
  }

  // 6. Grava batimento
  const beat = await createBeat(
    monitor.id,
    finalStatus,
    beatMsg,
    probeResult.pingMs || 0,
    isImportant,
    durationS,
    nowIso
  );

  // 7. Atualiza estatísticas
  await recordStats(monitor.id, finalStatus, probeResult.pingMs || 0);

  // 8. Dispara notificações se importante e não suprimido por pai
  if (isImportant && eventType && (!parentIsDown || eventType === 'up')) {
    dispatchNotifications(monitor, beat, eventType, downtimeFormatted);
  }

  // 9. Emite via Socket.IO
  emitEvent('heartbeat', beat);
  const currentStats = await getMonitorStats(monitor.id);
  emitEvent('stats', { monitorId: monitor.id, stats: currentStats });

  return { newStatus: finalStatus, newFailureCount, beat };
}

async function createBeat(monitorId, status, msg, pingMs, important, durationS, time) {
  const [id] = await db('heartbeats').insert({
    monitor_id: monitorId,
    status,
    msg: msg ? String(msg).slice(0, 500) : null,
    ping_ms: pingMs !== null ? Math.round(pingMs * 10) / 10 : null,
    important,
    duration_s: durationS,
    time
  }).returning('id');

  const beatId = typeof id === 'object' ? id.id : id;
  return await db('heartbeats').where({ id: beatId }).first();
}

async function dispatchNotifications(monitor, beat, eventType, downtimeFormatted) {
  try {
    const notifications = await db('notifications')
      .join('monitor_notification', 'notifications.id', 'monitor_notification.notification_id')
      .where('monitor_notification.monitor_id', monitor.id)
      .andWhere('notifications.active', true)
      .select('notifications.*');

    for (const notif of notifications) {
      enqueueNotification(notif, monitor, beat, eventType, downtimeFormatted);
    }
  } catch (err) {
    logger.error(`Erro ao disparar notificações para monitor ${monitor.name}:`, err);
  }
}

module.exports = {
  processHeartbeat,
  createBeat
};

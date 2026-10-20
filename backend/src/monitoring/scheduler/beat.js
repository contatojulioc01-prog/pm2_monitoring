const { runProbe } = require('../monitors/index');
const { processHeartbeat } = require('../services/heartbeatService');
const { logger } = require('../utils/logger');

/**
 * Executa uma rodada segura de batimento para o monitor
 * @param {object} monitor
 * @param {number} failureCount
 * @returns {Promise<{ newStatus: number, newFailureCount: number, beat: object }>}
 */
async function safeBeat(monitor, failureCount) {
  try {
    const probeResult = await runProbe(monitor);
    return await processHeartbeat(monitor, probeResult, failureCount);
  } catch (err) {
    logger.error(`Exceção não tratada no safeBeat do monitor "${monitor.name}" (ID ${monitor.id}):`, err);
    const fallbackResult = {
      ok: false,
      msg: `Erro no loop de monitoramento: ${err.message}`,
      pingMs: 0,
      extra: { error: err.message }
    };
    return await processHeartbeat(monitor, fallbackResult, failureCount);
  }
}

module.exports = { safeBeat };

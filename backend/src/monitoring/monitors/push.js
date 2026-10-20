const { db } = require('../db/knex');

/**
 * Driver PUSH (Monitor de Heartbeat Passivo)
 * O monitor PUSH é passivo: sistemas externos chamam a URL de ping periodicamente.
 * O scheduler apenas verifica se o último ping expirou o intervalo permitido.
 * @param {object} monitor
 * @returns {Promise<{ ok: boolean, msg: string, pingMs: number, extra: object }>}
 */
async function testPush(monitor) {
  const lastBeat = await db('heartbeats')
    .where({ monitor_id: monitor.id })
    .orderBy('id', 'desc')
    .first();

  if (!lastBeat) {
    return {
      ok: true,
      msg: 'Aguardando o primeiro ping de pulso do serviço monitorado.',
      pingMs: 0,
      extra: { pendingFirstBeat: true },
      statusOverride: 2 // PENDING
    };
  }

  const lastBeatTime = new Date(lastBeat.time).getTime();
  const now = Date.now();
  const elapsedSec = (now - lastBeatTime) / 1000;
  const maxAllowedSec = (monitor.interval_s || 60) + (monitor.retry_interval_s || 30);

  if (elapsedSec > maxAllowedSec) {
    return {
      ok: false,
      msg: `Nenhum ping recebido nos últimos ${Math.round(elapsedSec)} segundos (limite de tolerância: ${maxAllowedSec}s).`,
      pingMs: 0,
      extra: { elapsedSec, maxAllowedSec }
    };
  }

  return {
    ok: true,
    msg: `Heartbeat ativo. Último ping recebido há ${Math.round(elapsedSec)}s.`,
    pingMs: lastBeat.ping_ms || 0,
    extra: { elapsedSec }
  };
}

module.exports = { testPush };

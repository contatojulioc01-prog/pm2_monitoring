const { db } = require('../db/knex');

/**
 * Driver GROUP
 * Agrega o status dos monitores filhos
 * @param {object} monitor
 * @returns {Promise<{ ok: boolean, msg: string, pingMs: number, extra: object, statusOverride?: number }>}
 */
async function testGroup(monitor) {
  const children = await db('monitors').where({ parent_id: monitor.id, active: true });

  if (children.length === 0) {
    return {
      ok: true,
      msg: 'Grupo sem monitores filhos vinculados.',
      pingMs: 0,
      extra: { childrenCount: 0 }
    };
  }

  const childIds = children.map(c => c.id);
  const beats = await db('heartbeats')
    .whereIn('monitor_id', childIds)
    .whereIn('id', function () {
      this.select(db.raw('MAX(id)')).from('heartbeats').whereIn('monitor_id', childIds).groupBy('monitor_id');
    });

  let downCount = 0;
  let upCount = 0;
  let totalPing = 0;
  let pingCount = 0;

  for (const b of beats) {
    if (b.status === 0) downCount++;
    if (b.status === 1) upCount++;
    if (b.ping_ms !== null && b.ping_ms !== undefined) {
      totalPing += b.ping_ms;
      pingCount++;
    }
  }

  const avgPing = pingCount > 0 ? Math.round((totalPing / pingCount) * 10) / 10 : 0;

  if (downCount > 0) {
    return {
      ok: false,
      msg: `Grupo com ${downCount} de ${children.length} serviços fora do ar (DOWN).`,
      pingMs: avgPing,
      extra: { downCount, total: children.length }
    };
  }

  return {
    ok: true,
    msg: `Todos os ${children.length} serviços do grupo estão operando normalmente (UP).`,
    pingMs: avgPing,
    extra: { upCount, total: children.length }
  };
}

module.exports = { testGroup };

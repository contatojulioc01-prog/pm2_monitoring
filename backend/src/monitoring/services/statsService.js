const { db } = require('../db/knex');
const { getLocalHourBucket, getLocalDayBucket, getLocalDateTime } = require('../utils/date');

/**
 * Registra o resultado do batimento nas tabelas agregadas
 * @param {number} monitorId
 * @param {number} status 0 DOWN, 1 UP, 2 PENDING, 3 MAINTENANCE
 * @param {number} pingMs
 */
async function recordStats(monitorId, status, pingMs) {
  if (status !== 0 && status !== 1) return; // agrega apenas UP e DOWN

  const now = new Date();
  const hourBucket = getLocalHourBucket(now);
  const dayBucket = getLocalDayBucket(now);
  const isUp = status === 1;

  await upsertBucket('stat_hourly', monitorId, hourBucket, isUp, pingMs);
  await upsertBucket('stat_daily', monitorId, dayBucket, isUp, pingMs);
}

async function upsertBucket(tableName, monitorId, bucketTs, isUp, pingMs) {
  try {
    const existing = await db(tableName)
      .where({ monitor_id: monitorId, bucket_ts: bucketTs })
      .first();

    if (!existing) {
      await db(tableName).insert({
        monitor_id: monitorId,
        bucket_ts: bucketTs,
        up_count: isUp ? 1 : 0,
        down_count: isUp ? 0 : 1,
        ping_avg: pingMs > 0 ? pingMs : null,
        ping_min: pingMs > 0 ? pingMs : null,
        ping_max: pingMs > 0 ? pingMs : null
      });
    } else {
      const newUp = existing.up_count + (isUp ? 1 : 0);
      const newDown = existing.down_count + (isUp ? 0 : 1);
      const totalChecks = newUp + newDown;

      let newAvg = existing.ping_avg;
      let newMin = existing.ping_min;
      let newMax = existing.ping_max;

      if (pingMs > 0) {
        if (existing.ping_avg !== null) {
          newAvg = Math.round(((existing.ping_avg * (totalChecks - 1) + pingMs) / totalChecks) * 10) / 10;
        } else {
          newAvg = pingMs;
        }
        newMin = existing.ping_min !== null ? Math.min(existing.ping_min, pingMs) : pingMs;
        newMax = existing.ping_max !== null ? Math.max(existing.ping_max, pingMs) : pingMs;
      }

      await db(tableName)
        .where({ monitor_id: monitorId, bucket_ts: bucketTs })
        .update({
          up_count: newUp,
          down_count: newDown,
          ping_avg: newAvg,
          ping_min: newMin,
          ping_max: newMax
        });
    }
  } catch (err) {
    // Erros de concorrência pontuais ignorados
  }
}

/**
 * Calcula estatísticas consolidadas do monitor
 * @param {number} monitorId
 * @returns {Promise<{ uptime24h: number, uptime7d: number, uptime30d: number, uptime365d: number, pingAvg: number, pingMin: number, pingMax: number }>}
 */
async function getMonitorStats(monitorId) {
  const now = new Date();

  const calcUptime = async (sinceIso) => {
    const row = await db('heartbeats')
      .where({ monitor_id: monitorId })
      .andWhere('time', '>=', sinceIso)
      .whereIn('status', [0, 1])
      .select(
        db.raw('COUNT(CASE WHEN status = 1 THEN 1 END) as up_count'),
        db.raw('COUNT(*) as total_count')
      )
      .first();

    if (!row || !row.total_count || row.total_count === 0) return 100;
    return Math.round((row.up_count / row.total_count) * 10000) / 100;
  };

  const d24h = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const d7d = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const d30d = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const d365d = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);

  const uptime24h = await calcUptime(getLocalDateTime(d24h));
  const uptime7d = await calcUptime(getLocalDateTime(d7d));
  const uptime30d = await calcUptime(getLocalDateTime(d30d));
  const uptime365d = await calcUptime(getLocalDateTime(d365d));

  // Ping dos últimos 60 batimentos
  const pingRow = await db('heartbeats')
    .where({ monitor_id: monitorId })
    .whereNotNull('ping_ms')
    .andWhere('ping_ms', '>', 0)
    .orderBy('id', 'desc')
    .limit(60)
    .select(
      db.raw('AVG(ping_ms) as avg_ping'),
      db.raw('MIN(ping_ms) as min_ping'),
      db.raw('MAX(ping_ms) as max_ping')
    )
    .first();

  return {
    uptime24h,
    uptime7d,
    uptime30d,
    uptime365d,
    pingAvg: pingRow?.avg_ping ? Math.round(pingRow.avg_ping * 10) / 10 : 0,
    pingMin: pingRow?.min_ping ? Math.round(pingRow.min_ping * 10) / 10 : 0,
    pingMax: pingRow?.max_ping ? Math.round(pingRow.max_ping * 10) / 10 : 0
  };
}

module.exports = {
  recordStats,
  getMonitorStats
};

const { db } = require('../db/knex');
const { getLocalDateTime } = require('../utils/date');

/**
 * Verifica se um monitor específico está dentro de uma janela de manutenção ativa
 * @param {number} monitorId
 * @returns {Promise<boolean>}
 */
async function isUnderMaintenance(monitorId) {
  try {
    const maintenances = await db('maintenances')
      .join('maintenance_monitor', 'maintenances.id', 'maintenance_monitor.maintenance_id')
      .where('maintenance_monitor.monitor_id', monitorId)
      .andWhere('maintenances.active', true)
      .select('maintenances.*');

    if (maintenances.length === 0) return false;

    const now = new Date();
    const nowIso = getLocalDateTime(now);
    const currentWeekday = now.getDay(); // 0 Dom, 1 Seg...
    const pad = (n) => String(n).padStart(2, '0');
    const currentTimeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}`;

    for (const m of maintenances) {
      if (m.strategy === 'once') {
        if (m.start_at && m.end_at) {
          if (nowIso >= m.start_at && nowIso <= m.end_at) {
            return true;
          }
        }
      } else if (m.strategy === 'weekly') {
        let weekdaysList = [];
        try {
          weekdaysList = JSON.parse(m.weekdays || '[]');
        } catch {
          weekdaysList = String(m.weekdays || '').split(',').map(Number);
        }

        if (weekdaysList.includes(currentWeekday)) {
          if (m.start_time && m.end_time) {
            if (currentTimeStr >= m.start_time && currentTimeStr <= m.end_time) {
              return true;
            }
          }
        }
      }
    }

    return false;
  } catch (err) {
    return false;
  }
}

module.exports = { isUnderMaintenance };

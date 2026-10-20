const { db } = require('../db/knex');
const { getLocalDateTime, formatDuration } = require('../utils/date');
const { emitEvent } = require('../socket/socketServer');

/**
 * Abre um novo incidente para o monitor se já não houver um em aberto
 * @param {number} monitorId
 * @param {string} cause
 * @returns {Promise<object|null>}
 */
async function openIncident(monitorId, cause) {
  const existing = await db('incidents')
    .where({ monitor_id: monitorId })
    .whereNull('ended_at')
    .first();

  if (existing) return existing;

  const nowIso = getLocalDateTime();
  const [id] = await db('incidents').insert({
    monitor_id: monitorId,
    started_at: nowIso,
    ended_at: null,
    cause: cause ? String(cause).slice(0, 500) : 'Serviço inacessível',
    acknowledged: false
  }).returning('id');

  const incId = typeof id === 'object' ? id.id : id;
  const incident = await db('incidents').where({ id: incId }).first();

  emitEvent('incident', incident);
  return incident;
}

/**
 * Fecha o incidente em aberto do monitor
 * @param {number} monitorId
 * @returns {Promise<{ incident: object, downtimeStr: string }|null>}
 */
async function closeIncident(monitorId) {
  const incident = await db('incidents')
    .where({ monitor_id: monitorId })
    .whereNull('ended_at')
    .first();

  if (!incident) return null;

  const now = new Date();
  const nowIso = getLocalDateTime(now);
  const downtimeStr = formatDuration(incident.started_at, now);

  await db('incidents').where({ id: incident.id }).update({
    ended_at: nowIso
  });

  const updated = await db('incidents').where({ id: incident.id }).first();
  emitEvent('incident', updated);

  return { incident: updated, downtimeStr };
}

module.exports = {
  openIncident,
  closeIncident
};

const express = require('express');
const router = express.Router();
const { z } = require('zod');
const { db } = require('../monitoring/db/knex');
const { scheduler } = require('../monitoring/scheduler/scheduler');
const { encrypt, decrypt, generateToken } = require('../monitoring/utils/crypto');
const { getLocalDateTime } = require('../monitoring/utils/date');
const { getMonitorStats } = require('../monitoring/services/statsService');
const { emitEvent } = require('../monitoring/socket/socketServer');
const { runProbe } = require('../monitoring/monitors/index');

const monitorSchema = z.object({
  name: z.string().min(1, 'Nome do monitor é obrigatório.').max(100),
  type: z.enum(['http', 'tcp', 'port', 'ping', 'dns', 'smtp', 'database', 'push', 'group']),
  hostname: z.string().nullable().optional(),
  url: z.string().nullable().optional(),
  port: z.number().nullable().optional(),
  method: z.string().default('GET'),
  keyword: z.string().nullable().optional(),
  invert_keyword: z.boolean().default(false),
  expected_status: z.string().default('200-299'),
  headers: z.any().nullable().optional(),
  body: z.string().nullable().optional(),
  ignore_tls: z.boolean().default(false),
  timeout_s: z.number().min(1).max(120).default(10),
  interval_s: z.number().min(5).max(86400).default(20),
  retry_interval_s: z.number().min(5).max(86400).default(10),
  max_retries: z.number().min(0).max(10).default(2),
  resend_interval_min: z.number().min(0).default(0),
  cert_expiry_alert: z.boolean().default(false),
  parent_id: z.number().nullable().optional(),
  config: z.any().nullable().optional(),
  notification_ids: z.array(z.number()).optional(),
  group_name: z.string().nullable().optional(),
  active: z.boolean().default(true)
});

async function enrichMonitor(m) {
  const notifications = await db('monitor_notification')
    .where({ monitor_id: m.id })
    .select('notification_id');

  const lastBeat = await db('heartbeats')
    .where({ monitor_id: m.id })
    .orderBy('id', 'desc')
    .first();

  const tls = await db('tls_info').where({ monitor_id: m.id }).first();

  return {
    ...m,
    active: Boolean(m.active),
    ignore_tls: Boolean(m.ignore_tls),
    invert_keyword: Boolean(m.invert_keyword),
    cert_expiry_alert: Boolean(m.cert_expiry_alert),
    config: m.config_encrypted ? decrypt(m.config_encrypted) : null,
    notification_ids: notifications.map(n => n.notification_id),
    status: lastBeat ? lastBeat.status : (m.active ? 1 : null),
    lastBeatTime: lastBeat ? lastBeat.time : null,
    ping_ms: lastBeat ? lastBeat.ping_ms : null,
    msg: lastBeat ? lastBeat.msg : null,
    tls_info: tls || null
  };
}

// GET /api/monitors - Lista todos os monitores
router.get('/', async (req, res, next) => {
  try {
    const list = await db('monitors').orderBy('id', 'asc');
    const enriched = await Promise.all(list.map(enrichMonitor));
    return res.json(enriched);
  } catch (err) {
    next(err);
  }
});

// POST /api/monitors/test - Testa sonda em tempo real antes de salvar
router.post('/test', async (req, res, next) => {
  try {
    const probe = await runProbe(req.body);
    return res.json(probe);
  } catch (err) {
    next(err);
  }
});

// POST /api/monitors - Cria um novo monitor
router.post('/', async (req, res, next) => {
  try {
    const data = monitorSchema.parse(req.body);
    const now = getLocalDateTime();

    const pushToken = data.type === 'push' ? generateToken(32) : null;
    const configEncrypted = data.config ? encrypt(data.config) : null;
    const headersStr = typeof data.headers === 'object' && data.headers !== null
      ? JSON.stringify(data.headers)
      : data.headers || null;

    const [id] = await db('monitors').insert({
      name: data.name,
      type: data.type,
      hostname: data.hostname || null,
      url: data.url || null,
      port: data.port || null,
      method: data.method,
      keyword: data.keyword || null,
      invert_keyword: data.invert_keyword,
      expected_status: data.expected_status,
      headers: headersStr,
      body: data.body || null,
      ignore_tls: data.ignore_tls,
      timeout_s: data.timeout_s,
      interval_s: data.interval_s,
      retry_interval_s: data.retry_interval_s,
      max_retries: data.max_retries,
      resend_interval_min: data.resend_interval_min,
      cert_expiry_alert: data.cert_expiry_alert,
      parent_id: data.parent_id || null,
      push_token: pushToken,
      config_encrypted: configEncrypted,
      group_name: data.group_name ? String(data.group_name).trim() : null,
      active: data.active,
      created_at: now,
      updated_at: now
    }).returning('id');

    const createdId = typeof id === 'object' ? id.id : id;

    let targetNotifIds = data.notification_ids;
    if (!targetNotifIds) {
      const defaultNotifs = await db('notifications').where({ is_default: true, active: true }).select('id');
      targetNotifIds = defaultNotifs.map(n => n.id);
    }

    if (targetNotifIds && targetNotifIds.length > 0) {
      const links = targetNotifIds.map(nId => ({
        monitor_id: createdId,
        notification_id: nId
      }));
      await db('monitor_notification').insert(links);
    }

    const created = await db('monitors').where({ id: createdId }).first();
    const enriched = await enrichMonitor(created);

    if (enriched.active) {
      await scheduler.startMonitor(createdId);
    }

    emitEvent('monitorUpdated', enriched);
    return res.status(201).json(enriched);
  } catch (err) {
    next(err);
  }
});

// ─── Grupos Personalizados e Reordenação (Drag & Drop) ─────────────────────────

// GET /api/monitors/custom-groups - Lista todos os grupos cadastrados
router.get('/custom-groups', async (req, res, next) => {
  try {
    const groups = await db('monitor_groups').orderBy('order_index', 'asc').orderBy('id', 'asc');
    return res.json(groups);
  } catch (err) {
    next(err);
  }
});

// POST /api/monitors/custom-groups - Cria um grupo personalizado
router.post('/custom-groups', async (req, res, next) => {
  try {
    const { name, icon } = req.body;
    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Nome do grupo é obrigatório.' });
    }

    const trimmedName = name.trim();
    const existing = await db('monitor_groups').where({ name: trimmedName }).first();
    if (existing) {
      return res.status(409).json({ error: 'Já existe um grupo com este nome.' });
    }

    const maxOrder = await db('monitor_groups').max('order_index as m').first();
    const nextOrder = (maxOrder?.m || 0) + 1;
    const now = getLocalDateTime();

    const [id] = await db('monitor_groups').insert({
      name: trimmedName,
      icon: (icon && icon.trim()) || 'folder',
      order_index: nextOrder,
      created_at: now,
      updated_at: now
    }).returning('id');

    const createdId = typeof id === 'object' ? id.id : id;
    const created = await db('monitor_groups').where({ id: createdId }).first();

    const allGroups = await db('monitor_groups').orderBy('order_index', 'asc').orderBy('id', 'asc');
    emitEvent('customGroupList', allGroups);

    return res.status(201).json(created);
  } catch (err) {
    next(err);
  }
});

// PUT /api/monitors/custom-groups/:id - Atualiza um grupo personalizado
router.put('/custom-groups/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const existing = await db('monitor_groups').where({ id }).first();
    if (!existing) {
      return res.status(404).json({ error: 'Grupo não encontrado.' });
    }

    const { name, icon } = req.body;
    const trimmedName = name ? name.trim() : existing.name;
    const trimmedIcon = icon ? icon.trim() : existing.icon;
    const now = getLocalDateTime();

    if (trimmedName !== existing.name) {
      await db('monitors').where({ group_name: existing.name }).update({ group_name: trimmedName });
    }

    await db('monitor_groups').where({ id }).update({
      name: trimmedName,
      icon: trimmedIcon,
      updated_at: now
    });

    const updated = await db('monitor_groups').where({ id }).first();
    const allGroups = await db('monitor_groups').orderBy('order_index', 'asc').orderBy('id', 'asc');
    emitEvent('customGroupList', allGroups);

    if (trimmedName !== existing.name) {
      const allMons = await db('monitors').orderBy('order_index', 'asc').orderBy('id', 'asc');
      const enriched = await Promise.all(allMons.map(enrichMonitor));
      emitEvent('monitorList', enriched);
    }

    return res.json(updated);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/monitors/custom-groups/:id - Exclui um grupo personalizado
router.delete('/custom-groups/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const existing = await db('monitor_groups').where({ id }).first();
    if (!existing) {
      return res.status(404).json({ error: 'Grupo não encontrado.' });
    }

    await db('monitors').where({ group_name: existing.name }).update({ group_name: null });
    await db('monitor_groups').where({ id }).delete();

    const allGroups = await db('monitor_groups').orderBy('order_index', 'asc').orderBy('id', 'asc');
    emitEvent('customGroupList', allGroups);

    const allMons = await db('monitors').orderBy('order_index', 'asc').orderBy('id', 'asc');
    const enriched = await Promise.all(allMons.map(enrichMonitor));
    emitEvent('monitorList', enriched);

    return res.json({ ok: true, message: 'Grupo excluído com sucesso.' });
  } catch (err) {
    next(err);
  }
});

// PATCH /api/monitors/custom-groups/reorder - Reordena grupos via drag & drop
router.patch('/custom-groups/reorder', async (req, res, next) => {
  try {
    const { groups } = req.body;
    if (Array.isArray(groups)) {
      for (const item of groups) {
        if (item.id !== undefined && item.order_index !== undefined) {
          await db('monitor_groups').where({ id: item.id }).update({ order_index: item.order_index });
        }
      }
    }
    const allGroups = await db('monitor_groups').orderBy('order_index', 'asc').orderBy('id', 'asc');
    emitEvent('customGroupList', allGroups);
    return res.json(allGroups);
  } catch (err) {
    next(err);
  }
});

// PATCH /api/monitors/move - Move monitor para outro grupo ou altera posição (Drag & Drop)
router.patch('/move', async (req, res, next) => {
  try {
    const { monitorId, targetGroup, order_index } = req.body;
    if (!monitorId) {
      return res.status(400).json({ error: 'monitorId é obrigatório.' });
    }

    const updateData = {};
    if (targetGroup !== undefined) {
      updateData.group_name = targetGroup && targetGroup.trim() ? targetGroup.trim() : null;
    }
    if (order_index !== undefined) {
      updateData.order_index = Number(order_index);
    }
    updateData.updated_at = getLocalDateTime();

    await db('monitors').where({ id: monitorId }).update(updateData);

    const allMons = await db('monitors').orderBy('order_index', 'asc').orderBy('id', 'asc');
    const enriched = await Promise.all(allMons.map(enrichMonitor));
    emitEvent('monitorList', enriched);

    const updated = enriched.find(m => m.id === Number(monitorId));
    return res.json(updated || { ok: true });
  } catch (err) {
    next(err);
  }
});

// PATCH /api/monitors/reorder - Reordena múltiplos monitores (Drag & Drop)
router.patch('/reorder', async (req, res, next) => {
  try {
    const { monitors } = req.body;
    if (Array.isArray(monitors)) {
      const now = getLocalDateTime();
      for (const item of monitors) {
        const updateData = { order_index: item.order_index, updated_at: now };
        if (item.group_name !== undefined) {
          updateData.group_name = item.group_name && item.group_name.trim() ? item.group_name.trim() : null;
        }
        await db('monitors').where({ id: item.id }).update(updateData);
      }
    }

    const allMons = await db('monitors').orderBy('order_index', 'asc').orderBy('id', 'asc');
    const enriched = await Promise.all(allMons.map(enrichMonitor));
    emitEvent('monitorList', enriched);

    return res.json(enriched);
  } catch (err) {
    next(err);
  }
});

// GET /api/monitors/:id - Detalhes do monitor
router.get('/:id', async (req, res, next) => {
  try {
    const monitor = await db('monitors').where({ id: req.params.id }).first();
    if (!monitor) return res.status(404).json({ error: 'Monitor não encontrado.' });
    return res.json(await enrichMonitor(monitor));
  } catch (err) {
    next(err);
  }
});

// PUT /api/monitors/:id - Atualiza monitor
router.put('/:id', async (req, res, next) => {
  try {
    const existing = await db('monitors').where({ id: req.params.id }).first();
    if (!existing) return res.status(404).json({ error: 'Monitor não encontrado.' });

    const data = monitorSchema.parse(req.body);
    const now = getLocalDateTime();

    let pushToken = existing.push_token;
    if (data.type === 'push' && !pushToken) {
      pushToken = generateToken(32);
    }

    let configEncrypted = existing.config_encrypted;
    if (data.config !== undefined) {
      configEncrypted = data.config ? encrypt(data.config) : null;
    }

    const headersStr = typeof data.headers === 'object' && data.headers !== null
      ? JSON.stringify(data.headers)
      : data.headers || null;

    await db('monitors').where({ id: req.params.id }).update({
      name: data.name,
      type: data.type,
      hostname: data.hostname || null,
      url: data.url || null,
      port: data.port || null,
      method: data.method,
      keyword: data.keyword || null,
      invert_keyword: data.invert_keyword,
      expected_status: data.expected_status,
      headers: headersStr,
      body: data.body || null,
      ignore_tls: data.ignore_tls,
      timeout_s: data.timeout_s,
      interval_s: data.interval_s,
      retry_interval_s: data.retry_interval_s,
      max_retries: data.max_retries,
      resend_interval_min: data.resend_interval_min,
      cert_expiry_alert: data.cert_expiry_alert,
      parent_id: data.parent_id || null,
      push_token: pushToken,
      config_encrypted: configEncrypted,
      group_name: data.group_name !== undefined ? (data.group_name ? String(data.group_name).trim() : null) : existing.group_name,
      active: data.active,
      updated_at: now
    });

    if (data.notification_ids !== undefined) {
      await db('monitor_notification').where({ monitor_id: req.params.id }).delete();
      if (data.notification_ids.length > 0) {
        const links = data.notification_ids.map(nId => ({
          monitor_id: Number(req.params.id),
          notification_id: nId
        }));
        await db('monitor_notification').insert(links);
      }
    }

    const updated = await db('monitors').where({ id: req.params.id }).first();
    const enriched = await enrichMonitor(updated);

    if (enriched.active) {
      await scheduler.restartMonitor(Number(req.params.id));
    } else {
      scheduler.stopMonitor(Number(req.params.id));
    }

    emitEvent('monitorUpdated', enriched);
    return res.json(enriched);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/monitors/:id - Exclui monitor
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const count = await db('monitors').where({ id }).delete();
    if (!count) return res.status(404).json({ error: 'Monitor não encontrado.' });

    scheduler.stopMonitor(id);
    emitEvent('monitorDeleted', id);
    return res.json({ message: 'Monitor excluído com sucesso.' });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Erro ao excluir monitor.' });
  }
});

// POST /api/monitors/:id/pause - Pausa o monitor
router.post('/:id/pause', async (req, res) => {
  try {
    const id = Number(req.params.id);
    await db('monitors').where({ id }).update({ active: false });
    scheduler.stopMonitor(id);

    const updated = await db('monitors').where({ id }).first();
    const enriched = await enrichMonitor(updated);
    emitEvent('monitorUpdated', enriched);
    return res.json(enriched);
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Erro ao pausar monitor.' });
  }
});

// POST /api/monitors/:id/resume - Retoma o monitor
router.post('/:id/resume', async (req, res) => {
  try {
    const id = Number(req.params.id);
    await db('monitors').where({ id }).update({ active: true });
    await scheduler.startMonitor(id);

    const updated = await db('monitors').where({ id }).first();
    const enriched = await enrichMonitor(updated);
    emitEvent('monitorUpdated', enriched);
    return res.json(enriched);
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Erro ao retomar monitor.' });
  }
});

// GET /api/monitors/groups/list - Lista todos os grupos distintos com contadores
router.get('/groups/list', async (req, res, next) => {
  try {
    const monitors = await db('monitors').select('id', 'name', 'type', 'group_name', 'active');
    const enriched = await Promise.all(monitors.map(enrichMonitor));

    const groupsMap = {};

    for (const m of enriched) {
      const gName = m.group_name && m.group_name.trim() !== '' ? m.group_name.trim() : 'Geral';
      if (!groupsMap[gName]) {
        groupsMap[gName] = {
          name: gName,
          total: 0,
          up: 0,
          down: 0,
          pending: 0,
          maintenance: 0,
          monitors: []
        };
      }
      groupsMap[gName].total++;
      if (m.status === 1) groupsMap[gName].up++;
      else if (m.status === 0) groupsMap[gName].down++;
      else if (m.status === 2) groupsMap[gName].pending++;
      else if (m.status === 3) groupsMap[gName].maintenance++;

      groupsMap[gName].monitors.push(m);
    }

    const result = Object.values(groupsMap).sort((a, b) => a.name.localeCompare(b.name));
    return res.json(result);
  } catch (err) {
    next(err);
  }
});

// GET /api/monitors/heartbeats/summary - Histórico recente (60 batimentos) de todos os monitores
router.get('/heartbeats/summary', async (req, res, next) => {
  try {
    const monitors = await db('monitors').select('id');
    const heartbeatMap = {};
    for (const m of monitors) {
      const beats = await db('heartbeats')
        .where({ monitor_id: m.id })
        .orderBy('id', 'desc')
        .limit(60);
      heartbeatMap[m.id] = beats.reverse();
    }
    return res.json(heartbeatMap);
  } catch (err) {
    next(err);
  }
});

// GET /api/monitors/:id/heartbeats - Histórico de batimentos
router.get('/:id/heartbeats', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const limit = Math.min(parseInt(req.query.limit || 60, 10), 500);

    let query = db('heartbeats').where({ monitor_id: id }).orderBy('id', 'desc').limit(limit);

    if (req.query.from) {
      query = query.andWhere('time', '>=', String(req.query.from));
    }
    if (req.query.to) {
      query = query.andWhere('time', '<=', String(req.query.to));
    }

    const beats = await query;
    return res.json(beats.reverse());
  } catch (err) {
    next(err);
  }
});

// GET /api/monitors/:id/stats - Estatísticas consolidadas
router.get('/:id/stats', async (req, res, next) => {
  try {
    const stats = await getMonitorStats(Number(req.params.id));
    return res.json(stats);
  } catch (err) {
    next(err);
  }
});

// GET /api/monitors/:id/incidents - Lista de incidentes do monitor
router.get('/:id/incidents', async (req, res, next) => {
  try {
    const incidents = await db('incidents')
      .where({ monitor_id: req.params.id })
      .orderBy('id', 'desc')
      .limit(50);
    return res.json(incidents);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

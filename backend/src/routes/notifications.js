const express = require('express');
const router = express.Router();
const { z } = require('zod');
const { db } = require('../monitoring/db/knex');
const { encrypt, decrypt, maskSecret } = require('../monitoring/utils/crypto');
const { testNotificationChannel } = require('../monitoring/notifications/queue');

const notificationSchema = z.object({
  name: z.string().min(1, 'Nome do canal é obrigatório.').max(100),
  type: z.enum(['telegram', 'email', 'discord', 'slack', 'webhook']),
  config: z.record(z.any()),
  is_default: z.boolean().default(false),
  active: z.boolean().default(true)
});

function sanitizeNotification(notif) {
  let config = {};
  if (notif.config_encrypted) {
    try {
      config = decrypt(notif.config_encrypted) || {};
    } catch {}
  }

  const safeConfig = { ...config };
  if (safeConfig.botToken) safeConfig.botToken = maskSecret(safeConfig.botToken);
  if (safeConfig.pass) safeConfig.pass = '********';
  if (safeConfig.webhookUrl) safeConfig.webhookUrl = maskSecret(safeConfig.webhookUrl);

  return {
    id: notif.id,
    name: notif.name,
    type: notif.type,
    is_default: Boolean(notif.is_default),
    active: Boolean(notif.active),
    config: safeConfig
  };
}

// GET /api/notifications - Lista todos os canais
router.get('/', async (req, res) => {
  try {
    const list = await db('notifications').orderBy('id', 'asc');
    return res.json(list.map(sanitizeNotification));
  } catch (err) {
    return res.status(500).json({ error: `Erro ao listar notificações: ${err.message}` });
  }
});

// POST /api/notifications - Cria um novo canal
router.post('/', async (req, res) => {
  try {
    const data = notificationSchema.parse(req.body);
    const encrypted = encrypt(data.config);

    const [id] = await db('notifications').insert({
      name: data.name,
      type: data.type,
      config_encrypted: encrypted,
      is_default: data.is_default,
      active: data.active
    }).returning('id');

    const createdId = typeof id === 'object' ? id.id : id;
    const created = await db('notifications').where({ id: createdId }).first();
    return res.status(201).json(sanitizeNotification(created));
  } catch (err) {
    const msg = err.issues ? err.issues.map(i => i.message).join(', ') : err.message;
    return res.status(400).json({ error: `Erro ao criar canal: ${msg}` });
  }
});

// POST /api/notifications/test-temp - Testa canal de notificação com credenciais passadas no corpo
router.post('/test-temp', async (req, res) => {
  try {
    const { type, config } = req.body;
    if (!type || !config) {
      return res.status(400).json({ error: 'Tipo e configuração são obrigatórios para teste.' });
    }
    await testNotificationChannel({ type }, config);
    return res.json({ message: 'Notificação de teste enviada com sucesso!' });
  } catch (err) {
    return res.status(400).json({
      error: `Falha ao testar canal de notificação: ${err.message}`
    });
  }
});

// GET /api/notifications/:id - Detalhes do canal
router.get('/:id', async (req, res) => {
  try {
    const notif = await db('notifications').where({ id: req.params.id }).first();
    if (!notif) return res.status(404).json({ error: 'Canal de notificação não encontrado.' });
    return res.json(sanitizeNotification(notif));
  } catch (err) {
    return res.status(500).json({ error: `Erro ao obter canal: ${err.message}` });
  }
});

// PUT /api/notifications/:id - Atualiza um canal
router.put('/:id', async (req, res) => {
  try {
    const existing = await db('notifications').where({ id: req.params.id }).first();
    if (!existing) return res.status(404).json({ error: 'Canal de notificação não encontrado.' });

    const data = notificationSchema.parse(req.body);
    let finalConfig = data.config;

    if (existing.config_encrypted) {
      const originalConfig = decrypt(existing.config_encrypted) || {};
      for (const [k, v] of Object.entries(finalConfig)) {
        if (typeof v === 'string' && (v.includes('***') || v === '********')) {
          finalConfig[k] = originalConfig[k];
        }
      }
    }

    const encrypted = encrypt(finalConfig);

    await db('notifications').where({ id: req.params.id }).update({
      name: data.name,
      type: data.type,
      config_encrypted: encrypted,
      is_default: data.is_default,
      active: data.active
    });

    const updated = await db('notifications').where({ id: req.params.id }).first();
    return res.json(sanitizeNotification(updated));
  } catch (err) {
    const msg = err.issues ? err.issues.map(i => i.message).join(', ') : err.message;
    return res.status(400).json({ error: `Erro ao atualizar canal: ${msg}` });
  }
});

// DELETE /api/notifications/:id - Remove um canal
router.delete('/:id', async (req, res) => {
  try {
    const count = await db('notifications').where({ id: req.params.id }).delete();
    if (!count) return res.status(404).json({ error: 'Canal de notificação não encontrado.' });
    return res.json({ message: 'Canal de notificação removido com sucesso.' });
  } catch (err) {
    return res.status(500).json({ error: `Erro ao excluir canal: ${err.message}` });
  }
});

// POST /api/notifications/:id/test - Dispara teste imediato
router.post('/:id/test', async (req, res) => {
  try {
    const notif = await db('notifications').where({ id: req.params.id }).first();
    if (!notif) return res.status(404).json({ error: 'Canal de notificação não encontrado.' });

    await testNotificationChannel(notif);
    return res.json({ message: 'Notificação de teste enviada com sucesso!' });
  } catch (err) {
    return res.status(400).json({
      error: `Falha ao testar canal de notificação: ${err.message}`
    });
  }
});

module.exports = router;

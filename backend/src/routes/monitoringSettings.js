const express = require('express');
const router = express.Router();
const { db } = require('../monitoring/db/knex');
const { env } = require('../monitoring/config/env');

// GET /api/settings - Retorna todas as configurações
router.get('/', async (req, res, next) => {
  try {
    const list = await db('settings').select('*');
    const settingsMap = {
      heartbeat_retention_days: env.HEARTBEAT_RETENTION_DAYS,
      timezone: env.TZ || 'America/Sao_Paulo'
    };

    for (const item of list) {
      try {
        settingsMap[item.key] = JSON.parse(item.value);
      } catch {
        settingsMap[item.key] = item.value;
      }
    }

    return res.json(settingsMap);
  } catch (err) {
    next(err);
  }
});

// PUT /api/settings - Atualiza configurações
router.put('/', async (req, res, next) => {
  try {
    const updates = req.body;
    for (const [key, val] of Object.entries(updates)) {
      const valStr = typeof val === 'object' ? JSON.stringify(val) : String(val);
      const existing = await db('settings').where({ key }).first();
      if (existing) {
        await db('settings').where({ key }).update({ value: valStr });
      } else {
        await db('settings').insert({ key, value: valStr });
      }
    }

    return res.json({ message: 'Configurações atualizadas com sucesso!' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

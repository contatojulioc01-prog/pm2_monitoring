const express = require('express');
const router = express.Router();
const { z } = require('zod');
const { db } = require('../monitoring/db/knex');

const maintenanceSchema = z.object({
  name: z.string().min(1, 'Nome da manutenção é obrigatório.').max(100),
  strategy: z.enum(['once', 'weekly']),
  start_at: z.string().nullable().optional(),
  end_at: z.string().nullable().optional(),
  weekdays: z.string().nullable().optional(),
  start_time: z.string().nullable().optional(),
  end_time: z.string().nullable().optional(),
  active: z.boolean().default(true),
  monitor_ids: z.array(z.number()).default([])
});

// GET /api/maintenances - Lista manutenções
router.get('/', async (req, res) => {
  try {
    const list = await db('maintenances').orderBy('id', 'desc');
    const enriched = await Promise.all(
      list.map(async (m) => {
        const monitors = await db('maintenance_monitor')
          .join('monitors', 'maintenance_monitor.monitor_id', 'monitors.id')
          .where('maintenance_monitor.maintenance_id', m.id)
          .select('monitors.id', 'monitors.name');
        return {
          ...m,
          active: Boolean(m.active),
          monitors,
          monitor_ids: monitors.map(x => x.id)
        };
      })
    );
    return res.json(enriched);
  } catch (err) {
    return res.status(500).json({ error: `Erro ao listar manutenções: ${err.message}` });
  }
});

// POST /api/maintenances - Cria manutenção
router.post('/', async (req, res) => {
  try {
    const data = maintenanceSchema.parse(req.body);

    const [id] = await db('maintenances').insert({
      name: data.name,
      strategy: data.strategy,
      start_at: data.start_at || null,
      end_at: data.end_at || null,
      weekdays: data.weekdays || null,
      start_time: data.start_time || null,
      end_time: data.end_time || null,
      active: data.active
    }).returning('id');

    const createdId = typeof id === 'object' ? id.id : id;

    if (data.monitor_ids && data.monitor_ids.length > 0) {
      const links = data.monitor_ids.map(mId => ({
        maintenance_id: createdId,
        monitor_id: mId
      }));
      await db('maintenance_monitor').insert(links);
    }

    const created = await db('maintenances').where({ id: createdId }).first();
    return res.status(201).json({ ...created, monitor_ids: data.monitor_ids });
  } catch (err) {
    const msg = err.issues ? err.issues.map(i => i.message).join(', ') : err.message;
    return res.status(400).json({ error: `Erro ao criar manutenção: ${msg}` });
  }
});

// PUT /api/maintenances/:id - Atualiza manutenção
router.put('/:id', async (req, res) => {
  try {
    const data = maintenanceSchema.parse(req.body);
    const existing = await db('maintenances').where({ id: req.params.id }).first();
    if (!existing) return res.status(404).json({ error: 'Manutenção não encontrada.' });

    await db('maintenances').where({ id: req.params.id }).update({
      name: data.name,
      strategy: data.strategy,
      start_at: data.start_at || null,
      end_at: data.end_at || null,
      weekdays: data.weekdays || null,
      start_time: data.start_time || null,
      end_time: data.end_time || null,
      active: data.active
    });

    await db('maintenance_monitor').where({ maintenance_id: req.params.id }).delete();
    if (data.monitor_ids && data.monitor_ids.length > 0) {
      const links = data.monitor_ids.map(mId => ({
        maintenance_id: Number(req.params.id),
        monitor_id: mId
      }));
      await db('maintenance_monitor').insert(links);
    }

    const updated = await db('maintenances').where({ id: req.params.id }).first();
    return res.json({ ...updated, monitor_ids: data.monitor_ids });
  } catch (err) {
    const msg = err.issues ? err.issues.map(i => i.message).join(', ') : err.message;
    return res.status(400).json({ error: `Erro ao atualizar manutenção: ${msg}` });
  }
});

// DELETE /api/maintenances/:id - Exclui manutenção
router.delete('/:id', async (req, res) => {
  try {
    const count = await db('maintenances').where({ id: req.params.id }).delete();
    if (!count) return res.status(404).json({ error: 'Manutenção não encontrada.' });
    return res.json({ message: 'Janela de manutenção removida com sucesso.' });
  } catch (err) {
    return res.status(500).json({ error: `Erro ao excluir manutenção: ${err.message}` });
  }
});

module.exports = router;

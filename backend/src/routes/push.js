const express = require('express');
const router = express.Router();
const { db } = require('../monitoring/db/knex');
const { processHeartbeat } = require('../monitoring/services/heartbeatService');

const handlePush = async (req, res, next) => {
  try {
    const { token } = req.params;
    if (!token) {
      return res.status(400).json({ error: 'Token de push não fornecido.' });
    }

    const monitor = await db('monitors')
      .where({ push_token: token, active: true })
      .first();

    if (!monitor) {
      return res.status(404).json({ error: 'Monitor de push não encontrado ou inativo.' });
    }

    const statusParam = (req.query.status || req.body?.status || 'up').toLowerCase();
    const isUp = statusParam === 'up' || statusParam === 'ok' || statusParam === '1';
    const msg = req.query.msg || req.body?.msg || (isUp ? 'Heartbeat push recebido com sucesso.' : 'Falha reportada via push.');
    const pingMs = parseFloat(req.query.ping || req.body?.ping || 0);

    const probeResult = {
      ok: isUp,
      msg,
      pingMs,
      extra: { push: true, clientIp: req.ip }
    };

    const result = await processHeartbeat(monitor, probeResult, isUp ? 0 : 3);

    return res.json({
      success: true,
      status: result.newStatus === 1 ? 'UP' : (result.newStatus === 2 ? 'PENDING' : 'DOWN'),
      message: 'Batimento push registrado com sucesso.'
    });
  } catch (err) {
    next(err);
  }
};

router.get('/:token', handlePush);
router.post('/:token', handlePush);

module.exports = router;

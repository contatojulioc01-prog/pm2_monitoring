const { Server } = require('socket.io');
const { db } = require('../db/knex');
const { logger } = require('../utils/logger');

let ioInstance = null;

function initSocketServer(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    },
    transports: ['polling', 'websocket'],
    allowEIO3: true,
    pingTimeout: 30000,
    pingInterval: 25000
  });

  io.on('connection', async (socket) => {
    logger.info(`Cliente Socket.IO conectado: ID ${socket.id}`);

    try {
      const monitors = await db('monitors').orderBy('order_index', 'asc').orderBy('id', 'asc');
      const enrichedMonitors = [];
      const heartbeatMap = {};
      const statsMap = {};
      const { getMonitorStats } = require('../services/statsService');

      for (const m of monitors) {
        const beats = await db('heartbeats')
          .where({ monitor_id: m.id })
          .orderBy('id', 'desc')
          .limit(60);

        const reversedBeats = [...beats].reverse();
        heartbeatMap[m.id] = reversedBeats;

        statsMap[m.id] = await getMonitorStats(m.id);

        const lastBeat = beats[0]; // O mais recente (primeiro antes do reverse)
        const tls = await db('tls_info').where({ monitor_id: m.id }).first();

        enrichedMonitors.push({
          ...m,
          active: Boolean(m.active),
          ignore_tls: Boolean(m.ignore_tls),
          invert_keyword: Boolean(m.invert_keyword),
          cert_expiry_alert: Boolean(m.cert_expiry_alert),
          status: lastBeat ? lastBeat.status : (m.active ? 1 : null),
          lastBeatTime: lastBeat ? lastBeat.time : null,
          ping_ms: lastBeat ? lastBeat.ping_ms : null,
          msg: lastBeat ? lastBeat.msg : null,
          tls_info: tls || null
        });
      }

      socket.emit('monitorList', enrichedMonitors);
      socket.emit('heartbeatList', heartbeatMap);
      socket.emit('statsList', statsMap);

      const activeIncidents = await db('incidents')
        .whereNull('ended_at')
        .orderBy('id', 'desc');
      socket.emit('incidentList', activeIncidents);

      const tlsList = await db('tls_info').select('*');
      socket.emit('certList', tlsList);

      const groups = await db('monitor_groups').orderBy('order_index', 'asc').orderBy('id', 'asc');
      socket.emit('customGroupList', groups);

    } catch (err) {
      logger.error('Erro ao enviar estado inicial via socket:', err);
    }

    socket.on('disconnect', () => {
      logger.info(`Cliente Socket.IO desconectado: ID ${socket.id}`);
    });
  });

  ioInstance = io;
  return io;
}

function getIO() {
  return ioInstance;
}

function emitEvent(event, data) {
  if (ioInstance) {
    ioInstance.emit(event, data);
  }
}

module.exports = {
  initSocketServer,
  getIO,
  emitEvent
};

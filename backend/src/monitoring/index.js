const { runMigrations } = require('./db/migrate');
const { db } = require('./db/knex');
const { initSocketServer, emitEvent } = require('./socket/socketServer');
const { scheduler } = require('./scheduler/scheduler');
const { initRetentionJob } = require('./jobs/retentionJob');
const { initCertJob } = require('./jobs/certJob');
const { logger } = require('./utils/logger');

async function initMonitoring(httpServer) {
  try {
    logger.info('Inicializando subsistema de monitoramento contínuo...');
    await runMigrations();
    initSocketServer(httpServer);
    initRetentionJob();
    initCertJob();
    await scheduler.start();
    logger.info('Subsistema de monitoramento inicializado com sucesso.');
  } catch (err) {
    logger.error('Falha ao inicializar subsistema de monitoramento:', err);
  }
}

module.exports = {
  initMonitoring,
  db,
  scheduler,
  emitEvent
};

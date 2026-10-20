const cron = require('node-cron');
const { db } = require('../db/knex');
const { env } = require('../config/env');
const { logger } = require('../utils/logger');
const { getLocalDateTime, getLocalDayBucket } = require('../utils/date');

function initRetentionJob() {
  // Executa diariamente às 03:00
  cron.schedule('0 3 * * *', async () => {
    logger.info('Iniciando job diário de retenção e limpeza de dados de monitoramento...');

    try {
      let retentionDays = env.HEARTBEAT_RETENTION_DAYS || 30;
      const setting = await db('settings').where({ key: 'heartbeat_retention_days' }).first();
      if (setting && setting.value) {
        retentionDays = parseInt(setting.value, 10) || retentionDays;
      }

      const cutoffHeartbeat = new Date(Date.now() - retentionDays * 24 * 60 * 60 * 1000);
      const cutoffHeartbeatIso = getLocalDateTime(cutoffHeartbeat);

      const deletedBeats = await db('heartbeats')
        .where('time', '<', cutoffHeartbeatIso)
        .delete();

      const cutoffHourly = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000);
      const cutoffHourlyBucket = getLocalDayBucket(cutoffHourly) + ' 00:00:00';

      const deletedHourly = await db('stat_hourly')
        .where('bucket_ts', '<', cutoffHourlyBucket)
        .delete();

      const cutoffDaily = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
      const cutoffDailyBucket = getLocalDayBucket(cutoffDaily);

      const deletedDaily = await db('stat_daily')
        .where('bucket_ts', '<', cutoffDailyBucket)
        .delete();

      logger.info(`Job de retenção concluído. Removidos: ${deletedBeats} batimentos (> ${retentionDays} dias), ${deletedHourly} horas (> 90 dias), ${deletedDaily} dias (> 365 dias).`);
    } catch (err) {
      logger.error('Erro ao executar job de retenção:', err);
    }
  });
}

module.exports = { initRetentionJob };

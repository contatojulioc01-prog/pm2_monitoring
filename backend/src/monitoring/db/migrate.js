const { db } = require('./knex');
const { logger } = require('../utils/logger');

async function runMigrations() {
  try {
    // 1. monitors
    const hasMonitors = await db.schema.hasTable('monitors');
    if (!hasMonitors) {
      await db.schema.createTable('monitors', (table) => {
        table.increments('id').primary();
        table.string('name', 255).notNullable();
        table.string('type', 50).notNullable(); // http|tcp|ping|dns|smtp|database|push|group
        table.string('hostname', 255).nullable();
        table.text('url').nullable();
        table.integer('port').nullable();
        table.string('method', 10).defaultTo('GET');
        table.string('keyword', 255).nullable();
        table.boolean('invert_keyword').defaultTo(false);
        table.string('expected_status', 100).defaultTo('200-299');
        table.text('headers').nullable();
        table.text('body').nullable();
        table.boolean('ignore_tls').defaultTo(false);
        table.integer('timeout_s').defaultTo(10);
        table.integer('interval_s').defaultTo(20);
        table.integer('retry_interval_s').defaultTo(10);
        table.integer('max_retries').defaultTo(2);
        table.integer('resend_interval_min').defaultTo(0);
        table.boolean('cert_expiry_alert').defaultTo(false);
        table.integer('parent_id').nullable().references('id').inTable('monitors').onDelete('SET NULL');
        table.string('push_token', 100).nullable().unique();
        table.text('config_encrypted').nullable();
        table.boolean('active').defaultTo(true);
        table.string('created_at', 50).notNullable();
        table.string('updated_at', 50).notNullable();
      });
      logger.info('Tabela "monitors" criada com sucesso.');
    }

    const hasGroupName = await db.schema.hasColumn('monitors', 'group_name');
    if (!hasGroupName) {
      await db.schema.alterTable('monitors', (table) => {
        table.string('group_name', 100).nullable().defaultTo(null);
      });
      logger.info('Coluna "group_name" adicionada à tabela "monitors".');
    }

    const hasOrderIndex = await db.schema.hasColumn('monitors', 'order_index');
    if (!hasOrderIndex) {
      await db.schema.alterTable('monitors', (table) => {
        table.integer('order_index').defaultTo(0);
      });
      logger.info('Coluna "order_index" adicionada à tabela "monitors".');
    }

    const hasMaxRetries = await db.schema.hasColumn('monitors', 'max_retries');
    if (!hasMaxRetries) {
      await db.schema.alterTable('monitors', (table) => {
        table.integer('max_retries').defaultTo(2);
      });
      logger.info('Coluna "max_retries" adicionada à tabela "monitors".');
    }

    const hasRetryInterval = await db.schema.hasColumn('monitors', 'retry_interval_s');
    if (!hasRetryInterval) {
      await db.schema.alterTable('monitors', (table) => {
        table.integer('retry_interval_s').defaultTo(10);
      });
      logger.info('Coluna "retry_interval_s" adicionada à tabela "monitors".');
    }

    // monitor_groups (Grupos Personalizados)
    const hasMonitorGroups = await db.schema.hasTable('monitor_groups');
    if (!hasMonitorGroups) {
      await db.schema.createTable('monitor_groups', (table) => {
        table.increments('id').primary();
        table.string('name', 100).notNullable().unique();
        table.string('icon', 50).defaultTo('folder');
        table.integer('order_index').defaultTo(0);
        table.string('created_at', 50).notNullable();
        table.string('updated_at', 50).notNullable();
      });
      logger.info('Tabela "monitor_groups" criada com sucesso.');

      const { getLocalDateTime } = require('../utils/date');
      const now = getLocalDateTime();
      await db('monitor_groups').insert([
        { name: 'E-mails', icon: 'mail', order_index: 0, created_at: now, updated_at: now },
        { name: 'Ping & Servidores', icon: 'router', order_index: 1, created_at: now, updated_at: now },
        { name: 'Web & APIs', icon: 'language', order_index: 2, created_at: now, updated_at: now }
      ]);
    }

    // 2. heartbeats
    const hasHeartbeats = await db.schema.hasTable('heartbeats');
    if (!hasHeartbeats) {
      await db.schema.createTable('heartbeats', (table) => {
        table.increments('id').primary();
        table.integer('monitor_id').notNullable().references('id').inTable('monitors').onDelete('CASCADE');
        table.integer('status').notNullable(); // 0 DOWN, 1 UP, 2 PENDING, 3 MAINTENANCE
        table.text('msg').nullable();
        table.float('ping_ms').nullable();
        table.boolean('important').defaultTo(false);
        table.float('duration_s').nullable();
        table.string('time', 50).notNullable();
        table.index(['monitor_id', 'time']);
      });
      logger.info('Tabela "heartbeats" criada com sucesso.');
    }

    // 3. stat_hourly
    const hasStatHourly = await db.schema.hasTable('stat_hourly');
    if (!hasStatHourly) {
      await db.schema.createTable('stat_hourly', (table) => {
        table.integer('monitor_id').notNullable().references('id').inTable('monitors').onDelete('CASCADE');
        table.string('bucket_ts', 50).notNullable();
        table.integer('up_count').defaultTo(0);
        table.integer('down_count').defaultTo(0);
        table.float('ping_avg').nullable();
        table.float('ping_min').nullable();
        table.float('ping_max').nullable();
        table.primary(['monitor_id', 'bucket_ts']);
      });
      logger.info('Tabela "stat_hourly" criada com sucesso.');
    }

    // 4. stat_daily
    const hasStatDaily = await db.schema.hasTable('stat_daily');
    if (!hasStatDaily) {
      await db.schema.createTable('stat_daily', (table) => {
        table.integer('monitor_id').notNullable().references('id').inTable('monitors').onDelete('CASCADE');
        table.string('bucket_ts', 50).notNullable();
        table.integer('up_count').defaultTo(0);
        table.integer('down_count').defaultTo(0);
        table.float('ping_avg').nullable();
        table.float('ping_min').nullable();
        table.float('ping_max').nullable();
        table.primary(['monitor_id', 'bucket_ts']);
      });
      logger.info('Tabela "stat_daily" criada com sucesso.');
    }

    // 5. incidents
    const hasIncidents = await db.schema.hasTable('incidents');
    if (!hasIncidents) {
      await db.schema.createTable('incidents', (table) => {
        table.increments('id').primary();
        table.integer('monitor_id').notNullable().references('id').inTable('monitors').onDelete('CASCADE');
        table.string('started_at', 50).notNullable();
        table.string('ended_at', 50).nullable();
        table.text('cause').nullable();
        table.boolean('acknowledged').defaultTo(false);
      });
      logger.info('Tabela "incidents" criada com sucesso.');
    }

    // 6. notifications
    const hasNotifications = await db.schema.hasTable('notifications');
    if (!hasNotifications) {
      await db.schema.createTable('notifications', (table) => {
        table.increments('id').primary();
        table.string('name', 255).notNullable();
        table.string('type', 50).notNullable(); // telegram, email, discord, slack, webhook
        table.text('config_encrypted').notNullable();
        table.boolean('is_default').defaultTo(false);
        table.boolean('active').defaultTo(true);
      });
      logger.info('Tabela "notifications" criada com sucesso.');
    }

    // 7. monitor_notification
    const hasMonNotif = await db.schema.hasTable('monitor_notification');
    if (!hasMonNotif) {
      await db.schema.createTable('monitor_notification', (table) => {
        table.integer('monitor_id').notNullable().references('id').inTable('monitors').onDelete('CASCADE');
        table.integer('notification_id').notNullable().references('id').inTable('notifications').onDelete('CASCADE');
        table.primary(['monitor_id', 'notification_id']);
      });
      logger.info('Tabela "monitor_notification" criada com sucesso.');
    }

    // 8. notification_log
    const hasNotifLog = await db.schema.hasTable('notification_log');
    if (!hasNotifLog) {
      await db.schema.createTable('notification_log', (table) => {
        table.increments('id').primary();
        table.integer('notification_id').nullable().references('id').inTable('notifications').onDelete('SET NULL');
        table.integer('monitor_id').nullable().references('id').inTable('monitors').onDelete('CASCADE');
        table.string('event', 50).notNullable(); // down|up|cert|resend
        table.string('status', 50).notNullable(); // sent|failed
        table.integer('attempts').defaultTo(1);
        table.text('error').nullable();
        table.string('created_at', 50).notNullable();
      });
      logger.info('Tabela "notification_log" criada com sucesso.');
    }

    // 9. maintenances
    const hasMaintenances = await db.schema.hasTable('maintenances');
    if (!hasMaintenances) {
      await db.schema.createTable('maintenances', (table) => {
        table.increments('id').primary();
        table.string('name', 255).notNullable();
        table.string('strategy', 50).notNullable(); // once|weekly
        table.string('start_at', 50).nullable();
        table.string('end_at', 50).nullable();
        table.string('weekdays', 50).nullable();
        table.string('start_time', 20).nullable();
        table.string('end_time', 20).nullable();
        table.boolean('active').defaultTo(true);
      });
      logger.info('Tabela "maintenances" criada com sucesso.');
    }

    // 10. maintenance_monitor
    const hasMaintMon = await db.schema.hasTable('maintenance_monitor');
    if (!hasMaintMon) {
      await db.schema.createTable('maintenance_monitor', (table) => {
        table.integer('maintenance_id').notNullable().references('id').inTable('maintenances').onDelete('CASCADE');
        table.integer('monitor_id').notNullable().references('id').inTable('monitors').onDelete('CASCADE');
        table.primary(['maintenance_id', 'monitor_id']);
      });
      logger.info('Tabela "maintenance_monitor" criada com sucesso.');
    }

    // 11. tls_info
    const hasTls = await db.schema.hasTable('tls_info');
    if (!hasTls) {
      await db.schema.createTable('tls_info', (table) => {
        table.integer('monitor_id').notNullable().unique().references('id').inTable('monitors').onDelete('CASCADE');
        table.string('valid_to', 50).nullable();
        table.string('issuer', 255).nullable();
        table.string('last_checked', 50).nullable();
      });
      logger.info('Tabela "tls_info" criada com sucesso.');
    }

    // 12. settings
    const hasSettings = await db.schema.hasTable('settings');
    if (!hasSettings) {
      await db.schema.createTable('settings', (table) => {
        table.string('key', 100).primary();
        table.text('value').nullable();
      });
      logger.info('Tabela "settings" criada com sucesso.');
    }

    logger.info('Verificação e migração do banco de dados de monitoramento concluída.');
  } catch (err) {
    logger.error('Erro ao executar migrações de monitoramento:', err);
    throw err;
  }
}

module.exports = { runMigrations };

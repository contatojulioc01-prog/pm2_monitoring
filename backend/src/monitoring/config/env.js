const path = require('path');

const env = {
  PORT: process.env.PORT || 6767,
  NODE_ENV: process.env.NODE_ENV || 'production',
  TZ: process.env.TZ || 'America/Sao_Paulo',
  DB_CLIENT: process.env.DB_CLIENT || 'sqlite',
  SQLITE_PATH: process.env.SQLITE_PATH || path.resolve(__dirname, '../../data/monitoramento.sqlite'),
  PG_HOST: process.env.PG_HOST || 'localhost',
  PG_PORT: parseInt(process.env.PG_PORT || '5432', 10),
  PG_USER: process.env.PG_USER || 'postgres',
  PG_PASSWORD: process.env.PG_PASSWORD || 'postgres',
  PG_DATABASE: process.env.PG_DATABASE || 'dc_monitoramento',
  APP_SECRET: process.env.APP_SECRET || 'dc_monitoramento_app_secret_key_32bytes_min!',
  JWT_SECRET: process.env.JWT_SECRET || 'dc_monitoramento_jwt_secret_key_production_2026',
  HEARTBEAT_RETENTION_DAYS: parseInt(process.env.HEARTBEAT_RETENTION_DAYS || '30', 10)
};

module.exports = { env };

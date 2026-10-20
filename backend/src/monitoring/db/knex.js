const path = require('path');
const fs = require('fs');
const knex = require('knex');
const { env } = require('../config/env');

const isSqlite = env.DB_CLIENT === 'sqlite';

if (isSqlite) {
  const dir = path.dirname(env.SQLITE_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const knexConfig = {
  client: isSqlite ? 'sqlite3' : 'pg',
  connection: isSqlite
    ? {
        filename: env.SQLITE_PATH
      }
    : {
        host: env.PG_HOST,
        port: env.PG_PORT,
        user: env.PG_USER,
        password: env.PG_PASSWORD,
        database: env.PG_DATABASE,
        charset: 'utf8'
      },
  useNullAsDefault: isSqlite,
  pool: isSqlite
    ? {
        min: 1,
        max: 1,
        afterCreate: (conn, cb) => {
          conn.run('PRAGMA foreign_keys = ON;', cb);
        }
      }
    : {
        min: 2,
        max: 10
      }
};

const db = knex(knexConfig);

module.exports = { db, knexConfig };

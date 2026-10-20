const { decrypt } = require('../utils/crypto');

/**
 * Driver Database (PostgreSQL / SQLite, etc.)
 * @param {object} monitor
 * @returns {Promise<{ ok: boolean, msg: string, pingMs: number, extra: object }>}
 */
async function testDatabase(monitor) {
  let connectionConfig = null;
  if (monitor.config_encrypted) {
    connectionConfig = decrypt(monitor.config_encrypted);
  }

  const connString = typeof connectionConfig === 'string'
    ? connectionConfig
    : (connectionConfig?.connectionString || monitor.url || '');

  const dbType = connectionConfig?.dbType || 'postgres';
  const timeoutMs = (monitor.timeout_s || 10) * 1000;
  const startTime = Date.now();

  if (dbType === 'postgres' || connString.startsWith('postgres://') || connString.startsWith('postgresql://')) {
    try {
      const pg = require('pg');
      const client = new pg.Client({
        connectionString: connString || undefined,
        host: connectionConfig?.host || monitor.hostname || 'localhost',
        port: connectionConfig?.port || monitor.port || 5432,
        user: connectionConfig?.user || 'postgres',
        password: connectionConfig?.password || undefined,
        database: connectionConfig?.database || 'postgres',
        connectionTimeoutMillis: timeoutMs
      });

      await client.connect();
      await client.query('SELECT 1 as alive;');
      const pingMs = Date.now() - startTime;
      await client.end();
      return {
        ok: true,
        msg: `Banco de Dados PostgreSQL conectado com sucesso (${pingMs}ms).`,
        pingMs,
        extra: { dbType: 'postgres' }
      };
    } catch (err) {
      const pingMs = Date.now() - startTime;
      return {
        ok: false,
        msg: `Falha ao conectar no banco PostgreSQL: ${err.message}`,
        pingMs,
        extra: { error: err.message }
      };
    }
  }

  return {
    ok: false,
    msg: `Tipo de banco de dados "${dbType}" não suportado ou credenciais inválidas.`,
    pingMs: 0,
    extra: {}
  };
}

module.exports = { testDatabase };

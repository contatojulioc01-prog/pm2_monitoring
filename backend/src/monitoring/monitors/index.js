const { testHttp } = require('./http');
const { testTcp } = require('./tcp');
const { testPing } = require('./ping');
const { testDns } = require('./dns');
const { testSmtp } = require('./smtp');
const { testDatabase } = require('./database');
const { testPush } = require('./push');
const { testGroup } = require('./group');

const drivers = {
  http: testHttp,
  tcp: testTcp,
  port: testTcp,
  ping: testPing,
  dns: testDns,
  smtp: testSmtp,
  database: testDatabase,
  push: testPush,
  group: testGroup
};

/**
 * Executa a sonda do monitor com base no seu tipo
 * @param {object} monitor
 * @returns {Promise<{ ok: boolean, msg: string, pingMs: number, extra: object, statusOverride?: number }>}
 */
async function runProbe(monitor) {
  const driver = drivers[monitor.type];
  if (!driver) {
    return {
      ok: false,
      msg: `Tipo de monitor desconhecido: "${monitor.type}"`,
      pingMs: 0,
      extra: {}
    };
  }

  try {
    return await driver(monitor);
  } catch (err) {
    return {
      ok: false,
      msg: `Exceção inesperada na sonda: ${err.message}`,
      pingMs: 0,
      extra: { error: err.message }
    };
  }
}

module.exports = {
  drivers,
  runProbe
};

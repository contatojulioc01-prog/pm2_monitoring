const net = require('net');

/**
 * Driver TCP Port
 * @param {object} monitor
 * @returns {Promise<{ ok: boolean, msg: string, pingMs: number, extra: object }>}
 */
function testTcp(monitor) {
  return new Promise((resolve) => {
    let host = monitor.hostname || '';
    if (!host && monitor.url) {
      host = monitor.url.replace(/^https?:\/\//, '').split('/')[0].split(':')[0];
    }
    const port = monitor.port;
    const timeoutMs = (monitor.timeout_s || 10) * 1000;

    if (!host || !port) {
      return resolve({
        ok: false,
        msg: 'Host e porta TCP são obrigatórios.',
        pingMs: 0,
        extra: {}
      });
    }

    const startTime = Date.now();
    const socket = new net.Socket();

    socket.setTimeout(timeoutMs);

    socket.connect(port, host, () => {
      const pingMs = Date.now() - startTime;
      socket.destroy();
      resolve({
        ok: true,
        msg: `Porta TCP ${host}:${port} aberta e acessível (${pingMs}ms).`,
        pingMs,
        extra: { host, port }
      });
    });

    socket.on('error', (err) => {
      const pingMs = Date.now() - startTime;
      socket.destroy();
      resolve({
        ok: false,
        msg: `Falha na conexão TCP ${host}:${port} (${err.code || err.message}).`,
        pingMs,
        extra: { host, port, error: err.message }
      });
    });

    socket.on('timeout', () => {
      const pingMs = Date.now() - startTime;
      socket.destroy();
      resolve({
        ok: false,
        msg: `Tempo limite esgotado para conexão TCP ${host}:${port} (${monitor.timeout_s || 10}s).`,
        pingMs,
        extra: { host, port, timeout: true }
      });
    });
  });
}

module.exports = { testTcp };

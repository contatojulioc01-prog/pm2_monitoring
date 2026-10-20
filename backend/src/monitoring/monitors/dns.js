const dns = require('dns');

/**
 * Driver DNS
 * @param {object} monitor
 * @returns {Promise<{ ok: boolean, msg: string, pingMs: number, extra: object }>}
 */
function testDns(monitor) {
  return new Promise((resolve) => {
    let host = monitor.hostname || (monitor.url ? monitor.url.replace(/^https?:\/\//, '').split('/')[0] : '');
    host = host.trim();

    if (!host) {
      return resolve({
        ok: false,
        msg: 'Hostname para resolução DNS não informado.',
        pingMs: 0,
        extra: {}
      });
    }

    const startTime = Date.now();
    const timeoutMs = (monitor.timeout_s || 5) * 1000;

    let finished = false;
    const timer = setTimeout(() => {
      if (!finished) {
        finished = true;
        resolve({
          ok: false,
          msg: `Tempo limite esgotado para resolução DNS de "${host}".`,
          pingMs: Date.now() - startTime,
          extra: { timeout: true }
        });
      }
    }, timeoutMs);

    dns.lookup(host, { all: true }, (err, addresses) => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);

      const pingMs = Date.now() - startTime;

      if (err) {
        return resolve({
          ok: false,
          msg: `Falha na resolução DNS (${err.code || err.message}).`,
          pingMs,
          extra: { error: err.message }
        });
      }

      const ipList = addresses.map(a => a.address).join(', ');
      resolve({
        ok: true,
        msg: `DNS resolvido com sucesso: ${ipList} (${pingMs}ms).`,
        pingMs,
        extra: { addresses }
      });
    });
  });
}

module.exports = { testDns };

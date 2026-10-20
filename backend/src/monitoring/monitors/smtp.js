const net = require('net');
const tls = require('tls');

/**
 * Driver SMTP (Monitoramento de Servidores de E-mail)
 * @param {object} monitor
 * @returns {Promise<{ ok: boolean, msg: string, pingMs: number, extra: object }>}
 */
function testSmtp(monitor) {
  return new Promise((resolve) => {
    const host = monitor.hostname || (monitor.url ? monitor.url.replace(/^smtp:\/\//, '').split(':')[0] : null);
    const port = monitor.port || 25;
    const timeoutMs = (monitor.timeout_s || 10) * 1000;

    if (!host) {
      return resolve({
        ok: false,
        msg: 'Host SMTP não configurado.',
        pingMs: 0,
        extra: {}
      });
    }

    const startTime = Date.now();
    let isSsl = port === 465;

    let socket;
    try {
      if (isSsl) {
        socket = tls.connect({
          host,
          port,
          rejectUnauthorized: !monitor.ignore_tls,
          timeout: timeoutMs
        });
      } else {
        socket = net.createConnection({ host, port, timeout: timeoutMs });
      }
    } catch (e) {
      return resolve({
        ok: false,
        msg: `Erro ao inicializar socket SMTP: ${e.message}`,
        pingMs: 0,
        extra: {}
      });
    }

    let bannerReceived = false;
    socket.setTimeout(timeoutMs);

    socket.on('data', (data) => {
      const response = data.toString();
      // Código 220 indica saudação do servidor SMTP
      if (!bannerReceived && response.startsWith('220')) {
        bannerReceived = true;
        socket.write('EHLO dc-monitoramento.local\r\n');
      } else if (bannerReceived && (response.startsWith('250') || response.includes('250-'))) {
        const pingMs = Date.now() - startTime;
        socket.write('QUIT\r\n');
        socket.end();
        return resolve({
          ok: true,
          msg: `Servidor SMTP ${host}:${port} respondeu com sucesso (${pingMs}ms).`,
          pingMs,
          extra: { banner: response.trim().slice(0, 100) }
        });
      }
    });

    socket.on('error', (err) => {
      const pingMs = Date.now() - startTime;
      socket.destroy();
      resolve({
        ok: false,
        msg: `Erro na comunicação SMTP (${err.code || err.message})`,
        pingMs,
        extra: { error: err.message }
      });
    });

    socket.on('timeout', () => {
      const pingMs = Date.now() - startTime;
      socket.destroy();
      resolve({
        ok: false,
        msg: `Tempo limite esgotado para o servidor SMTP (${monitor.timeout_s || 10}s).`,
        pingMs,
        extra: { timeout: true }
      });
    });
  });
}

module.exports = { testSmtp };

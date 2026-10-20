const axios = require('axios');
const https = require('https');
const tls = require('tls');
const { URL } = require('url');
const { getLocalDateTime } = require('../utils/date');

/**
 * Verifica se um status code HTTP bate com a faixa esperada (ex: '200-299', '200,301,302')
 * @param {number} status
 * @param {string} expectedRange
 * @returns {boolean}
 */
function checkStatusRange(status, expectedRange = '200-299') {
  if (!expectedRange) return status >= 200 && status < 300;
  const parts = expectedRange.split(',').map(p => p.trim());
  for (const part of parts) {
    if (part.includes('-')) {
      const [min, max] = part.split('-').map(Number);
      if (status >= min && status <= max) return true;
    } else {
      if (status === Number(part)) return true;
    }
  }
  return false;
}

/**
 * Obtém informações do certificado TLS via socket TLS
 * @param {string} hostname
 * @param {number} port
 * @param {number} timeoutMs
 * @returns {Promise<{ validTo: string, issuer: string, daysRemaining: number } | null>}
 */
function getCertificateInfo(hostname, port = 443, timeoutMs = 5000) {
  return new Promise((resolve) => {
    try {
      const socket = tls.connect({
        host: hostname,
        port: port,
        servername: hostname,
        rejectUnauthorized: false,
        timeout: timeoutMs
      }, () => {
        const cert = socket.getPeerCertificate();
        socket.destroy();
        if (!cert || !cert.valid_to) {
          return resolve(null);
        }
        const validToDate = new Date(cert.valid_to);
        const now = new Date();
        const diffMs = validToDate.getTime() - now.getTime();
        const daysRemaining = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const issuer = cert.issuer ? (cert.issuer.O || cert.issuer.CN || 'Desconhecido') : 'Desconhecido';

        resolve({
          validTo: getLocalDateTime(validToDate),
          issuer,
          daysRemaining
        });
      });

      socket.on('error', () => {
        socket.destroy();
        resolve(null);
      });

      socket.on('timeout', () => {
        socket.destroy();
        resolve(null);
      });
    } catch {
      resolve(null);
    }
  });
}

/**
 * Driver HTTP
 * @param {object} monitor
 * @returns {Promise<{ ok: boolean, msg: string, pingMs: number, extra: object }>}
 */
async function testHttp(monitor) {
  const url = monitor.url || (monitor.hostname ? `http://${monitor.hostname}${monitor.port ? `:${monitor.port}` : ''}` : '');
  if (!url) {
    return { ok: false, msg: 'URL ou hostname não especificado.', pingMs: 0, extra: {} };
  }

  const timeoutMs = (monitor.timeout_s || 10) * 1000;
  let customHeaders = {};
  if (monitor.headers) {
    try {
      customHeaders = typeof monitor.headers === 'string' ? JSON.parse(monitor.headers) : monitor.headers;
    } catch {}
  }

  const method = (monitor.method || 'GET').toUpperCase();
  const httpsAgent = new https.Agent({
    rejectUnauthorized: !monitor.ignore_tls
  });

  const startTime = Date.now();
  let certInfo = null;

  // Se for https, captura certificado TLS
  if (url.startsWith('https://')) {
    try {
      const parsedUrl = new URL(url);
      const port = parsedUrl.port ? parseInt(parsedUrl.port, 10) : 443;
      certInfo = await getCertificateInfo(parsedUrl.hostname, port, Math.min(timeoutMs, 4000));
    } catch {}
  }

  try {
    const response = await axios({
      url,
      method,
      headers: {
        'User-Agent': 'DC-Monitoramento/2.0',
        ...customHeaders
      },
      data: monitor.body || undefined,
      timeout: timeoutMs,
      httpsAgent,
      validateStatus: () => true
    });

    const pingMs = Date.now() - startTime;
    const isStatusOk = checkStatusRange(response.status, monitor.expected_status);

    if (!isStatusOk) {
      return {
        ok: false,
        msg: `Status HTTP ${response.status} fora do esperado (${monitor.expected_status || '200-299'}).`,
        pingMs,
        extra: { status: response.status, certInfo }
      };
    }

    if (monitor.keyword) {
      const dataStr = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
      const containsKeyword = dataStr.includes(monitor.keyword);

      if (monitor.invert_keyword && containsKeyword) {
        return {
          ok: false,
          msg: `Palavra-chave invertida encontrada: "${monitor.keyword}".`,
          pingMs,
          extra: { status: response.status, certInfo }
        };
      }

      if (!monitor.invert_keyword && !containsKeyword) {
        return {
          ok: false,
          msg: `Palavra-chave não encontrada: "${monitor.keyword}".`,
          pingMs,
          extra: { status: response.status, certInfo }
        };
      }
    }

    return {
      ok: true,
      msg: `HTTP ${response.status} OK (${pingMs}ms)`,
      pingMs,
      extra: { status: response.status, certInfo }
    };
  } catch (err) {
    const pingMs = Date.now() - startTime;
    let errMsg = err.message || 'Falha na conexão HTTP.';
    if (err.code === 'ECONNABORTED' || err.message.includes('timeout')) {
      errMsg = `Tempo limite esgotado (${monitor.timeout_s || 10}s).`;
    } else if (err.code === 'ENOTFOUND') {
      errMsg = 'Host não encontrado (DNS).';
    } else if (err.code === 'ECONNREFUSED') {
      errMsg = 'Conexão recusada pelo servidor.';
    }

    return {
      ok: false,
      msg: errMsg,
      pingMs,
      extra: { error: err.code || err.message, certInfo }
    };
  }
}

module.exports = {
  testHttp,
  checkStatusRange,
  getCertificateInfo
};

const { spawn } = require('child_process');
const os = require('os');

// Regex para validar hostname/IP estritamente e prevenir command injection
const HOST_REGEX = /^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])(\.([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]))*$|^([0-9]{1,3}\.){3}[0-9]{1,3}$|^[a-fA-F0-9:]+$/;

// Padrões que indicam host inacessível, queda ou erro no Windows e Linux (suporta UTF-8 e OEM corrompido)
const UNREACHABLE_REGEX = /(?:inacess[ií\ufffd]vel|unreachable|esgotado|timed?\s*out|tempo\s+limite|falha\s+geral|general\s+failure|100%\s*(?:de\s*)?perda|100%\s*(?:packet\s*)?loss|n[aã\ufffd]o\s+(?:foi\s+poss[ií\ufffd]vel|p[oô\ufffd]de)\s+encontrar|could\s+not\s+find|host\s+is\s+down|network\s+is\s+unreachable|rede\s+de\s+destino\s+inacess[ií\ufffd]vel|ttl\s+expirado|ttl\s+expired|0\s+received|0\s+recebidos)/i;

/**
 * Driver PING nativo
 * @param {object} monitor
 * @returns {Promise<{ ok: boolean, msg: string, pingMs: number, extra: object, unreachable?: boolean, immediateDown?: boolean }>}
 */
function testPing(monitor) {
  return new Promise((resolve) => {
    let host = monitor.hostname || '';
    if (!host && monitor.url) {
      host = monitor.url.replace(/^https?:\/\//, '').split('/')[0].split(':')[0];
    }
    host = host.trim();

    if (!host || !HOST_REGEX.test(host)) {
      return resolve({
        ok: false,
        unreachable: true,
        msg: `Host inválido para ping: "${host}".`,
        pingMs: 0,
        extra: { host }
      });
    }

    const isWin = os.platform() === 'win32';
    const timeoutMs = (monitor.timeout_s || 5) * 1000;
    const args = isWin
      ? ['-n', '1', '-w', String(timeoutMs), host]
      : ['-c', '1', '-W', String(Math.max(1, Math.ceil(timeoutMs / 1000))), host];

    let stdout = '';
    let stderr = '';
    const startTime = Date.now();

    try {
      const child = spawn('ping', args, {
        shell: false,
        windowsHide: true
      });

      const timer = setTimeout(() => {
        try {
          child.kill();
        } catch {}
        resolve({
          ok: false,
          unreachable: true,
          msg: `Tempo limite esgotado para o ping (${monitor.timeout_s || 5}s - Host inacessível).`,
          pingMs: Date.now() - startTime,
          extra: { timeout: true, host }
        });
      }, timeoutMs + 1000);

      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('error', (err) => {
        clearTimeout(timer);
        resolve({
          ok: false,
          unreachable: true,
          msg: `Erro ao executar comando ping: ${err.message}`,
          pingMs: Date.now() - startTime,
          extra: { error: err.message, host }
        });
      });

      child.on('close', (code) => {
        clearTimeout(timer);
        const elapsed = Date.now() - startTime;
        const combined = `${stdout}\n${stderr}`;

        const isUnreachable = UNREACHABLE_REGEX.test(combined);

        const winMatch = stdout.match(/(?:time|tempo)\s*[=<]\s*(\d+(?:\.\d+)?)\s*ms/i);
        const nixMatch = stdout.match(/min\/avg\/max\/(?:mdev|stddev)\s*=\s*[\d.]+\/([\d.]+)\/[\d.]+/i);
        const hasValidReply = Boolean((winMatch && winMatch[1]) || (nixMatch && nixMatch[1]));

        if (code === 0 && hasValidReply && !isUnreachable) {
          let pingMs = winMatch ? parseFloat(winMatch[1]) : parseFloat(nixMatch[1]);
          if (isNaN(pingMs) || pingMs < 0) pingMs = elapsed;

          return resolve({
            ok: true,
            msg: `Ping respondeu com sucesso (${pingMs}ms).`,
            pingMs,
            extra: { host, raw: stdout.slice(0, 200) }
          });
        }

        // Caso contrário, é inacessível ou falha -> imediato DOWN
        let detailMsg = 'Host de destino inacessível ou sem resposta.';
        if (/inacess[ií\ufffd]vel|unreachable/i.test(combined)) {
          detailMsg = 'Host de destino inacessível.';
        } else if (/esgotado|timed?\s*out|tempo\s+limite/i.test(combined)) {
          detailMsg = 'Tempo limite esgotado (sem resposta ao ping).';
        } else if (/100%\s*(?:de\s*)?perda|100%\s*(?:packet\s*)?loss|0\s+recebidos|0\s+received/i.test(combined)) {
          detailMsg = '100% de perda de pacotes (Host inacessível).';
        } else if (/falha\s+geral|general\s+failure/i.test(combined)) {
          detailMsg = 'Falha geral de transmissão na rede.';
        } else if (/n[aã\ufffd]o\s+(?:foi\s+poss[ií\ufffd]vel|p[oô\ufffd]de)\s+encontrar|could\s+not\s+find/i.test(combined)) {
          detailMsg = 'Host não encontrado ou nome DNS não resolvido.';
        } else if (/ttl\s+expirado|ttl\s+expired/i.test(combined)) {
          detailMsg = 'TTL expirado em trânsito (Loop de roteamento ou host inalcançável).';
        } else if (/network\s+is\s+unreachable|rede.*inacess/i.test(combined)) {
          detailMsg = 'Rede de destino inacessível.';
        } else if (code !== 0) {
          detailMsg = `Host inacessível ou falha no ping (Código ${code}).`;
        }

        return resolve({
          ok: false,
          unreachable: true,
          msg: detailMsg,
          pingMs: elapsed,
          extra: {
            host,
            code,
            error: (stderr || stdout).slice(0, 300)
          }
        });
      });
    } catch (err) {
      resolve({
        ok: false,
        unreachable: true,
        msg: `Exceção ao disparar ping: ${err.message}`,
        pingMs: Date.now() - startTime,
        extra: { error: err.message, host }
      });
    }
  });
}

module.exports = { testPing };

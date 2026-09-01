/**
 * PM2 Web GUI — Backend Server (v2)
 * Node.js + Express REST API para gerenciar processos PM2.
 * Deploy: Reverse Proxy via IIS ARR -> http://localhost:6767
 */

const express = require('express');
const path    = require('path');
const fs      = require('fs');
const os      = require('os');
const cors    = require('cors');

const app  = express();
const PORT = process.env.PORT || 6767;

// Trust proxy reverse proxy headers (IIS ARR, Nginx, Apache)
app.set('trust proxy', true);

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public', 'browser')));

// ─── Hardware Metrics Tracker ──────────────────────────────────────────────────
let lastCpuTimes = null;

function getCpuUsage() {
  const cpus = os.cpus();
  if (!cpus || cpus.length === 0) return { usagePercent: 0, freePercent: 100, cores: 1, model: 'Unknown' };

  let totalUser = 0, totalNice = 0, totalSys = 0, totalIdle = 0, totalIrq = 0;
  for (const cpu of cpus) {
    totalUser += cpu.times.user;
    totalNice += cpu.times.nice;
    totalSys += cpu.times.sys;
    totalIdle += cpu.times.idle;
    totalIrq += cpu.times.irq;
  }
  const total = totalUser + totalNice + totalSys + totalIdle + totalIrq;
  const idle = totalIdle;

  let usagePercent = 0;
  if (lastCpuTimes) {
    const diffTotal = total - lastCpuTimes.total;
    const diffIdle = idle - lastCpuTimes.idle;
    if (diffTotal > 0) {
      usagePercent = Math.max(0, Math.min(100, parseFloat((((diffTotal - diffIdle) / diffTotal) * 100).toFixed(1))));
    }
  }
  lastCpuTimes = { total, idle };

  return {
    usagePercent,
    freePercent: parseFloat((100 - usagePercent).toFixed(1)),
    cores: cpus.length,
    model: (cpus[0]?.model || 'CPU').trim()
  };
}

// Inicializa a primeira medição de CPU logo na inicialização
getCpuUsage();

function getMemoryUsage() {
  const total = os.totalmem();
  const free = os.freemem();
  const used = Math.max(0, total - free);
  const usagePercent = total > 0 ? parseFloat(((used / total) * 100).toFixed(1)) : 0;
  return {
    total,
    free,
    used,
    usagePercent
  };
}

function getDiskUsage() {
  try {
    const rootPath = process.platform === 'win32' ? (process.cwd().split(path.sep)[0] || 'C:') + '\\' : '/';
    if (fs.statfsSync) {
      const stats = fs.statfsSync(rootPath);
      const total = stats.bsize * stats.blocks;
      const free = stats.bsize * stats.bavail;
      const used = Math.max(0, total - free);
      const usagePercent = total > 0 ? parseFloat(((used / total) * 100).toFixed(1)) : 0;
      return {
        total,
        free,
        used,
        usagePercent,
        drive: rootPath
      };
    }
  } catch (e) {
    // fallback em caso de erro no disco
  }
  return { total: 0, free: 0, used: 0, usagePercent: 0, drive: 'N/A' };
}

function getSystemMetrics() {
  return {
    cpu: getCpuUsage(),
    memory: getMemoryUsage(),
    disk: getDiskUsage()
  };
}

// ─── PM2 Persistent Connection ──────────────────────────────────────────────────
const pm2 = require('pm2');
let pm2Connected = false;

pm2.connect((err) => {
  if (err) {
    console.error('Falha fatal ao conectar ao PM2:', err);
    process.exit(2);
  }
  pm2Connected = true;
  console.log('✅ Conectado ao daemon PM2');
});

function withPM2(fn) {
  return new Promise((resolve, reject) => {
    if (!pm2Connected) return reject(new Error('PM2 não está conectado. Tente novamente.'));
    try {
      Promise.resolve(fn(pm2)).then(resolve).catch(reject);
    } catch (err) {
      reject(err);
    }
  });
}

// ─── Formatters ────────────────────────────────────────────────────────────────
function formatProcess(p) {
  const env   = p.pm2_env || {};
  const monit = p.monit   || {};
  return {
    id: p.pm_id,
    pid: p.pid,
    name: env.name || p.name || 'unknown',
    status: env.status || 'unknown',
    cpu: monit.cpu || 0,
    memory: monit.memory || 0,
    restarts: env.restart_time || 0,
    uptime: env.pm_uptime || 0,
    createdAt: env.created_at || 0,
    execPath: env.pm_exec_path || env.exec_path || '',
    nodeVersion: env.node_version || '',
    execMode: env.exec_mode || 'fork',
    instances: env.instances || 1,
    watch: !!env.watch,
    logOut: env.pm_out_log_path || '',
    logErr: env.pm_err_log_path || '',
    namespace: env.namespace || 'default',
  };
}

function pm2Action(action, idOrName) {
  return withPM2((pm2) => new Promise((resolve, reject) => {
    pm2[action](String(idOrName), (err) => {
      if (err) return reject(new Error(`${action} falhou: ` + (err.message || err)));
      resolve({ success: true, action, target: idOrName });
    });
  }));
}

function listPM2() {
  return withPM2((pm2) => new Promise((resolve, reject) => {
    pm2.list((err, procs) => err ? reject(err) : resolve(procs));
  }));
}

function findProc(list, idOrName) {
  return list.find(
    (p) => String(p.pm_id) === String(idOrName) ||
           (p.pm2_env && p.pm2_env.name === idOrName)
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ROTAS — PROCESSOS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * GET /api/processes
 * Lista todos os processos PM2 (pm2 list / pm2 ls).
 */
app.get('/api/processes', async (req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  try {
    const list = await listPM2();
    res.json({ success: true, data: list.map(formatProcess), metrics: getSystemMetrics() });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ─── SSE Global Broadcast ───────────────────────────────────────────────────────
let sseClients = [];
let sseInterval = null;

function broadcastSSE(dataStr) {
  sseClients.forEach(res => {
    try { res.write(`data: ${dataStr}\n\n`); } catch(e) {}
  });
}

function startSseInterval() {
  if (sseInterval) return;
  sseInterval = setInterval(async () => {
    try {
      const list = await listPM2();
      const metrics = getSystemMetrics();
      broadcastSSE(JSON.stringify({ success: true, data: list.map(formatProcess), metrics }));
    } catch(err) {
      broadcastSSE(JSON.stringify({ success: false, error: err.message }));
    }
  }, 2000); // 2 segundos, atualiza processos e métricas de hardware
}

function stopSseInterval() {
  if (sseClients.length === 0 && sseInterval) {
    clearInterval(sseInterval);
    sseInterval = null;
  }
}

/**
 * GET /api/processes/stream
 * Server-Sent Events (SSE) — Lista os processos e consumo de hardware em tempo real.
 */
app.get('/api/processes/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no'); // Desabilita buffer no Nginx/ARR
  res.flushHeaders();

  sseClients.push(res);
  startSseInterval();

  // Envia status inicial imediatamente para quem acabou de conectar
  listPM2()
    .then(list => res.write(`data: ${JSON.stringify({ success: true, data: list.map(formatProcess), metrics: getSystemMetrics() })}\n\n`))
    .catch(err => res.write(`data: ${JSON.stringify({ success: false, error: err.message })}\n\n`));

  req.on('close', () => {
    sseClients = sseClients.filter(c => c !== res);
    stopSseInterval();
  });
});

/**
 * GET /api/system
 * Informações do servidor, versão do PM2 e métricas do PC.
 */
app.get('/api/system', async (req, res) => {
  try {
    const { execSync } = require('child_process');
    let pm2Version = 'unknown';
    try { pm2Version = execSync('pm2 --version', { timeout: 5000 }).toString().trim(); } catch (_) {}
    res.json({
      success: true,
      data: {
        nodeVersion: process.version,
        platform: process.platform,
        pm2Version,
        hostname: os.hostname(),
        uptime: process.uptime(),
        serverTime: new Date().toISOString(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        cpus: os.cpus().length,
        metrics: getSystemMetrics()
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * POST /api/launch
 * Inicia uma NOVA aplicação PM2.
 * Equivale a: pm2 start <script> [--name <n>] [-i max] [--watch]
 */
app.post('/api/launch', async (req, res) => {
  const { script, name, instances, execMode, watch, args } = req.body;
  if (!script || !script.trim()) {
    return res.status(400).json({ success: false, error: 'O campo "script" é obrigatório.' });
  }

  const opts = { script: script.trim() };
  if (name && name.trim())    opts.name      = name.trim();
  if (execMode)               opts.exec_mode = execMode;
  if (execMode === 'cluster') opts.instances = instances === 'max' ? 0 : (parseInt(instances) || 1);
  if (watch)                  opts.watch     = true;
  if (args && args.trim())    opts.args      = args.trim().split(/\s+/);

  try {
    await withPM2((pm2) => new Promise((resolve, reject) => {
      pm2.start(opts, (err) => err ? reject(new Error(String(err.message || err))) : resolve());
    }));
    res.json({ success: true, message: `Processo "${opts.name || opts.script}" iniciado com sucesso.` });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * POST /api/processes/:id/start
 * Inicia um processo existente (pm2 start <id>).
 */
app.post('/api/processes/:id/start', async (req, res) => {
  try { res.json(await pm2Action('start', req.params.id)); }
  catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

/**
 * POST /api/processes/:id/stop
 * Para um processo (pm2 stop <id>).
 */
app.post('/api/processes/:id/stop', async (req, res) => {
  try { res.json(await pm2Action('stop', req.params.id)); }
  catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

/**
 * POST /api/processes/:id/restart
 * Reinicia um processo (pm2 restart <id>).
 */
app.post('/api/processes/:id/restart', async (req, res) => {
  try { res.json(await pm2Action('restart', req.params.id)); }
  catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

/**
 * POST /api/processes/:id/reload
 * Reload gracioso — ideal para cluster mode (pm2 reload <id>).
 */
app.post('/api/processes/:id/reload', async (req, res) => {
  try { res.json(await pm2Action('reload', req.params.id)); }
  catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

/**
 * DELETE /api/processes/:id
 * Remove um processo da lista (pm2 delete <id>).
 */
app.delete('/api/processes/:id', async (req, res) => {
  try { res.json(await pm2Action('delete', req.params.id)); }
  catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

/**
 * GET /api/processes/:id/describe
 * Detalhes completos de um processo (pm2 describe <id>).
 */
app.get('/api/processes/:id/describe', async (req, res) => {
  try {
    const list = await listPM2();
    const proc = findProc(list, req.params.id);
    if (!proc) return res.status(404).json({ success: false, error: 'Processo não encontrado.' });

    const env   = proc.pm2_env || {};
    const monit = proc.monit   || {};

    const safeEnv = {};
    for (const [k, v] of Object.entries(env.env || {})) {
      if (!/secret|password|token|key|pwd/i.test(k)) safeEnv[k] = String(v).substring(0, 300);
    }

    res.json({
      success: true,
      data: {
        id: proc.pm_id,
        pid: proc.pid,
        name: env.name || 'unknown',
        status: env.status || 'unknown',
        cpu: monit.cpu || 0,
        memory: monit.memory || 0,
        restarts: env.restart_time || 0,
        uptime: env.pm_uptime || 0,
        createdAt: env.created_at || 0,
        version: env.version || '',
        nodeVersion: env.node_version || '',
        execPath: env.pm_exec_path || env.exec_path || '',
        execMode: env.exec_mode || 'fork',
        instances: env.instances || 1,
        watch: !!env.watch,
        interpreter: env.exec_interpreter || 'node',
        nodeArgs: Array.isArray(env.node_args) ? env.node_args.join(' ') : '',
        args: Array.isArray(env.args) ? env.args.join(' ') : '',
        logOut: env.pm_out_log_path || '',
        logErr: env.pm_err_log_path || '',
        namespace: env.namespace || 'default',
        env: safeEnv,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * GET /api/processes/:id/logs?lines=100
 * Últimas N linhas do log (histórico estático).
 */
app.get('/api/processes/:id/logs', async (req, res) => {
  try {
    const lines = parseInt(req.query.lines) || 100;
    const list  = await listPM2();
    const proc  = findProc(list, req.params.id);
    if (!proc) return res.status(404).json({ success: false, error: 'Processo não encontrado.' });

    const env = proc.pm2_env || {};

    function readTail(filePath, n) {
      if (!filePath || !fs.existsSync(filePath)) return [];
      try {
        return fs.readFileSync(filePath, 'utf8').split('\n').filter(Boolean).slice(-n);
      } catch (_) { return []; }
    }

    const stdout = readTail(env.pm_out_log_path, lines).map(t => ({ type: 'out', text: t }));
    const stderr = readTail(env.pm_err_log_path, lines).map(t => ({ type: 'err', text: t }));

    res.json({
      success: true,
      data: {
        processName: env.name,
        logOut: env.pm_out_log_path,
        logErr: env.pm_err_log_path,
        lines: [...stdout, ...stderr],
        stdoutCount: stdout.length,
        stderrCount: stderr.length,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * GET /api/processes/:id/logs/stream
 * Server-Sent Events (SSE) — logs em tempo real (pm2 logs <id>).
 */
app.get('/api/processes/:id/logs/stream', async (req, res) => {
  res.setHeader('Content-Type',      'text/event-stream');
  res.setHeader('Cache-Control',     'no-cache');
  res.setHeader('Connection',        'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  const heartbeat = setInterval(() => {
    try { res.write(': ping\n\n'); } catch (_) {}
  }, 10000);

  const watchers  = [];
  const sendEvent = (type, text) => {
    try { res.write(`data: ${JSON.stringify({ type, text })}\n\n`); } catch (_) {}
  };

  try {
    const list = await listPM2();
    const proc = findProc(list, req.params.id);

    if (!proc) {
      sendEvent('error', 'Processo não encontrado.');
      clearInterval(heartbeat);
      res.end();
      return;
    }

    const env   = proc.pm2_env || {};
    const files = [
      { path: env.pm_out_log_path, type: 'out' },
      { path: env.pm_err_log_path, type: 'err' },
    ].filter(f => f.path && fs.existsSync(f.path));

    if (files.length === 0) {
      sendEvent('info', 'Nenhum arquivo de log encontrado para este processo.');
    }

    for (const { path: filePath, type } of files) {
      let pos = 0;
      try { pos = fs.statSync(filePath).size; } catch (_) {}

      const w = setInterval(() => {
        try {
          const { size } = fs.statSync(filePath);
          if (size > pos) {
            const len = size - pos;
            const buf = Buffer.alloc(len);
            const fd  = fs.openSync(filePath, 'r');
            fs.readSync(fd, buf, 0, len, pos);
            fs.closeSync(fd);
            pos = size;
            buf.toString('utf8').split('\n')
              .filter(l => l.trim())
              .forEach(l => sendEvent(type, l));
          } else if (size < pos) {
            pos = 0;
            sendEvent('info', '─── log rotacionado ───');
          }
        } catch (_) {}
      }, 500);

      watchers.push(w);
    }
  } catch (err) {
    sendEvent('error', err.message);
  }

  req.on('close', () => {
    clearInterval(heartbeat);
    watchers.forEach(w => clearInterval(w));
  });
});

// ═══════════════════════════════════════════════════════════════════════════════
// ROTAS — UTILITÁRIOS GLOBAIS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * POST /api/flush
 * Limpa todos os arquivos de log (pm2 flush).
 */
app.post('/api/flush', (req, res) => {
  try {
    const { execSync } = require('child_process');
    execSync('pm2 flush', { timeout: 10000 });
    res.json({ success: true, message: 'Logs limpos com sucesso.' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * POST /api/save
 * Salva estado atual dos processos (pm2 save).
 */
app.post('/api/save', (req, res) => {
  try {
    const { execSync } = require('child_process');
    execSync('pm2 save', { timeout: 10000 });
    res.json({ success: true, message: 'Estado salvo com sucesso.' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * POST /api/startup
 * Configura PM2 para iniciar automaticamente com o Windows.
 * No Windows, pm2 startup não suporta o comando nativo — retorna instruções manuais.
 */
app.post('/api/startup', (req, res) => {
  const { execSync } = require('child_process');
  let output = '';
  let isWindows = process.platform === 'win32';

  if (isWindows) {
    // pm2 startup não funciona diretamente no Windows (processo.getuid não existe).
    // A alternativa recomendada é usar pm2-installer ou Task Scheduler.
    try {
      output = execSync('pm2 startup windows 2>&1', { timeout: 10000, shell: true }).toString();
    } catch (e) {
      output = [e.stdout, e.stderr].filter(Boolean).map(b => b.toString()).join('\n');
    }

    // Se o output contém o erro típico do Windows, substituir por instrução útil
    if (!output || output.includes('getuid is not a function') || output.includes('TypeError')) {
      output = [
        '⚠  No Windows, o comando "pm2 startup" não é suportado nativamente.',
        '',
        '✅  OPÇÃO RECOMENDADA — pm2-installer (executa como SYSTEM):',
        '   npm install -g pm2-installer',
        '   pm2-installer  (execute como Administrador)',
        '',
        '✅  ALTERNATIVA — Agendar via Task Scheduler:',
        '   1. Abra o Task Scheduler (taskschd.msc)',
        '   2. Crie uma tarefa que execute ao iniciar o sistema',
        '   3. Ação: "pm2 resurrect" usando o caminho completo do pm2.cmd',
        '      Ex: C:\\Users\\' + require('os').userInfo().username + '\\AppData\\Roaming\\npm\\pm2.cmd',
        '',
        '✅  ALTERNATIVA — NSSM (Non-Sucking Service Manager):',
        '   1. Baixe NSSM em https://nssm.cc/download',
        '   2. nssm install PM2  →  configurar pm2.cmd como executável com argumento "resurrect"',
        '',
        'Após reiniciar, execute "pm2 resurrect" para restaurar os processos salvos.',
        'Lembre de executar "pm2 save" antes de reiniciar o servidor.',
      ].join('\n');
    }
  } else {
    try {
      output = execSync('pm2 startup', { timeout: 15000 }).toString();
    } catch (e) {
      output = [e.stdout, e.stderr].filter(Boolean).map(b => b.toString()).join('\n');
    }
  }

  res.json({
    success: true,
    output: output.trim() || 'Nenhuma saída gerada.',
    isWindows,
  });
});

// ─── SPA Fallback ─────────────────────────────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'browser', 'index.html'));
});

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n  ██████╗ ███╗   ███╗██████╗      ██████╗ ██╗   ██╗██╗`);
  console.log(`  ██╔══██╗████╗ ████║╚════██╗    ██╔════╝ ██║   ██║██║`);
  console.log(`  ██████╔╝██╔████╔██║ █████╔╝    ██║  ███╗██║   ██║██║`);
  console.log(`  ██╔═══╝ ██║╚██╔╝██║██╔═══╝     ██║   ██║██║   ██║██║`);
  console.log(`  ██║     ██║ ╚═╝ ██║███████╗    ╚██████╔╝╚██████╔╝██║`);
  console.log(`  ╚═╝     ╚═╝     ╚═╝╚══════╝     ╚═════╝  ╚═════╝ ╚═╝\n`);
  console.log(`  🚀 PM2 Web GUI rodando em http://localhost:${PORT}`);
  console.log(`  📋 API disponível em http://localhost:${PORT}/api/processes\n`);
});

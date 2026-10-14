const express = require('express');
const router = express.Router();
const os = require('os');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const pm2 = require('pm2');

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

getCpuUsage();

function getMemoryUsage() {
  const total = os.totalmem();
  const free = os.freemem();
  const used = Math.max(0, total - free);
  const usagePercent = total > 0 ? parseFloat(((used / total) * 100).toFixed(1)) : 0;
  return { total, free, used, usagePercent };
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
      return { total, free, used, usagePercent, drive: rootPath };
    }
  } catch (e) {}
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
let pm2Connected = false;

pm2.connect((err) => {
  if (err) {
    console.error('Falha ao conectar ao daemon PM2:', err);
    return;
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

function formatProcess(p) {
  const env = p.pm2_env || {};
  const monit = p.monit || {};
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

const pm2Recorder = require('../utils/pm2-recorder');

// ─── SSE Global Broadcast (Ativo SOMENTE quando houver visualizador conectado) ──
let sseClients = [];
let sseInterval = null;

function broadcastSSE(dataStr) {
  sseClients = sseClients.filter(res => {
    try {
      res.write(`data: ${dataStr}\n\n`);
      if (typeof res.flush === 'function') {
        res.flush();
      }
      return true;
    } catch (e) {
      return false;
    }
  });
  if (sseClients.length === 0) {
    stopSseInterval();
  }
}

async function triggerImmediateBroadcast() {
  if (sseClients.length === 0) return;
  try {
    const list = await listPM2();
    const metrics = getSystemMetrics();
    broadcastSSE(JSON.stringify({ success: true, data: list.map(formatProcess), metrics }));
  } catch (err) {
    broadcastSSE(JSON.stringify({ success: false, error: err.message }));
  }
}

function startSseInterval() {
  if (sseInterval) return;
  console.log('[SSE Monitor] Monitoramento em tempo real ATIVADO (visualizador conectado).');
  // Dispara primeira amostra imediatamente sem esperar o tick do setInterval
  triggerImmediateBroadcast();
  // Intervalo em tempo real de 1000ms (1 segundo) para telemetria sem atraso
  sseInterval = setInterval(async () => {
    if (sseClients.length === 0) {
      stopSseInterval();
      return;
    }
    await triggerImmediateBroadcast();
  }, 1000);
}

function stopSseInterval() {
  if (sseClients.length === 0 && sseInterval) {
    clearInterval(sseInterval);
    sseInterval = null;
    lastCpuTimes = null;
    console.log('[SSE Monitor] Monitoramento em tempo real PAUSADO (nenhum visualizador ativo).');
  }
}

// ─── Rotas ────────────────────────────────────────────────────────────────────

// GET /api/processes
router.get('/processes', async (req, res) => {
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

// GET /api/processes/stream
router.get('/processes/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.setHeader('Content-Encoding', 'none');
  if (typeof res.flushHeaders === 'function') {
    res.flushHeaders();
  }

  sseClients.push(res);
  startSseInterval();

  listPM2()
    .then(list => {
      try {
        res.write(`data: ${JSON.stringify({ success: true, data: list.map(formatProcess), metrics: getSystemMetrics() })}\n\n`);
        if (typeof res.flush === 'function') res.flush();
      } catch (_) {}
    })
    .catch(err => {
      try {
        res.write(`data: ${JSON.stringify({ success: false, error: err.message })}\n\n`);
        if (typeof res.flush === 'function') res.flush();
      } catch (_) {}
    });

  const cleanup = () => {
    sseClients = sseClients.filter(c => c !== res);
    stopSseInterval();
  };

  req.on('close', cleanup);
  req.on('end', cleanup);
  res.on('close', cleanup);
  res.on('finish', cleanup);
});

// GET /api/system
router.get('/system', async (req, res) => {
  try {
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

// POST /api/launch
router.post('/launch', async (req, res) => {
  const { script, name, instances, execMode, watch, args } = req.body;
  if (!script || !script.trim()) {
    return res.status(400).json({ success: false, error: 'O campo "script" é obrigatório.' });
  }

  const opts = { script: script.trim() };
  if (name && name.trim()) opts.name = name.trim();
  if (execMode) opts.exec_mode = execMode;
  if (execMode === 'cluster') opts.instances = instances === 'max' ? 0 : (parseInt(instances) || 1);
  if (watch) opts.watch = true;
  if (args && args.trim()) opts.args = args.trim().split(/\s+/);

  try {
    await withPM2((pm2) => new Promise((resolve, reject) => {
      pm2.start(opts, (err) => err ? reject(new Error(String(err.message || err))) : resolve());
    }));
    res.json({ success: true, message: `Processo "${opts.name || opts.script}" iniciado com sucesso.` });
    setTimeout(() => triggerImmediateBroadcast(), 100);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Process action endpoints
router.post('/processes/:id/start', async (req, res) => {
  try {
    const result = await pm2Action('start', req.params.id);
    res.json(result);
    setTimeout(() => triggerImmediateBroadcast(), 80);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.post('/processes/:id/stop', async (req, res) => {
  try {
    const result = await pm2Action('stop', req.params.id);
    res.json(result);
    setTimeout(() => triggerImmediateBroadcast(), 80);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.post('/processes/:id/restart', async (req, res) => {
  try {
    const result = await pm2Action('restart', req.params.id);
    res.json(result);
    setTimeout(() => triggerImmediateBroadcast(), 100);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.post('/processes/:id/reload', async (req, res) => {
  try {
    const result = await pm2Action('reload', req.params.id);
    res.json(result);
    setTimeout(() => triggerImmediateBroadcast(), 100);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.delete('/processes/:id', async (req, res) => {
  try {
    const result = await pm2Action('delete', req.params.id);
    res.json(result);
    setTimeout(() => triggerImmediateBroadcast(), 80);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/processes/:id/describe
router.get('/processes/:id/describe', async (req, res) => {
  try {
    const list = await listPM2();
    const proc = findProc(list, req.params.id);
    if (!proc) return res.status(404).json({ success: false, error: 'Processo não encontrado.' });

    const env = proc.pm2_env || {};
    const monit = proc.monit || {};

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

// GET /api/processes/:id/logs
router.get('/processes/:id/logs', async (req, res) => {
  try {
    const lines = parseInt(req.query.lines) || 100;
    const list = await listPM2();
    const proc = findProc(list, req.params.id);
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

// GET /api/processes/:id/logs/stream
router.get('/processes/:id/logs/stream', async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  const heartbeat = setInterval(() => {
    try { res.write(': ping\n\n'); } catch (_) {}
  }, 10000);

  const watchers = [];
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

    const env = proc.pm2_env || {};
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
            const fd = fs.openSync(filePath, 'r');
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

// POST /api/flush
router.post('/flush', (req, res) => {
  try {
    execSync('pm2 flush', { timeout: 10000 });
    res.json({ success: true, message: 'Logs limpos com sucesso.' });
    setTimeout(() => triggerImmediateBroadcast(), 50);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/save
router.post('/save', (req, res) => {
  try {
    execSync('pm2 save', { timeout: 10000 });
    res.json({ success: true, message: 'Estado salvo com sucesso.' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/startup
router.post('/startup', (req, res) => {
  let output = '';
  let isWindows = process.platform === 'win32';

  if (isWindows) {
    try {
      output = execSync('pm2 startup windows 2>&1', { timeout: 10000, shell: true }).toString();
    } catch (e) {
      output = [e.stdout, e.stderr].filter(Boolean).map(b => b.toString()).join('\n');
    }

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
        '      Ex: C:\\Users\\' + os.userInfo().username + '\\AppData\\Roaming\\npm\\pm2.cmd',
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

// ─── Process Monitor (Minuto a Minuto com Tempo Selecionado) ───────────────────

// POST /api/process-monitor/start
router.post('/process-monitor/start', async (req, res) => {
  try {
    const { processId, processName, durationMinutes, customHours } = req.body;
    let duration = parseInt(durationMinutes, 10);
    if (customHours && !isNaN(customHours) && parseFloat(customHours) > 0) {
      duration = Math.round(parseFloat(customHours) * 60);
    }
    if (!duration || duration <= 0) {
      return res.status(400).json({ success: false, error: 'Duração em minutos inválida.' });
    }
    const session = await pm2Recorder.startSession(processId, processName, duration);
    res.json({ success: true, data: session });
    setTimeout(() => triggerImmediateBroadcast(), 50);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/process-monitor/:sessionId/stop
router.post('/process-monitor/:sessionId/stop', async (req, res) => {
  try {
    await pm2Recorder.stopSession(req.params.sessionId);
    res.json({ success: true, message: 'Monitoramento encerrado com sucesso.' });
    setTimeout(() => triggerImmediateBroadcast(), 50);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/process-monitor/active
router.get('/process-monitor/active', async (req, res) => {
  try {
    const active = await pm2Recorder.getActiveSessions();
    res.json({ success: true, data: active });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/process-monitor/session/:sessionId
router.get('/process-monitor/session/:sessionId', async (req, res) => {
  try {
    const details = await pm2Recorder.getSessionDetails(req.params.sessionId);
    if (!details) {
      return res.status(404).json({ success: false, error: 'Sessão de monitoramento não encontrada.' });
    }
    res.json({ success: true, data: details });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/process-monitor/process/:processName
router.get('/process-monitor/process/:processName', async (req, res) => {
  try {
    const sessions = await pm2Recorder.getSessionsForProcess(req.params.processName);
    res.json({ success: true, data: sessions });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;


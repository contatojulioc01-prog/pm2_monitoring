/**
 * hostMetricsService.js
 * Coleta ultra-leve de métricas nativas do Windows Task Manager com cruzamento de PID do PM2.
 * Otimizações de CPU:
 * - Worker PowerShell persistente sob demanda (elimina cold-start do .NET a cada amostra) com auto-desligamento em 30s ocioso.
 * - Sem pm2.disconnect() repetitivo (reaproveita conexão com timeout rígido de 3s).
 * - Amostragem global contínua via os.cpus() (precisa desde a 1ª amostra, custo irrelevante).
 * - Deduplicação/cache de 2s para requisições concorrentes.
 */

const { spawn } = require('child_process');
const os = require('os');
const pm2 = require('pm2');
const db = require('../utils/db');

const numCpus = os.cpus().length || 1;
const END_MARKER = '__DC_HOST_METRICS_END__';

function getLocalDateTime(date = new Date()) {
  const pad = (n) => String(n).padStart(2, '0');
  const y = date.getFullYear();
  const m = pad(date.getMonth() + 1);
  const d = pad(date.getDate());
  const h = pad(date.getHours());
  const min = pad(date.getMinutes());
  const s = pad(date.getSeconds());
  return `${y}-${m}-${d}T${h}:${min}:${s}`;
}

// Amostragem contínua e ultra-leve de CPU global via kernel (os.cpus) a cada 2s
let lastOsCpuTimes = null;
let cachedOsCpuPercent = 0;

function readOsCpuTimes() {
  const cpus = os.cpus();
  let idle = 0;
  let total = 0;
  for (const cpu of cpus) {
    for (const t in cpu.times) {
      total += cpu.times[t];
    }
    idle += cpu.times.idle;
  }
  return { idle, total };
}

function sampleOsCpu() {
  const current = readOsCpuTimes();
  if (lastOsCpuTimes) {
    const diffTotal = current.total - lastOsCpuTimes.total;
    const diffIdle = current.idle - lastOsCpuTimes.idle;
    if (diffTotal > 50) {
      const usage = ((diffTotal - diffIdle) / diffTotal) * 100;
      cachedOsCpuPercent = parseFloat(Math.min(100, Math.max(0, usage)).toFixed(1));
    }
  }
  lastOsCpuTimes = current;
  return cachedOsCpuPercent;
}

sampleOsCpu();
const osCpuTimer = setInterval(sampleOsCpu, 2000);
if (osCpuTimer.unref) osCpuTimer.unref();

function getGlobalCpuPercent() {
  return cachedOsCpuPercent;
}

// Cache da última amostragem para cálculo diferencial de CPU por PID
let lastProcessSample = null;
let lastSampleTimestamp = 0;
let lastComputedProcesses = [];
let cachedResult = null;
let cachedResultTs = 0;
let inflightCollection = null;

// Cache de aliases do PM2 (atualizado no máximo a cada 15s)
let pm2AliasesCache = new Map();
let lastAliasesRefreshTs = 0;
let pm2Connected = false;

async function refreshAliases() {
  const now = Date.now();
  if (now - lastAliasesRefreshTs < 15000) return;
  lastAliasesRefreshTs = now;
  try {
    const rows = await db.all('SELECT processName, alias FROM pm2_aliases');
    pm2AliasesCache.clear();
    for (const row of rows) {
      if (row.processName && row.alias) {
        pm2AliasesCache.set(row.processName, row.alias);
      }
    }
  } catch (_) {}
}

// Coleta lista ativa do PM2 sem desconectar o singleton global e com timeout rígido
function getPm2Processes(timeoutMs = 3000) {
  return new Promise((resolve) => {
    let settled = false;
    const finish = (map) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(map);
    };

    const timer = setTimeout(() => finish(new Map()), timeoutMs);

    const doList = () => {
      pm2.list((listErr, list) => {
        if (listErr || !Array.isArray(list)) {
          pm2Connected = false;
          return finish(new Map());
        }

        const pm2Map = new Map();
        for (const proc of list) {
          const pid = proc.pid;
          if (!pid) continue;
          const name = proc.name || 'unnamed';
          const alias = pm2AliasesCache.get(name) || name;
          pm2Map.set(pid, {
            pm_id: proc.pm_id,
            name,
            alias,
            status: proc.pm2_env?.status || 'unknown',
            instances: proc.pm2_env?.instances || 1,
            uptime: proc.pm2_env?.pm_uptime ? Date.now() - proc.pm2_env.pm_uptime : 0,
            monitMemory: proc.monit?.memory || 0,
            monitCpu: proc.monit?.cpu || 0
          });
        }
        finish(pm2Map);
      });
    };

    if (pm2Connected) {
      doList();
    } else {
      pm2.connect((err) => {
        if (err) return finish(new Map());
        pm2Connected = true;
        doList();
      });
    }
  });
}

// ─── Worker PowerShell Persistente Sob Demanda (Auto-Shutdown em 30s ocioso) ───
let psWorker = null;
let psBuffer = '';
let psPending = null;
let psIdleTimer = null;

function shutdownPsWorker() {
  if (psIdleTimer) {
    clearTimeout(psIdleTimer);
    psIdleTimer = null;
  }
  if (psWorker) {
    try { psWorker.kill(); } catch (_) {}
    psWorker = null;
  }
  psBuffer = '';
  if (psPending) {
    const p = psPending;
    psPending = null;
    clearTimeout(p.timer);
    p.reject(new Error('Worker PowerShell encerrado.'));
  }
}

function resetPsIdleTimer() {
  if (psIdleTimer) clearTimeout(psIdleTimer);
  psIdleTimer = setTimeout(() => {
    if (!psPending) {
      shutdownPsWorker();
    }
  }, 30000);
  if (psIdleTimer.unref) psIdleTimer.unref();
}

function ensurePsWorker() {
  if (psWorker && !psWorker.killed && psWorker.exitCode === null) {
    return psWorker;
  }

  psBuffer = '';
  const child = spawn('powershell.exe', [
    '-NoLogo',
    '-NoProfile',
    '-NonInteractive',
    '-Command',
    '-'
  ], {
    windowsHide: true,
    stdio: ['pipe', 'pipe', 'pipe']
  });

  child.stdout.setEncoding('utf8');
  child.stdout.on('data', (chunk) => {
    psBuffer += chunk;
    const markerIdx = psBuffer.indexOf(END_MARKER);
    if (markerIdx !== -1 && psPending) {
      const payload = psBuffer.slice(0, markerIdx).trim();
      psBuffer = psBuffer.slice(markerIdx + END_MARKER.length);
      const pending = psPending;
      psPending = null;
      clearTimeout(pending.timer);
      resetPsIdleTimer();
      pending.resolve(payload);
    }
  });

  child.on('exit', () => {
    if (psWorker === child) {
      psWorker = null;
    }
    if (psPending) {
      const p = psPending;
      psPending = null;
      clearTimeout(p.timer);
      p.reject(new Error('Worker PowerShell finalizado inesperadamente.'));
    }
  });

  child.on('error', (err) => {
    if (psWorker === child) psWorker = null;
    if (psPending) {
      const p = psPending;
      psPending = null;
      clearTimeout(p.timer);
      p.reject(err);
    }
  });

  psWorker = child;
  resetPsIdleTimer();
  return child;
}

function sampleWindowsProcesses(timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    if (psPending) {
      return reject(new Error('Coleta PowerShell já em andamento.'));
    }

    let worker;
    try {
      worker = ensurePsWorker();
    } catch (e) {
      return reject(e);
    }

    const timer = setTimeout(() => {
      if (psPending) {
        psPending = null;
        shutdownPsWorker();
        reject(new Error('Timeout na coleta de processos do Windows.'));
      }
    }, timeoutMs);

    psPending = {
      timer,
      resolve: (stdout) => {
        try {
          const jsonStart = stdout.indexOf('[');
          const objStart = stdout.indexOf('{');
          let start = -1;
          if (jsonStart >= 0 && objStart >= 0) start = Math.min(jsonStart, objStart);
          else start = Math.max(jsonStart, objStart);

          const rawStr = start >= 0 ? stdout.slice(start) : '[]';
          const raw = JSON.parse(rawStr || '[]');
          const list = Array.isArray(raw) ? raw : [raw];
          const map = new Map();
          const now = Date.now();
          for (const item of list) {
            if (!item || !item.Id) continue;
            map.set(item.Id, {
              pid: item.Id,
              name: item.ProcessName || 'Process',
              workingSetBytes: item.WorkingSet64 || 0,
              cpuSeconds: typeof item.CPU === 'number' ? item.CPU : 0,
              timestamp: now
            });
          }
          resolve(map);
        } catch (e) {
          reject(e);
        }
      },
      reject
    };

    const cmd = `$ErrorActionPreference='SilentlyContinue'; [Console]::Out.WriteLine((Get-Process | Where-Object { $_.Id -ne 0 } | Select-Object Id, ProcessName, WorkingSet64, CPU | ConvertTo-Json -Compress)); [Console]::Out.WriteLine('${END_MARKER}')\n`;
    try {
      worker.stdin.write(cmd);
    } catch (e) {
      clearTimeout(timer);
      psPending = null;
      shutdownPsWorker();
      reject(e);
    }
  });
}

// Métricas de memória global do host (instantâneo, zero custo)
function getGlobalMemory() {
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;
  const usedPercent = Math.min(100, Math.max(0, (usedMem / totalMem) * 100));

  return {
    totalBytes: totalMem,
    usedBytes: usedMem,
    freeBytes: freeMem,
    usedMB: parseFloat((usedMem / (1024 * 1024)).toFixed(1)),
    totalMB: parseFloat((totalMem / (1024 * 1024)).toFixed(1)),
    usedGB: parseFloat((usedMem / (1024 * 1024 * 1024)).toFixed(2)),
    totalGB: parseFloat((totalMem / (1024 * 1024 * 1024)).toFixed(2)),
    usedPercent: parseFloat(usedPercent.toFixed(1))
  };
}

// Coleta diferencial completa com cache/deduplicação de 2s
async function collectHostMetrics(options = {}) {
  const now = Date.now();
  const topLimit = options.limit || 50;

  if (!options.forceFresh && cachedResult && (now - cachedResultTs) < 2000) {
    return {
      ...cachedResult,
      processes: cachedResult.processes.slice(0, topLimit)
    };
  }

  if (inflightCollection) {
    const res = await inflightCollection;
    return { ...res, processes: res.processes.slice(0, topLimit) };
  }

  inflightCollection = (async () => {
    await refreshAliases();
    const [pm2Map, currentSample] = await Promise.all([
      getPm2Processes(),
      sampleWindowsProcesses().catch((err) => {
        console.warn('[HostMetrics] Falha/timeout na coleta de processos:', err.message);
        return null;
      })
    ]);

    const globalMemory = getGlobalMemory();
    const osCpuPercent = getGlobalCpuPercent();
    const sampleTs = Date.now();
    let processes = [];
    let totalCalculatedCpu = 0;

    if (currentSample) {
      if (lastProcessSample && lastSampleTimestamp > 0) {
        const timeDeltaSec = (sampleTs - lastSampleTimestamp) / 1000;

        if (timeDeltaSec > 0.2) {
          for (const [pid, curr] of currentSample.entries()) {
            const prev = lastProcessSample.get(pid);
            let cpuPercent = 0;

            if (prev) {
              const cpuDeltaSec = curr.cpuSeconds - prev.cpuSeconds;
              if (cpuDeltaSec > 0) {
                cpuPercent = Math.min(100, Math.max(0, (cpuDeltaSec / (timeDeltaSec * numCpus)) * 100));
              }
            }

            const memMB = parseFloat((curr.workingSetBytes / (1024 * 1024)).toFixed(1));
            const memPercent = parseFloat(((curr.workingSetBytes / globalMemory.totalBytes) * 100).toFixed(1));
            const cleanCpu = parseFloat(cpuPercent.toFixed(1));
            totalCalculatedCpu += cleanCpu;

            const pm2Info = pm2Map.get(pid);

            processes.push({
              pid,
              processName: curr.name,
              displayName: pm2Info ? pm2Info.alias || pm2Info.name : curr.name,
              isPm2: Boolean(pm2Info),
              pm2Details: pm2Info || null,
              cpuPercent: cleanCpu,
              memMB,
              memPercent,
              workingSetBytes: curr.workingSetBytes
            });
          }

          lastProcessSample = currentSample;
          lastSampleTimestamp = sampleTs;
        } else {
          processes = lastComputedProcesses.slice();
          totalCalculatedCpu = processes.reduce((sum, p) => sum + (p.cpuPercent || 0), 0);
        }
      } else {
        for (const [pid, curr] of currentSample.entries()) {
          const pm2Info = pm2Map.get(pid);
          const memMB = parseFloat((curr.workingSetBytes / (1024 * 1024)).toFixed(1));
          const memPercent = parseFloat(((curr.workingSetBytes / globalMemory.totalBytes) * 100).toFixed(1));
          const fallbackCpu = pm2Info && typeof pm2Info.monitCpu === 'number'
            ? parseFloat(Math.min(100, Math.max(0, pm2Info.monitCpu)).toFixed(1))
            : 0;
          totalCalculatedCpu += fallbackCpu;

          processes.push({
            pid,
            processName: curr.name,
            displayName: pm2Info ? pm2Info.alias || pm2Info.name : curr.name,
            isPm2: Boolean(pm2Info),
            pm2Details: pm2Info || null,
            cpuPercent: fallbackCpu,
            memMB,
            memPercent,
            workingSetBytes: curr.workingSetBytes
          });
        }

        lastProcessSample = currentSample;
        lastSampleTimestamp = sampleTs;
      }

      processes.sort((a, b) => {
        if (a.isPm2 !== b.isPm2) {
          if (a.isPm2 && a.cpuPercent > 0.1) return -1;
          if (b.isPm2 && b.cpuPercent > 0.1) return 1;
        }
        if (b.cpuPercent !== a.cpuPercent) {
          return b.cpuPercent - a.cpuPercent;
        }
        return b.memMB - a.memMB;
      });

      lastComputedProcesses = processes;
    } else {
      processes = lastComputedProcesses.slice();
    }

    const procSumCpu = Math.min(100, parseFloat(totalCalculatedCpu.toFixed(1)));
    const globalCpuPercent = osCpuPercent > 0 ? osCpuPercent : procSumCpu;

    const fullResult = {
      timestamp: getLocalDateTime(),
      globalCpu: {
        usedPercent: globalCpuPercent,
        cores: numCpus,
        model: os.cpus()[0]?.model?.trim() || 'Windows CPU'
      },
      globalMemory,
      totalProcesses: processes.length,
      pm2Count: pm2Map.size,
      processes: processes.slice(0, 80)
    };

    cachedResult = fullResult;
    cachedResultTs = Date.now();
    return fullResult;
  })();

  try {
    const res = await inflightCollection;
    return { ...res, processes: res.processes.slice(0, topLimit) };
  } finally {
    inflightCollection = null;
  }
}

module.exports = {
  collectHostMetrics,
  getGlobalMemory,
  getGlobalCpuPercent,
  getPm2Processes,
  getLocalDateTime,
  shutdownPsWorker
};

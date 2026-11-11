/**
 * hostMetricsService.js
 * Coleta em tempo real de métricas nativas do Windows Task Manager
 * Cruzamento direto do PID com processos do PM2 e mapeamento de consumo de CPU/RAM.
 */

const { exec } = require('child_process');
const os = require('os');
const pm2 = require('pm2');
const db = require('../utils/db');

const numCpus = os.cpus().length || 1;

// Cache da última amostragem para cálculo diferencial de CPU por PID
let lastProcessSample = null;
let lastSampleTimestamp = 0;

// Cache de aliases do PM2
let pm2AliasesCache = new Map();

async function refreshAliases() {
  try {
    const rows = await db.all('SELECT processName, alias FROM pm2_aliases');
    pm2AliasesCache.clear();
    for (const row of rows) {
      if (row.processName && row.alias) {
        pm2AliasesCache.set(row.processName, row.alias);
      }
    }
  } catch (e) {
    // Tabela pode estar ocupada
  }
}

// Coleta lista ativa do PM2 com seus PIDs
function getPm2Processes() {
  return new Promise((resolve) => {
    pm2.connect((err) => {
      if (err) {
        return resolve(new Map());
      }
      pm2.list((listErr, list) => {
        pm2.disconnect();
        if (listErr || !Array.isArray(list)) {
          return resolve(new Map());
        }

        const pm2Map = new Map();
        for (const proc of list) {
          const pid = proc.pid;
          if (!pid) continue;
          const name = proc.name || 'unnamed';
          const alias = pm2AliasesCache.get(name) || name;
          pm2Map.set(pid, {
            pm_id: proc.pm_id,
            name: name,
            alias: alias,
            status: proc.pm2_env?.status || 'unknown',
            instances: proc.pm2_env?.instances || 1,
            uptime: proc.pm2_env?.pm_uptime ? Date.now() - proc.pm2_env.pm_uptime : 0,
            monitMemory: proc.monit?.memory || 0,
            monitCpu: proc.monit?.cpu || 0
          });
        }
        resolve(pm2Map);
      });
    });
  });
}

// Executa coleta via PowerShell Get-Process (rápido e nativo)
function sampleWindowsProcesses() {
  return new Promise((resolve, reject) => {
    const psCommand = `powershell -NoProfile -Command "$ErrorActionPreference = 'SilentlyContinue'; Get-Process | Where-Object { $_.Id -ne 0 } | Select-Object Id, ProcessName, WorkingSet64, CPU | ConvertTo-Json -Compress"`;
    exec(psCommand, { maxBuffer: 15 * 1024 * 1024, timeout: 5000 }, (err, stdout) => {
      if (err) return reject(err);
      try {
        const raw = JSON.parse(stdout || '[]');
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
    });
  });
}

// Métricas de memória global do host
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

// Coleta diferencial completa: Processos do Windows + Match PM2 por PID
async function collectHostMetrics(options = {}) {
  await refreshAliases();
  const [pm2Map, currentSample] = await Promise.all([
    getPm2Processes(),
    sampleWindowsProcesses()
  ]);

  const globalMemory = getGlobalMemory();
  const now = Date.now();
  const processes = [];

  let totalCalculatedCpu = 0;

  if (lastProcessSample && lastSampleTimestamp > 0) {
    const timeDeltaSec = (now - lastSampleTimestamp) / 1000;

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
    }
  } else {
    for (const [pid, curr] of currentSample.entries()) {
      const pm2Info = pm2Map.get(pid);
      const memMB = parseFloat((curr.workingSetBytes / (1024 * 1024)).toFixed(1));
      const memPercent = parseFloat(((curr.workingSetBytes / globalMemory.totalBytes) * 100).toFixed(1));

      processes.push({
        pid,
        processName: curr.name,
        displayName: pm2Info ? pm2Info.alias || pm2Info.name : curr.name,
        isPm2: Boolean(pm2Info),
        pm2Details: pm2Info || null,
        cpuPercent: 0,
        memMB,
        memPercent,
        workingSetBytes: curr.workingSetBytes
      });
    }
  }

  lastProcessSample = currentSample;
  lastSampleTimestamp = now;

  const topLimit = options.limit || 50;
  processes.sort((a, b) => {
    // PM2 primeiro se solicitado ou se empatado, caso contrário recurso maior
    if (a.isPm2 !== b.isPm2) {
      // Deixar processos PM2 destacados ou ordenados com prioridade quando tiverem uso
      if (a.isPm2 && a.cpuPercent > 0.1) return -1;
      if (b.isPm2 && b.cpuPercent > 0.1) return 1;
    }
    if (b.cpuPercent !== a.cpuPercent) {
      return b.cpuPercent - a.cpuPercent;
    }
    return b.memMB - a.memMB;
  });

  const globalCpuPercent = Math.min(100, parseFloat(totalCalculatedCpu.toFixed(1)));

  return {
    timestamp: new Date().toISOString(),
    globalCpu: {
      usedPercent: globalCpuPercent,
      cores: numCpus,
      model: os.cpus()[0]?.model?.trim() || 'Windows CPU'
    },
    globalMemory,
    totalProcesses: processes.length,
    pm2Count: pm2Map.size,
    processes: processes.slice(0, topLimit)
  };
}

module.exports = {
  collectHostMetrics,
  getGlobalMemory,
  getPm2Processes
};

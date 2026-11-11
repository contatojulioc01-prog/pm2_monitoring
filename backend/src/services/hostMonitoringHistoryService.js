/**
 * hostMonitoringHistoryService.js
 * Persistência e consulta do histórico detalhado de monitoramentos do Windows Host:
 * - Sessões (manuais, temporizadas ou por gatilho automático de sobrecarga)
 * - Picos de CPU e RAM
 * - Horários de início e término
 * - Consumo individual de cada processo por snapshot
 * - Processo vilão (maior consumidor)
 * - Exportação de dados
 */

const db = require('../utils/db');

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

async function initHostMonitoringTables() {
  await db.run(`
    CREATE TABLE IF NOT EXISTS host_monitoring_sessions (
      id TEXT PRIMARY KEY,
      mode TEXT NOT NULL,
      durationMinutes INTEGER,
      startedAt TEXT NOT NULL,
      endsAt TEXT,
      status TEXT NOT NULL DEFAULT 'active',
      triggerReason TEXT,
      peakCpu REAL DEFAULT 0,
      peakRam REAL DEFAULT 0,
      avgCpu REAL DEFAULT 0,
      avgRam REAL DEFAULT 0,
      topProcessName TEXT,
      topProcessPid INTEGER,
      topProcessCpu REAL DEFAULT 0,
      topProcessRam REAL DEFAULT 0,
      samplesCount INTEGER DEFAULT 0,
      createdAt TEXT NOT NULL
    )
  `);

  await db.run(`
    CREATE TABLE IF NOT EXISTS host_monitoring_snapshots (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sessionId TEXT NOT NULL,
      cpuPercent REAL NOT NULL,
      ramPercent REAL NOT NULL,
      ramUsedMB REAL NOT NULL,
      ramTotalMB REAL NOT NULL,
      pm2Count INTEGER DEFAULT 0,
      totalProcesses INTEGER DEFAULT 0,
      topProcessesJson TEXT,
      capturedAt TEXT NOT NULL,
      FOREIGN KEY (sessionId) REFERENCES host_monitoring_sessions (id) ON DELETE CASCADE
    )
  `);
}

// Cria uma nova sessão no banco
async function createSessionRecord({ id, mode, durationMinutes, triggerReason, startedAt }) {
  const now = startedAt || getLocalDateTime();
  await db.run(`
    INSERT INTO host_monitoring_sessions (
      id, mode, durationMinutes, startedAt, status, triggerReason,
      peakCpu, peakRam, avgCpu, avgRam, samplesCount, createdAt
    ) VALUES (?, ?, ?, ?, 'active', ?, 0, 0, 0, 0, 0, ?)
  `, [id, mode, durationMinutes, now, triggerReason, now]);
}

// Salva um snapshot coletado durante a sessão ativa
async function recordSnapshot(sessionId, metrics) {
  if (!sessionId || !metrics) return;

  const now = getLocalDateTime();
  const globalCpu = metrics.globalCpu?.usedPercent || 0;
  const ramPercent = metrics.globalMemory?.usedPercent || 0;
  const ramUsedMB = metrics.globalMemory?.usedMB || 0;
  const ramTotalMB = metrics.globalMemory?.totalMB || 0;
  const pm2Count = metrics.pm2Count || 0;
  const totalProcesses = metrics.totalProcesses || 0;

  // Top 50 processos ordenados por CPU e Memória (ampla visibilidade de instâncias)
  const topProcesses = (metrics.processes || []).slice(0, 50).map(p => ({
    pid: p.pid,
    name: p.displayName || p.processName,
    rawName: p.processName,
    isPm2: p.isPm2,
    cpu: p.cpuPercent,
    ramMB: p.memMB,
    ramPercent: p.memPercent
  }));

  const jsonStr = JSON.stringify(topProcesses);

  // Insere o snapshot
  await db.run(`
    INSERT INTO host_monitoring_snapshots (
      sessionId, cpuPercent, ramPercent, ramUsedMB, ramTotalMB,
      pm2Count, totalProcesses, topProcessesJson, capturedAt
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [sessionId, globalCpu, ramPercent, ramUsedMB, ramTotalMB, pm2Count, totalProcesses, jsonStr, now]);

  // Atualiza agregados da sessão (pico de CPU, pico de RAM, processo mais gastão)
  const session = await db.get(`SELECT * FROM host_monitoring_sessions WHERE id = ?`, [sessionId]);
  if (session) {
    const newPeakCpu = Math.max(session.peakCpu || 0, globalCpu);
    const newPeakRam = Math.max(session.peakRam || 0, ramPercent);
    const samplesCount = (session.samplesCount || 0) + 1;

    // Achar o maior consumidor deste snapshot
    let topProc = session.topProcessName ? {
      name: session.topProcessName,
      pid: session.topProcessPid,
      cpu: session.topProcessCpu || 0,
      ram: session.topProcessRam || 0
    } : null;

    for (const proc of topProcesses) {
      if (!topProc || proc.cpu > topProc.cpu) {
        topProc = {
          name: proc.name,
          pid: proc.pid,
          cpu: proc.cpu,
          ram: proc.ramMB
        };
      }
    }

    await db.run(`
      UPDATE host_monitoring_sessions SET
        peakCpu = ?,
        peakRam = ?,
        topProcessName = ?,
        topProcessPid = ?,
        topProcessCpu = ?,
        topProcessRam = ?,
        samplesCount = ?
      WHERE id = ?
    `, [
      newPeakCpu,
      newPeakRam,
      topProc?.name || null,
      topProc?.pid || null,
      topProc?.cpu || 0,
      topProc?.ram || 0,
      samplesCount,
      sessionId
    ]);
  }
}

// Finaliza a sessão no banco
async function finishSessionRecord(sessionId, status = 'completed') {
  const now = getLocalDateTime();
  
  // Calcula médias finais
  const stats = await db.get(`
    SELECT AVG(cpuPercent) as avgCpu, AVG(ramPercent) as avgRam
    FROM host_monitoring_snapshots
    WHERE sessionId = ?
  `, [sessionId]);

  const avgCpu = parseFloat((stats?.avgCpu || 0).toFixed(1));
  const avgRam = parseFloat((stats?.avgRam || 0).toFixed(1));

  await db.run(`
    UPDATE host_monitoring_sessions SET
      endsAt = ?,
      status = ?,
      avgCpu = ?,
      avgRam = ?
    WHERE id = ?
  `, [now, status, avgCpu, avgRam, sessionId]);
}

// Lista todas as sessões com filtros e estatísticas
async function listSessions({ limit = 50, offset = 0, mode = null } = {}) {
  let query = `SELECT * FROM host_monitoring_sessions`;
  const params = [];

  if (mode) {
    query += ` WHERE mode = ?`;
    params.push(mode);
  }

  query += ` ORDER BY startedAt DESC LIMIT ? OFFSET ?`;
  params.push(limit, offset);

  const sessions = await db.all(query, params);
  const totalCount = await db.get(`SELECT count(*) as total FROM host_monitoring_sessions`);

  return {
    sessions,
    total: totalCount?.total || 0
  };
}

// Obtém os detalhes completos de uma sessão com linha do tempo de métricas e ranking de processos
async function getSessionDetails(sessionId) {
  const session = await db.get(`SELECT * FROM host_monitoring_sessions WHERE id = ?`, [sessionId]);
  if (!session) return null;

  const snapshots = await db.all(`
    SELECT * FROM host_monitoring_snapshots
    WHERE sessionId = ?
    ORDER BY capturedAt ASC
  `, [sessionId]);

  // Deserializa o JSON de processos de cada snapshot
  const parsedSnapshots = snapshots.map(s => {
    let procs = [];
    try {
      procs = JSON.parse(s.topProcessesJson || '[]');
    } catch (e) {
      procs = [];
    }
    return {
      ...s,
      topProcesses: procs
    };
  });

  // Agregar consumo total por processo ao longo da sessão (ranking consolidado)
  const processAggregation = new Map();
  for (const snap of parsedSnapshots) {
    for (const p of snap.topProcesses) {
      const key = `${p.name}__${p.pid}`;
      const existing = processAggregation.get(key) || {
        pid: p.pid,
        name: p.name,
        rawName: p.rawName,
        isPm2: p.isPm2,
        peakCpu: 0,
        cpuSum: 0,
        peakRamMB: 0,
        ramSumMB: 0,
        count: 0
      };

      existing.peakCpu = Math.max(existing.peakCpu, p.cpu);
      existing.cpuSum += p.cpu;
      existing.peakRamMB = Math.max(existing.peakRamMB, p.ramMB);
      existing.ramSumMB += p.ramMB;
      existing.count += 1;

      processAggregation.set(key, existing);
    }
  }

  const processRankings = Array.from(processAggregation.values()).map(p => ({
    pid: p.pid,
    name: p.name,
    rawName: p.rawName,
    isPm2: p.isPm2,
    peakCpu: parseFloat(p.peakCpu.toFixed(1)),
    avgCpu: parseFloat((p.cpuSum / p.count).toFixed(1)),
    peakRamMB: parseFloat(p.peakRamMB.toFixed(1)),
    avgRamMB: parseFloat((p.ramSumMB / p.count).toFixed(1)),
    occurrences: p.count
  })).sort((a, b) => b.peakCpu - a.peakCpu);

  return {
    session,
    snapshots: parsedSnapshots,
    processRankings
  };
}

// Exclui uma sessão do histórico
async function deleteSession(sessionId) {
  await db.run(`DELETE FROM host_monitoring_snapshots WHERE sessionId = ?`, [sessionId]);
  await db.run(`DELETE FROM host_monitoring_sessions WHERE id = ?`, [sessionId]);
  return { success: true };
}

// Limpa histórico antigo (ex: manter últimos 30 dias)
async function clearHistory() {
  await db.run(`DELETE FROM host_monitoring_snapshots`);
  await db.run(`DELETE FROM host_monitoring_sessions`);
  return { success: true };
}

module.exports = {
  initHostMonitoringTables,
  createSessionRecord,
  recordSnapshot,
  finishSessionRecord,
  listSessions,
  getSessionDetails,
  deleteSession,
  clearHistory
};

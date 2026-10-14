const db = require('./db');
const pm2 = require('pm2');

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

let recorderInterval = null;

function listProcessesPM2(timeoutMs = 4000) {
  return new Promise((resolve, reject) => {
    let settled = false;
    const timer = setTimeout(() => {
      if (!settled) {
        settled = true;
        reject(new Error(`pm2.list timeout (${timeoutMs}ms)`));
      }
    }, timeoutMs);

    pm2.list((err, procs) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      if (err) return reject(err);
      resolve(procs || []);
    });
  });
}

async function recordSampleForSession(session, procs) {
  try {
    const proc = procs.find(p =>
      String(p.pm_id) === String(session.processId) ||
      (p.pm2_env && p.pm2_env.name === session.processName)
    );

    const cpu = proc?.monit?.cpu || 0;
    const memory = proc?.monit?.memory || 0;
    const nowLocal = getLocalDateTime();

    await db.run(
      `INSERT INTO pm2_monitoring_metrics (sessionId, processId, processName, cpu, memory, capturedAt)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [session.id, session.processId, session.processName, cpu, memory, nowLocal]
    );
  } catch (err) {
    console.error(`[PM2 Recorder] Erro ao gravar amostra da sessão ${session.id}:`, err.message);
  }
}

async function checkAndRecord() {
  try {
    const nowLocal = getLocalDateTime();
    const activeSessions = await db.all(
      `SELECT * FROM pm2_monitoring_sessions WHERE status = 'active'`
    );

    if (!activeSessions || activeSessions.length === 0) {
      stopRecorderInterval();
      return;
    }

    let procs = [];
    try {
      procs = await listProcessesPM2();
    } catch (e) {
      console.warn('[PM2 Recorder] Falha ao consultar PM2:', e.message);
    }

    for (const session of activeSessions) {
      if (nowLocal >= session.endsAt) {
        await db.run(
          `UPDATE pm2_monitoring_sessions SET status = 'completed', updatedAt = ? WHERE id = ?`,
          [nowLocal, session.id]
        );
        console.log(`[PM2 Recorder] Sessão de monitoramento finalizada: ${session.processName} (${session.id})`);
      } else {
        await recordSampleForSession(session, procs);
      }
    }

    const remaining = await db.all(`SELECT id FROM pm2_monitoring_sessions WHERE status = 'active'`);
    if (!remaining || remaining.length === 0) {
      stopRecorderInterval();
    }
  } catch (err) {
    console.error('[PM2 Recorder] Erro na execução periódica:', err.message);
  }
}

function startRecorderInterval() {
  if (recorderInterval) return;
  console.log('[PM2 Recorder] Iniciando gravação periódica minuto a minuto...');
  recorderInterval = setInterval(checkAndRecord, 60000); // Exatamente a cada 1 minuto
}

function stopRecorderInterval() {
  if (recorderInterval) {
    console.log('[PM2 Recorder] Parando gravação periódica (sem sessões ativas).');
    clearInterval(recorderInterval);
    recorderInterval = null;
  }
}

async function startSession(processId, processName, durationMinutes) {
  const duration = parseInt(durationMinutes, 10);
  if (!duration || duration <= 0) {
    throw new Error('Duração inválida para monitoramento.');
  }

  const now = new Date();
  const startedAt = getLocalDateTime(now);
  const endDate = new Date(now.getTime() + duration * 60 * 1000);
  const endsAt = getLocalDateTime(endDate);

  const sessionId = `mon_${Date.now()}_${processId}`;

  // Se já houver uma sessão ativa para este mesmo processo, finaliza a anterior
  await db.run(
    `UPDATE pm2_monitoring_sessions SET status = 'cancelled', updatedAt = ? WHERE processName = ? AND status = 'active'`,
    [startedAt, processName]
  );

  await db.run(
    `INSERT INTO pm2_monitoring_sessions (id, processId, processName, durationMinutes, startedAt, endsAt, status, createdAt, updatedAt)
     VALUES (?, ?, ?, ?, ?, ?, 'active', ?, ?)`,
    [sessionId, processId, processName, duration, startedAt, endsAt, startedAt, startedAt]
  );

  // Amostra inicial imediata
  try {
    const procs = await listProcessesPM2();
    await recordSampleForSession({ id: sessionId, processId, processName }, procs);
  } catch (e) {
    console.warn('[PM2 Recorder] Erro ao gravar amostra inicial:', e.message);
  }

  startRecorderInterval();

  return {
    id: sessionId,
    processId,
    processName,
    durationMinutes: duration,
    startedAt,
    endsAt,
    status: 'active'
  };
}

async function stopSession(sessionId) {
  const nowLocal = getLocalDateTime();
  await db.run(
    `UPDATE pm2_monitoring_sessions SET status = 'cancelled', updatedAt = ? WHERE id = ?`,
    [nowLocal, sessionId]
  );

  const active = await db.all(`SELECT id FROM pm2_monitoring_sessions WHERE status = 'active'`);
  if (!active || active.length === 0) {
    stopRecorderInterval();
  }
  return { success: true };
}

async function getActiveSessions() {
  const nowLocal = getLocalDateTime();
  // Atualiza as expiradas caso tenham passado
  await db.run(
    `UPDATE pm2_monitoring_sessions SET status = 'completed', updatedAt = ? WHERE status = 'active' AND endsAt <= ?`,
    [nowLocal, nowLocal]
  );

  return db.all(`SELECT * FROM pm2_monitoring_sessions WHERE status = 'active' ORDER BY createdAt DESC`);
}

async function getSessionDetails(sessionId) {
  const session = await db.get(`SELECT * FROM pm2_monitoring_sessions WHERE id = ?`, [sessionId]);
  if (!session) return null;

  const metrics = await db.all(
    `SELECT * FROM pm2_monitoring_metrics WHERE sessionId = ? ORDER BY capturedAt ASC`,
    [sessionId]
  );

  return { session, metrics };
}

async function getSessionsForProcess(processName) {
  return db.all(
    `SELECT * FROM pm2_monitoring_sessions WHERE processName = ? ORDER BY createdAt DESC LIMIT 20`,
    [processName]
  );
}

async function initRecorder() {
  const nowLocal = getLocalDateTime();
  // Limpa sessões passadas que ficaram ativas caso o servidor tenha reiniciado
  await db.run(
    `UPDATE pm2_monitoring_sessions SET status = 'completed', updatedAt = ? WHERE status = 'active' AND endsAt <= ?`,
    [nowLocal, nowLocal]
  );

  const active = await db.all(`SELECT id FROM pm2_monitoring_sessions WHERE status = 'active'`);
  if (active && active.length > 0) {
    console.log(`[PM2 Recorder] Retomando ${active.length} sessões ativas após inicialização.`);
    startRecorderInterval();
  }
}

module.exports = {
  startSession,
  stopSession,
  getActiveSessions,
  getSessionDetails,
  getSessionsForProcess,
  initRecorder,
  getLocalDateTime
};


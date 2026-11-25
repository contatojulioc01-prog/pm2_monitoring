/**
 * hostMonitorSessionService.js
 * Gerencia as sessões ativas de monitoramento (sob demanda manual ou temporizado)
 * e o watcher contínuo que dispara monitoramento automático por limiar crítico (ex.: >= 90% CPU ou RAM).
 * Integra com hostMonitoringHistoryService para salvar o histórico detalhado, picos e consumo individual.
 */

const { collectHostMetrics, getGlobalMemory, shutdownPsWorker } = require('./hostMetricsService');
const os = require('os');
const { getIO } = require('../monitoring/socket/socketServer');
const historyService = require('./hostMonitoringHistoryService');

function generateSessionId() {
  return `hmon_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
}

class HostMonitorSessionService {
  constructor() {
    this.session = {
      id: null,
      active: false,
      mode: 'idle', // 'idle' | 'manual_infinite' | 'manual_timed' | 'auto_triggered'
      startedAt: null,
      endsAt: null,
      durationMinutes: null,
      triggerReason: null
    };

    // Configuração de gatilho automático por limiar crítico
    this.triggerConfig = {
      enabled: true,
      cpuThreshold: 90, // %
      ramThreshold: 90, // %
      durationMinutes: 10, // Duração da sessão automática
      cooldownMinutes: 15 // Não redispara imediatamente
    };

    this.lastAutoTriggerAt = 0;
    this.streamTimer = null;
    this.watcherTimer = null;
    this.isCollecting = false;
    this.collectingStartedAt = 0;
    this.currentPushPromise = null;

    // Amostragem global contínua para cálculo preciso de CPU
    this.lastCpuMeasure = this.getCpuTimes();
    this.currentCpuPercent = 0;

    // Inicializa tabelas SQLite do histórico
    this.tablesReady = historyService.initHostMonitoringTables().catch(err => {
      console.error('[HostMonitor] Erro ao inicializar tabelas do histórico:', err.message);
    });
  }

  getCpuTimes() {
    const cpus = os.cpus();
    let idleMs = 0;
    let totalMs = 0;
    for (const cpu of cpus) {
      for (const t in cpu.times) {
        totalMs += cpu.times[t];
      }
      idleMs += cpu.times.idle;
    }
    return { idle: idleMs, total: totalMs, ts: Date.now() };
  }

  sampleGlobalCpu() {
    const current = this.getCpuTimes();
    const diffTotal = current.total - this.lastCpuMeasure.total;
    const diffIdle = current.idle - this.lastCpuMeasure.idle;

    if (diffTotal > 0) {
      const usage = ((diffTotal - diffIdle) / diffTotal) * 100;
      this.currentCpuPercent = parseFloat(Math.min(100, Math.max(0, usage)).toFixed(1));
    }
    this.lastCpuMeasure = current;
    return this.currentCpuPercent;
  }

  initWatcher() {
    if (this.watcherTimer) clearInterval(this.watcherTimer);

    // Watcher super leve a cada 3 segundos aferindo CPU e RAM
    this.watcherTimer = setInterval(async () => {
      try {
        const cpu = this.sampleGlobalCpu();
        const mem = getGlobalMemory();

        // Se já está em sessão ativa, verifica se a temporizada expirou
        if (this.session.active) {
          if (this.session.endsAt && Date.now() >= this.session.endsAt) {
            await this.stopSession('timeout');
          }
          return;
        }

        // Se não está em sessão e o gatilho automático está ativado
        if (this.triggerConfig.enabled) {
          const now = Date.now();
          const cooldownMs = this.triggerConfig.cooldownMinutes * 60 * 1000;

          if (now - this.lastAutoTriggerAt >= cooldownMs) {
            const cpuHit = cpu >= this.triggerConfig.cpuThreshold;
            const ramHit = mem.usedPercent >= this.triggerConfig.ramThreshold;

            if (cpuHit || ramHit) {
              const reason = cpuHit && ramHit
                ? `CPU (${cpu}%) e RAM (${mem.usedPercent}%) atingiram nível crítico (>= ${this.triggerConfig.cpuThreshold}%)`
                : cpuHit
                  ? `CPU atingiu nível crítico (${cpu}% >= ${this.triggerConfig.cpuThreshold}%)`
                  : `Memória RAM atingiu nível crítico (${mem.usedPercent}% >= ${this.triggerConfig.ramThreshold}%)`;

              this.lastAutoTriggerAt = now;
              await this.startSession({
                mode: 'auto_triggered',
                durationMinutes: this.triggerConfig.durationMinutes,
                triggerReason: reason
              });
            }
          }
        }
      } catch (e) {
        console.error('[HostMonitor] Erro no watcher contínuo:', e.message);
      }
    }, 5000);
    if (this.watcherTimer.unref) this.watcherTimer.unref();
  }

  async startSession({ mode = 'manual_infinite', durationMinutes = 10, triggerReason = null }) {
    await this.tablesReady;

    if (this.session.active) {
      await this.stopSession('replaced');
    }

    const sessionId = generateSessionId();
    const now = Date.now();
    let endsAt = null;

    if (mode === 'manual_timed' || mode === 'auto_triggered') {
      const dur = Math.max(1, parseInt(durationMinutes, 10) || 10);
      endsAt = now + dur * 60 * 1000;
      durationMinutes = dur;
    } else {
      mode = 'manual_infinite';
      durationMinutes = null;
    }

    this.session = {
      id: sessionId,
      active: true,
      mode,
      startedAt: now,
      endsAt,
      durationMinutes,
      triggerReason
    };

    try {
      await historyService.createSessionRecord({
        id: sessionId,
        mode,
        durationMinutes,
        triggerReason,
        startedAt: historyService.getLocalDateTime(new Date(now))
      });
    } catch (err) {
      console.error('[HostMonitor] Erro ao gravar registro de sessão:', err.message);
    }

    this.broadcastSessionState();
    this.startStreaming();
    return this.getStatus();
  }

  async stopSession(reason = 'user_action') {
    await this.tablesReady;

    if (this.streamTimer) {
      clearInterval(this.streamTimer);
      this.streamTimer = null;
    }

    const wasActive = this.session.active;
    const finishedId = this.session.id;

    if (this.currentPushPromise) {
      try {
        await Promise.race([
          this.currentPushPromise,
          new Promise((resolve) => setTimeout(resolve, 4000))
        ]);
      } catch (_) {}
    }

    this.session = {
      id: null,
      active: false,
      mode: 'idle',
      startedAt: null,
      endsAt: null,
      durationMinutes: null,
      triggerReason: null
    };

    if (wasActive && finishedId) {
      try {
        await historyService.finishSessionRecord(finishedId, reason);
      } catch (err) {
        console.error('[HostMonitor] Erro ao finalizar sessão no banco:', err.message);
      }
    }

    // Encerra worker PowerShell ocioso ao finalizar monitoramento
    shutdownPsWorker();

    if (wasActive) {
      this.broadcastSessionState(reason);
    }

    return this.getStatus();
  }

  startStreaming() {
    if (this.streamTimer) clearInterval(this.streamTimer);

    // Coleta inicial imediata
    this.pushMetrics();

    // Intervalo otimizado de 4 segundos (baixo impacto de CPU)
    this.streamTimer = setInterval(() => {
      this.pushMetrics();
    }, 4000);
  }

  pushMetrics() {
    if (this.isCollecting) {
      if (Date.now() - this.collectingStartedAt > 15000) {
        console.warn('[HostMonitor] Watchdog resetou flag isCollecting após >15s.');
        this.isCollecting = false;
      } else {
        return this.currentPushPromise;
      }
    }

    this.isCollecting = true;
    this.collectingStartedAt = Date.now();
    const activeSessionId = this.session.active ? this.session.id : null;

    const task = (async () => {
      try {
        const metrics = await collectHostMetrics({ limit: 40, forceFresh: true });
        metrics.session = this.getStatus();

        if (activeSessionId) {
          try {
            await historyService.recordSnapshot(activeSessionId, metrics);
          } catch (err) {
            console.error('[HostMonitor] Erro ao gravar snapshot:', err.message);
          }
        }

        const io = getIO();
        if (io) {
          io.emit('host:metrics:stream', metrics);
        }
      } catch (e) {
        console.error('[HostMonitor] Erro ao coletar métricas do host:', e.message);
      } finally {
        this.isCollecting = false;
        if (this.currentPushPromise === task) {
          this.currentPushPromise = null;
        }
      }
    })();

    this.currentPushPromise = task;
    return task;
  }

  broadcastSessionState(stoppedReason = null) {
    const io = getIO();
    if (io) {
      io.emit('host:session:state', {
        session: this.getStatus(),
        stoppedReason
      });
    }
  }

  getStatus() {
    const now = Date.now();
    let remainingSeconds = null;
    if (this.session.active && this.session.endsAt) {
      remainingSeconds = Math.max(0, Math.round((this.session.endsAt - now) / 1000));
    }

    return {
      id: this.session.id,
      active: this.session.active,
      mode: this.session.mode,
      startedAt: this.session.startedAt ? historyService.getLocalDateTime(new Date(this.session.startedAt)) : null,
      endsAt: this.session.endsAt ? historyService.getLocalDateTime(new Date(this.session.endsAt)) : null,
      remainingSeconds,
      durationMinutes: this.session.durationMinutes,
      triggerReason: this.session.triggerReason,
      triggerConfig: this.triggerConfig,
      globalSnapshot: {
        cpuUsage: this.sampleGlobalCpu(),
        memory: getGlobalMemory()
      }
    };
  }

  updateTriggerConfig(newConfig = {}) {
    if (typeof newConfig.enabled === 'boolean') this.triggerConfig.enabled = newConfig.enabled;
    if (typeof newConfig.cpuThreshold === 'number') this.triggerConfig.cpuThreshold = Math.max(10, Math.min(99, newConfig.cpuThreshold));
    if (typeof newConfig.ramThreshold === 'number') this.triggerConfig.ramThreshold = Math.max(10, Math.min(99, newConfig.ramThreshold));
    if (typeof newConfig.durationMinutes === 'number') this.triggerConfig.durationMinutes = Math.max(1, Math.min(120, newConfig.durationMinutes));
    if (typeof newConfig.cooldownMinutes === 'number') this.triggerConfig.cooldownMinutes = Math.max(1, Math.min(180, newConfig.cooldownMinutes));

    this.broadcastSessionState();
    return this.triggerConfig;
  }
}

const hostMonitorSessionService = new HostMonitorSessionService();
hostMonitorSessionService.initWatcher();

module.exports = hostMonitorSessionService;

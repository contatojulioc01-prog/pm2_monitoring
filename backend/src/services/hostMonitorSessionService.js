/**
 * hostMonitorSessionService.js
 * Gerencia as sessões ativas de monitoramento (sob demanda manual ou temporizado)
 * e o watcher contínuo que dispara monitoramento automático por limiar crítico (ex.: >= 90% CPU ou RAM).
 * Integra com hostMonitoringHistoryService para salvar o histórico detalhado, picos e consumo individual.
 */

const { collectHostMetrics, getGlobalMemory } = require('./hostMetricsService');
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

    // Amostragem global contínua para cálculo preciso de CPU
    this.lastCpuMeasure = this.getCpuTimes();
    this.currentCpuPercent = 0;

    // Inicializa tabelas SQLite do histórico
    historyService.initHostMonitoringTables().catch(err => {
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
            this.stopSession('timeout');
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
              this.startSession({
                mode: 'auto_triggered',
                durationMinutes: this.triggerConfig.durationMinutes,
                triggerReason: reason
              });
            }
          }
        }
      } catch (e) {
        // Silencioso no loop
      }
    }, 3000);
  }

  startSession({ mode = 'manual_infinite', durationMinutes = 10, triggerReason = null }) {
    if (this.session.active) {
      this.stopSession('replaced');
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

    // Cria o registro da sessão no SQLite
    historyService.createSessionRecord({
      id: sessionId,
      mode,
      durationMinutes,
      triggerReason,
      startedAt: new Date(now).toISOString()
    }).catch(err => {
      console.error('[HostMonitor] Erro ao gravar registro de sessão:', err.message);
    });

    this.broadcastSessionState();

    // Inicia streaming em tempo real (a cada 2 segundos)
    this.startStreaming();

    return this.getStatus();
  }

  stopSession(reason = 'user_action') {
    if (this.streamTimer) {
      clearInterval(this.streamTimer);
      this.streamTimer = null;
    }

    const wasActive = this.session.active;
    const finishedId = this.session.id;

    if (wasActive && finishedId) {
      // Finaliza a sessão no banco com médias e status final
      historyService.finishSessionRecord(finishedId, reason).catch(err => {
        console.error('[HostMonitor] Erro ao finalizar sessão no banco:', err.message);
      });
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

    if (wasActive) {
      this.broadcastSessionState(reason);
    }

    return this.getStatus();
  }

  startStreaming() {
    if (this.streamTimer) clearInterval(this.streamTimer);

    // Coleta inicial imediata
    this.pushMetrics();

    // Intervalo de transmissão contínua a cada 2 segundos
    this.streamTimer = setInterval(() => {
      this.pushMetrics();
    }, 2000);
  }

  async pushMetrics() {
    if (this.isCollecting) return;
    this.isCollecting = true;

    try {
      const metrics = await collectHostMetrics({ limit: 40 });
      // Adiciona o status da sessão nas métricas transmitidas
      metrics.session = this.getStatus();

      // Grava snapshot no histórico se a sessão estiver ativa
      if (this.session.active && this.session.id) {
        historyService.recordSnapshot(this.session.id, metrics).catch(err => {
          console.error('[HostMonitor] Erro ao gravar snapshot:', err.message);
        });
      }

      const io = getIO();
      if (io) {
        io.emit('host:metrics:stream', metrics);
      }
    } catch (e) {
      // Ignora erro momentâneo
    } finally {
      this.isCollecting = false;
    }
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
      startedAt: this.session.startedAt ? new Date(this.session.startedAt).toISOString() : null,
      endsAt: this.session.endsAt ? new Date(this.session.endsAt).toISOString() : null,
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

const { db } = require('../db/knex');
const { logger } = require('../utils/logger');
const { safeBeat } = require('./beat');

class Scheduler {
  constructor() {
    this.timers = new Map(); // monitorId -> NodeJS.Timeout
    this.states = new Map(); // monitorId -> { failureCount: number, isBeating: boolean }
    this.isStopping = false;
  }

  async start() {
    this.isStopping = false;
    logger.info('Iniciando motor de agendamento de monitores...');

    try {
      const activeMonitors = await db('monitors').where({ active: true });
      logger.info(`Carregados ${activeMonitors.length} monitores ativos para agendamento.`);

      for (const monitor of activeMonitors) {
        const lastBeat = await db('heartbeats')
          .where({ monitor_id: monitor.id })
          .orderBy('id', 'desc')
          .first();

        let initialFailures = 0;
        if (lastBeat && lastBeat.status === 0) {
          const maxRetries = Number.isInteger(Number(monitor.max_retries)) && Number(monitor.max_retries) >= 0
            ? Number(monitor.max_retries)
            : 2;
          initialFailures = maxRetries + 1;
        }

        this.states.set(monitor.id, {
          failureCount: initialFailures,
          isBeating: false
        });

        const initialJitterMs = Math.floor(Math.random() * 5000);
        this.scheduleNext(monitor.id, initialJitterMs);
      }
    } catch (err) {
      logger.error('Erro ao inicializar agendador:', err);
    }
  }

  scheduleNext(monitorId, delayMs) {
    if (this.isStopping) return;

    if (this.timers.has(monitorId)) {
      clearTimeout(this.timers.get(monitorId));
      this.timers.delete(monitorId);
    }

    const timer = setTimeout(async () => {
      await this.runCycle(monitorId);
    }, delayMs);

    this.timers.set(monitorId, timer);
  }

  async runCycle(monitorId) {
    if (this.isStopping) return;

    const state = this.states.get(monitorId) || { failureCount: 0, isBeating: false };
    if (state.isBeating) return;

    state.isBeating = true;
    this.states.set(monitorId, state);

    let nextDelayMs = 20000;

    try {
      const monitor = await db('monitors').where({ id: monitorId }).first();
      if (!monitor || !monitor.active) {
        this.stopMonitor(monitorId);
        return;
      }

      const { newStatus, newFailureCount } = await safeBeat(monitor, state.failureCount);
      state.failureCount = newFailureCount;

      if (newStatus === 2) {
        nextDelayMs = (monitor.retry_interval_s || 10) * 1000;
      } else {
        nextDelayMs = (monitor.interval_s || 20) * 1000;
      }
    } catch (err) {
      logger.error(`Erro inesperado no runCycle do monitor ID ${monitorId}:`, err);
    } finally {
      state.isBeating = false;
      this.states.set(monitorId, state);

      if (!this.isStopping && this.timers.has(monitorId)) {
        this.scheduleNext(monitorId, nextDelayMs);
      }
    }
  }

  async startMonitor(monitorId) {
    this.stopMonitor(monitorId);

    const monitor = await db('monitors').where({ id: monitorId, active: true }).first();
    if (!monitor) return;

    this.states.set(monitor.id, {
      failureCount: 0,
      isBeating: false
    });

    this.scheduleNext(monitor.id, 500);
  }

  stopMonitor(monitorId) {
    if (this.timers.has(monitorId)) {
      clearTimeout(this.timers.get(monitorId));
      this.timers.delete(monitorId);
    }
    this.states.delete(monitorId);
  }

  async restartMonitor(monitorId) {
    this.stopMonitor(monitorId);
    await this.startMonitor(monitorId);
  }

  shutdown() {
    this.isStopping = true;
    logger.info('Parando todos os ciclos do agendador de monitoramento...');
    for (const [id, timer] of this.timers.entries()) {
      clearTimeout(timer);
    }
    this.timers.clear();
    this.states.clear();
  }
}

const scheduler = new Scheduler();

module.exports = { scheduler };

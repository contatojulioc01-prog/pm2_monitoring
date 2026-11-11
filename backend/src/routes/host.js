/**
 * hostRoutes.js
 * Endpoints da API REST para controle, status e HISTÓRICO DETALHADO do monitoramento do host Windows.
 */

const express = require('express');
const router = express.Router();
const hostMonitorSessionService = require('../services/hostMonitorSessionService');
const { collectHostMetrics } = require('../services/hostMetricsService');
const historyService = require('../services/hostMonitoringHistoryService');

// Obter status atual do monitoramento e métricas instantâneas
router.get('/status', (req, res) => {
  try {
    const status = hostMonitorSessionService.getStatus();
    res.json({ success: true, ...status });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Snapshot único sob demanda
router.get('/snapshot', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 30;
    const metrics = await collectHostMetrics({ limit });
    res.json({ success: true, data: metrics });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Iniciar sessão de monitoramento
router.post('/session/start', (req, res) => {
  try {
    const { mode, durationMinutes } = req.body;
    const status = hostMonitorSessionService.startSession({
      mode: mode || 'manual_infinite',
      durationMinutes: durationMinutes ? parseInt(durationMinutes, 10) : 10
    });
    res.json({ success: true, message: 'Monitoramento iniciado com sucesso', session: status });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Interromper sessão ativa de monitoramento
router.post('/session/stop', (req, res) => {
  try {
    const status = hostMonitorSessionService.stopSession('user_manual_stop');
    res.json({ success: true, message: 'Monitoramento interrompido', session: status });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Atualizar configurações do gatilho automático por nível crítico
router.post('/trigger/config', (req, res) => {
  try {
    const updated = hostMonitorSessionService.updateTriggerConfig(req.body);
    res.json({ success: true, message: 'Configurações de gatilho atualizadas', config: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ─── ENDPOINTS DO HISTÓRICO DE MONITORAMENTO ────────────────────────────────────

// Listar histórico de sessões
router.get('/history/sessions', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 50;
    const offset = parseInt(req.query.offset, 10) || 0;
    const mode = req.query.mode || null;

    const data = await historyService.listSessions({ limit, offset, mode });
    res.json({ success: true, ...data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Obter detalhes de uma sessão (gráficos de pico, linha do tempo e ranking de consumo por processo)
router.get('/history/sessions/:id', async (req, res) => {
  try {
    const details = await historyService.getSessionDetails(req.params.id);
    if (!details) {
      return res.status(404).json({ success: false, error: 'Sessão não encontrada.' });
    }
    res.json({ success: true, ...details });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Excluir uma sessão do histórico
router.delete('/history/sessions/:id', async (req, res) => {
  try {
    await historyService.deleteSession(req.params.id);
    res.json({ success: true, message: 'Sessão excluída com sucesso.' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Limpar todo o histórico de monitoramentos
router.delete('/history/clear', async (req, res) => {
  try {
    await historyService.clearHistory();
    res.json({ success: true, message: 'Histórico de monitoramento limpo com sucesso.' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;

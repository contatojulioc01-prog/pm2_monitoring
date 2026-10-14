const express = require('express');
const router = express.Router();
const { signSessionToken, verifySessionToken, AUTH_ENABLED } = require('../middleware/auth');

const SSO_URL = (process.env.SSO_URL || 'http://192.168.13.244:7000').replace(/\/$/, '');
const SSO_API_KEY = process.env.SSO_API_KEY || '';
const SSO_PORTAL_URL = process.env.SSO_PORTAL_URL || 'http://192.168.13.244:7000';

function normalizeAvatarUrl(avatar) {
  if (!avatar || typeof avatar !== 'string') return null;
  const trimmed = avatar.trim().replace(/\\/g, '/');
  if (!trimmed) return null;
  if (/^(https?:\/\/|data:image\/)/i.test(trimmed)) {
    return trimmed;
  }
  const cleanPath = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  return `http://192.168.13.244${cleanPath}`;
}

// GET /api/auth/config
router.get('/config', (req, res) => {
  res.json({
    success: true,
    ssoEnabled: AUTH_ENABLED,
    ssoUrl: SSO_URL,
    portalUrl: SSO_PORTAL_URL
  });
});

// POST /api/auth/sso-login
router.post('/sso-login', async (req, res) => {
  const { ticket, token } = req.body || {};
  const incomingTicket = ticket || token;

  if (!incomingTicket) {
    return res.status(400).json({
      success: false,
      error: 'Ticket de autenticação não fornecido.'
    });
  }

  if (!SSO_API_KEY) {
    console.warn('⚠ SSO_API_KEY não configurada no .env');
  }

  try {
    const ssoResponse = await fetch(`${SSO_URL}/api/apikey/validate-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': SSO_API_KEY
      },
      body: JSON.stringify({ token: incomingTicket })
    });

    const ssoData = await ssoResponse.json().catch(() => null);

    if (!ssoResponse.ok || !ssoData || !ssoData.success) {
      const errorMsg = ssoData?.message || ssoData?.error || `Falha ao validar token com o SSO (HTTP ${ssoResponse.status})`;
      return res.status(ssoResponse.status >= 400 && ssoResponse.status < 500 ? ssoResponse.status : 401).json({
        success: false,
        error: errorMsg
      });
    }

    const userData = ssoData.data;
    if (userData && userData.avatar) {
      userData.avatar = normalizeAvatarUrl(userData.avatar);
    }
    const sessionToken = signSessionToken(userData);

    return res.json({
      success: true,
      token: sessionToken,
      user: userData
    });
  } catch (err) {
    console.error('Erro ao conectar ao serviço SSO:', err);
    return res.status(500).json({
      success: false,
      error: 'Erro de comunicação com o servidor SSO: ' + err.message
    });
  }
});

// GET /api/auth/me
router.get('/me', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (!token) {
    return res.status(401).json({ success: false, error: 'Token de autenticação não fornecido.' });
  }

  const user = verifySessionToken(token);
  if (!user) {
    return res.status(401).json({ success: false, error: 'Sessão inválida ou expirada.' });
  }

  if (user && user.avatar) {
    user.avatar = normalizeAvatarUrl(user.avatar);
  }

  return res.json({
    success: true,
    user
  });
});

// GET /api/auth/sso-avatar
router.get('/sso-avatar', async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  let user = token ? verifySessionToken(token) : null;

  if (user && user.email && SSO_API_KEY) {
    try {
      const ssoRes = await fetch(`${SSO_URL}/api/apikey/users`, {
        headers: { 'X-Api-Key': SSO_API_KEY }
      });
      if (ssoRes.ok) {
        const data = await ssoRes.json();
        const users = data?.data?.userResponses || [];
        const found = users.find(u =>
          (user.id && u.id === user.id) ||
          (user.email && u.email && u.email.toLowerCase() === user.email.toLowerCase())
        );
        if (found && found.avatar) {
          return res.json({ success: true, avatar: normalizeAvatarUrl(found.avatar) });
        }
      }
    } catch (e) {
      console.warn('Erro ao consultar avatar no SSO via API Key:', e.message);
    }
  }

  if (user && user.avatar) {
    return res.json({ success: true, avatar: normalizeAvatarUrl(user.avatar) });
  }

  return res.json({ success: false, avatar: null });
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.json({ success: true, message: 'Sessão encerrada com sucesso.' });
});

module.exports = router;


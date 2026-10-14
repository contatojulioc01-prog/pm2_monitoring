const crypto = require('crypto');

const SESSION_SECRET = process.env.SESSION_SECRET || 'pm2_gui_sso_secret_key_change_in_prod';
const AUTH_ENABLED = !!(process.env.SSO_API_KEY && process.env.SSO_API_KEY.trim());

function signSessionToken(userData) {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const exp = Date.now() + 24 * 60 * 60 * 1000; // 24 horas de validade
  const payload = Buffer.from(JSON.stringify({ user: userData, exp })).toString('base64url');
  const signature = crypto.createHmac('sha256', SESSION_SECRET).update(`${header}.${payload}`).digest('base64url');
  return `${header}.${payload}.${signature}`;
}

function verifySessionToken(token) {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [header, payload, signature] = parts;
  const expectedSig = crypto.createHmac('sha256', SESSION_SECRET).update(`${header}.${payload}`).digest('base64url');
  if (signature !== expectedSig) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf-8'));
    if (data.exp && data.exp < Date.now()) return null;
    return data.user;
  } catch (e) {
    return null;
  }
}

function authMiddleware(req, res, next) {
  // Se SSO não estiver configurado com chave, permite acesso para desenvolvimento local
  if (!AUTH_ENABLED) {
    req.user = { id: 1, name: 'Admin Local', username: 'admin', email: 'admin@docebrinquedo.local' };
    return next();
  }

  const authHeader = req.headers['authorization'];
  let token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

  // Suporte a token via query parameter (para EventSource / SSE)
  if (!token && req.query && req.query.token) {
    token = req.query.token;
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Acesso não autorizado. Autenticação SSO obrigatória.'
    });
  }

  const user = verifySessionToken(token);
  if (!user) {
    return res.status(401).json({
      success: false,
      error: 'Sessão inválida ou expirada. Acesse novamente via Portal SSO.'
    });
  }

  req.user = user;
  next();
}

module.exports = {
  authMiddleware,
  signSessionToken,
  verifySessionToken,
  AUTH_ENABLED,
  SESSION_SECRET
};


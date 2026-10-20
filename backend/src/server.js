/**
 * DC — PM2 Web GUI & Gerenciador de Permissões
 * Backend Server Unificado (Node.js + Express + PM2 + SQLite)
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// ─── Environment Configuration ──────────────────────────────────────────────────
function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return;
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    content.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const match = trimmed.match(/^([^=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim().replace(/^['"]|['"]$/g, '');
        if (process.env[key] === undefined) {
          process.env[key] = value;
        }
      }
    });
  } catch (e) {
    console.warn('Aviso ao carregar .env:', e.message);
  }
}

// Tenta carregar .env da pasta backend ou da raiz
loadEnv(path.join(__dirname, '..', '.env'));
loadEnv(path.join(__dirname, '..', '..', '.env'));

const { authMiddleware, AUTH_ENABLED } = require('./middleware/auth');
const db = require('./utils/db');
const syncManager = require('./utils/sync-manager');
const http = require('http');
const pm2Recorder = require('./utils/pm2-recorder');
const { initMonitoring } = require('./monitoring');

const authRouter = require('./routes/auth');
const pm2Router = require('./routes/pm2');
const serversRouter = require('./routes/servers');
const foldersRouter = require('./routes/folders');
const usersRouter = require('./routes/users');
const groupsRouter = require('./routes/groups');
const monitorsRouter = require('./routes/monitors');
const notificationsRouter = require('./routes/notifications');
const maintenancesRouter = require('./routes/maintenances');
const monitoringSettingsRouter = require('./routes/monitoringSettings');
const pushRouter = require('./routes/push');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 6767;
const HOST = process.env.HOST || '0.0.0.0';

// Intercepta server.emit('request') e server.emit('upgrade') no nível mais baixo do HTTP Server.
// Isso garante que o Engine.IO (Socket.IO) veja a URL reescrita (/socket.io/...) ANTES de qualquer validação interna.
const originalServerEmit = server.emit;
server.emit = function (event, ...args) {
  if (event === 'request' || event === 'upgrade') {
    const req = args[0];
    if (req && typeof req.url === 'string') {
      if (req.url.startsWith('/pm2-manager/socket.io')) {
        req.url = req.url.replace(/^\/pm2-manager\/socket\.io/, '/socket.io');
      } else if (req.url.startsWith('/doce-manager/socket.io')) {
        req.url = req.url.replace(/^\/doce-manager\/socket\.io/, '/socket.io');
      }
    }
  }
  return originalServerEmit.apply(this, [event, ...args]);
};

// Trust proxy reverse proxy headers (IIS ARR, Nginx, Apache)
app.set('trust proxy', true);

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-Api-Key', 'x-sync-token'],
  credentials: false
}));
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// UTF-8 Header Middleware para todas as respostas da API (exceto endpoints SSE streams)
app.use('/api', (req, res, next) => {
  if (!req.path.includes('/stream')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
  }
  next();
});

// Suporte a subcaminho /pm2-manager e /doce-manager para API e Socket.IO
app.use((req, res, next) => {
  if (req.url.startsWith('/pm2-manager/api')) {
    req.url = req.url.replace(/^\/pm2-manager\/api/, '/api');
  } else if (req.url.startsWith('/doce-manager/api')) {
    req.url = req.url.replace(/^\/doce-manager\/api/, '/api');
  } else if (req.url.startsWith('/pm2-manager/socket.io')) {
    req.url = req.url.replace(/^\/pm2-manager\/socket\.io/, '/socket.io');
  } else if (req.url.startsWith('/doce-manager/socket.io')) {
    req.url = req.url.replace(/^\/doce-manager\/socket\.io/, '/socket.io');
  }
  next();
});

// ─── Rotas da API ─────────────────────────────────────────────────────────────
// Rotas públicas de autenticação
app.use('/api/auth', authRouter);

// Rotas públicas de push para heartbeats externos de tarefas e cron
app.use('/api/push', pushRouter);

// Rotas protegidas (ou com bypass local se AUTH desativado)
app.use('/api', authMiddleware, pm2Router);
app.use('/api/servers', authMiddleware, serversRouter);
app.use('/api/folders', authMiddleware, foldersRouter);
app.use('/api/users', authMiddleware, usersRouter);
app.use('/api/groups', authMiddleware, groupsRouter);
app.use('/api/monitors', authMiddleware, monitorsRouter);
app.use('/api/notifications', authMiddleware, notificationsRouter);
app.use('/api/maintenances', authMiddleware, maintenancesRouter);
app.use('/api/settings', authMiddleware, monitoringSettingsRouter);

// ─── Static Files & SPA Fallback ───────────────────────────────────────────────
// O build do frontend fica em backend/public/browser ou backend/public
const publicCandidates = [
  path.join(__dirname, '..', 'public', 'browser'),
  path.join(__dirname, '..', 'public'),
  path.join(__dirname, '..', '..', 'public', 'browser'),
  path.join(__dirname, '..', '..', 'public')
];

let publicPath = publicCandidates.find(p => fs.existsSync(path.join(p, 'index.html'))) || publicCandidates[0];

// Middleware de resolução direta de assets estáticos (evita 404 caso venha com prefixo de rota SPA aninhada)
app.use((req, res, next) => {
  const ext = path.extname(req.path);
  if (ext && /\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|map|json)$/i.test(ext)) {
    const fileName = path.basename(req.path);
    const candidateFile = path.join(publicPath, fileName);
    if (fs.existsSync(candidateFile)) {
      return res.sendFile(candidateFile);
    }
  }
  next();
});

app.use(express.static(publicPath, { index: false }));
app.use('/pm2-manager', express.static(publicPath, { index: false }));
app.use('/doce-manager', express.static(publicPath, { index: false }));

function getBaseHref(req) {
  const originalUrl = req.headers['x-original-url'] || 
                      req.headers['x-rewrite-url'] || 
                      req.headers['x-forwarded-prefix'] || 
                      req.originalUrl || 
                      req.url || 
                      '';
  const referer = req.headers['referer'] || '';

  if (originalUrl.includes('/pm2-manager') || referer.includes('/pm2-manager')) {
    return '/pm2-manager/';
  }
  if (originalUrl.includes('/doce-manager') || referer.includes('/doce-manager')) {
    return '/doce-manager/';
  }
  if (process.env.PUBLIC_PATH) {
    const clean = process.env.PUBLIC_PATH.replace(/\/+$/, '');
    if (clean) return `${clean}/`;
  }
  return '/';
}

function sendIndexHtml(req, res) {
  // Reavalia publicPath caso o build tenha acabado de ser gerado
  if (!fs.existsSync(path.join(publicPath, 'index.html'))) {
    const found = publicCandidates.find(p => fs.existsSync(path.join(p, 'index.html')));
    if (found) publicPath = found;
  }

  const indexPath = path.join(publicPath, 'index.html');
  if (!fs.existsSync(indexPath)) {
    return res.status(500).send('Arquivo index.html não encontrado no build. Execute: npm run build');
  }

  const baseHref = getBaseHref(req);

  fs.readFile(indexPath, 'utf8', (err, html) => {
    if (err) return res.status(500).send('Erro ao ler index.html');
    let modifiedHtml = html;
    if (/<base\s+href="[^"]*"\s*\/?>/i.test(modifiedHtml)) {
      modifiedHtml = modifiedHtml.replace(/<base\s+href="[^"]*"\s*\/?>/i, `<base href="${baseHref}">`);
    } else if (/<head>/i.test(modifiedHtml)) {
      modifiedHtml = modifiedHtml.replace(/<head>/i, `<head>\n  <base href="${baseHref}">`);
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(modifiedHtml);
  });
}

// Redirecionamentos de subcaminhos sem barra final
app.use((req, res, next) => {
  if (req.url === '/pm2-manager') return res.redirect(301, '/pm2-manager/');
  if (req.url === '/doce-manager') return res.redirect(301, '/doce-manager/');
  next();
});

// SPA Fallback
app.get('*', (req, res) => {
  // Se for um arquivo com extensão que não foi encontrado, retorna 404 (evita erro de MIME)
  if (path.extname(req.path)) {
    return res.status(404).end();
  }
  sendIndexHtml(req, res);
});

// ─── Inicialização do Servidor ────────────────────────────────────────────────
db.initDB()
  .then(async () => {
    syncManager.initScheduler();
    pm2Recorder.initRecorder();
    await initMonitoring(server);

    server.listen(PORT, HOST, () => {
      console.log(`\n  ██████╗ ███╗   ███╗██████╗      ██████╗ ██╗   ██╗██╗`);
      console.log(`  ██╔══██╗████╗ ████║╚════██╗    ██╔════╝ ██║   ██║██║`);
      console.log(`  ██████╔╝██╔████╔██║ █████╔╝    ██║  ███╗██║   ██║██║`);
      console.log(`  ██╔═══╝ ██║╚██╔╝██║██╔═══╝     ██║   ██║██║   ██║██║`);
      console.log(`  ██║     ██║ ╚═╝ ██║███████╗    ╚██████╔╝╚██████╔╝██║`);
      console.log(`  ╚═╝     ╚═╝     ╚═╝╚══════╝     ╚═════╝  ╚═════╝ ╚═╝\n`);
      console.log(`  🚀 Servidor Integrado (PM2 + Permissões + Uptime Monitor)`);
      console.log(`  🌐 Rodando em: http://${HOST}:${PORT}`);
      console.log(`  📁 Banco de Dados: SQLite (backend/src/data/db.sqlite & monitoramento.sqlite)`);
      console.log(`  🔐 Autenticação SSO: ${AUTH_ENABLED ? 'Ativa' : 'Bypass Local'}\n`);
    });
  })
  .catch((err) => {
    console.error('Falha ao inicializar banco de dados SQLite:', err);
    process.exit(1);
  });

module.exports = server;


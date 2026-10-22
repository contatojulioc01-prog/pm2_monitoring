const express = require('express');
const router = express.Router();
const db = require('../utils/db');
const { isExcludedAccount } = require('../utils/excluded-accounts');
const { filterRootPermissions } = require('../utils/permission-filter');

const getLocalDateString = () => {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
};

// GET /api/users — Listar usuários
router.get('/', async (req, res) => {
  const { serverId } = req.query;

  try {
    let users;
    if (serverId) {
      users = await db.all('SELECT * FROM users WHERE serverId = ? ORDER BY name ASC', [serverId]);
    } else {
      users = await db.all('SELECT * FROM users ORDER BY name ASC');
    }

    // Filtra contas padrões, administrativas, SIDs e testes
    const filteredDbUsers = users.filter(u => !isExcludedAccount(u.username) && !isExcludedAccount(u.name));

    // Mapeia o groups_json de volta para array
    const mappedUsers = filteredDbUsers.map(u => ({
      id: u.id,
      username: u.username,
      name: u.name,
      email: u.email,
      role: u.role || 'user',
      status: u.status || 'active',
      groups: JSON.parse(u.groups_json || '[]'),
      serverId: u.serverId,
      createdAt: getLocalDateString()
    }));

    res.json(mappedUsers);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuários no banco: ' + err.message });
  }
});

// GET /api/users/:id — Buscar usuário único
router.get('/:id', async (req, res) => {
  try {
    const u = await db.get('SELECT * FROM users WHERE id = ?', [req.params.id]);
    if (!u || isExcludedAccount(u.username) || isExcludedAccount(u.name)) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.json({
      id: u.id,
      username: u.username,
      name: u.name,
      email: u.email,
      role: u.role || 'user',
      status: u.status || 'active',
      groups: JSON.parse(u.groups_json || '[]'),
      serverId: u.serverId
    });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuário: ' + err.message });
  }
});

// GET /api/users/:id/permissions — Buscar permissões diretas e indiretas (via grupo) do usuário
router.get('/:id/permissions', async (req, res) => {
  try {
    const userId = req.params.id;

    // Buscar grupos do usuário
    const user = await db.get('SELECT groups_json FROM users WHERE id = ?', [userId]);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    const groups = JSON.parse(user.groups_json || '[]');

    // Monta a query para buscar permissões onde targetId é o próprio usuário OU um dos grupos
    const placeholders = groups.map(() => '?').join(',');
    let query = 'SELECT p.*, f.name as folderName FROM permissions p JOIN folders f ON p.path = f.path AND p.serverId = f.serverId WHERE p.targetId = ?';
    const params = [userId];

    if (groups.length > 0) {
      query += ` OR p.targetId IN (${placeholders})`;
      params.push(...groups);
    }

    const permissions = await db.all(query, params);

    // Se solicitado 'raw=true', retorna a lista bruta sem consolidação
    if (req.query.raw === 'true') {
      return res.json(permissions);
    }

    // Retorna apenas a pasta raiz de cada ramo de acesso do usuário
    const rootPermissions = filterRootPermissions(permissions);
    res.json(rootPermissions);

  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar permissões do usuário: ' + err.message });
  }
});

module.exports = router;


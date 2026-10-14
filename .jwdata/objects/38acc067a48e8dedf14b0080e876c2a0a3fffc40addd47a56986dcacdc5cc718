const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbDir = path.join(__dirname, '../data');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const dbPath = path.join(dbDir, 'db.sqlite');
const db = new sqlite3.Database(dbPath);

// Async query wrappers
const run = (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(query, params, function (err) {
      if (err) reject(err);
      else resolve(this);
    });
  });
};

const all = (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

const get = (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.get(query, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

// Initialize SQLite Schema
async function initDB() {
  await run(`
    CREATE TABLE IF NOT EXISTS servers (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      ip TEXT NOT NULL,
      agentPort INTEGER DEFAULT 3001,
      token TEXT DEFAULT 'dc_manager_secret_token',
      rootPath TEXT,
      syncStatus TEXT DEFAULT 'idle',
      syncError TEXT,
      lastSyncedAt TEXT,
      createdAt TEXT,
      updatedAt TEXT
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      username TEXT NOT NULL,
      name TEXT NOT NULL,
      email TEXT,
      role TEXT DEFAULT 'user',
      status TEXT DEFAULT 'active',
      groups_json TEXT DEFAULT '[]',
      serverId TEXT NOT NULL,
      FOREIGN KEY (serverId) REFERENCES servers (id) ON DELETE CASCADE
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS groups (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      serverId TEXT NOT NULL,
      FOREIGN KEY (serverId) REFERENCES servers (id) ON DELETE CASCADE
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS folders (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      path TEXT NOT NULL,
      parentPath TEXT NOT NULL,
      serverId TEXT NOT NULL,
      FOREIGN KEY (serverId) REFERENCES servers (id) ON DELETE CASCADE
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS permissions (
      id TEXT PRIMARY KEY,
      path TEXT NOT NULL,
      type TEXT NOT NULL,
      targetId TEXT NOT NULL,
      targetName TEXT NOT NULL,
      read INTEGER DEFAULT 0,
      write INTEGER DEFAULT 0,
      rawRights TEXT,
      serverId TEXT NOT NULL,
      FOREIGN KEY (serverId) REFERENCES servers (id) ON DELETE CASCADE
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS pm2_monitoring_sessions (
      id TEXT PRIMARY KEY,
      processId INTEGER NOT NULL,
      processName TEXT NOT NULL,
      durationMinutes INTEGER NOT NULL,
      startedAt TEXT NOT NULL,
      endsAt TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'active',
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS pm2_monitoring_metrics (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sessionId TEXT NOT NULL,
      processId INTEGER NOT NULL,
      processName TEXT NOT NULL,
      cpu REAL NOT NULL,
      memory INTEGER NOT NULL,
      capturedAt TEXT NOT NULL,
      FOREIGN KEY (sessionId) REFERENCES pm2_monitoring_sessions (id) ON DELETE CASCADE
    )
  `);
}

module.exports = {
  run,
  all,
  get,
  initDB,
  db
};


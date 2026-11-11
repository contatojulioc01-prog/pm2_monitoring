/**
 * DC — PM2 Web GUI & Gerenciador de Permissões (Doce Brinquedo)
 * Entry point universal resiliente
 */
const fs = require('fs');
const path = require('path');

const backendPath = path.join(__dirname, 'backend', 'src', 'server.js');
const srcPath = path.join(__dirname, 'src', 'server.js');

if (fs.existsSync(backendPath)) {
  module.exports = require(backendPath);
} else if (fs.existsSync(srcPath)) {
  module.exports = require(srcPath);
} else {
  console.error('Servidor não encontrado em ./backend/src/server.js ou ./src/server.js');
  process.exit(1);
}


/**
 * Utilitários de Data e Hora estritamente Locais (Sem UTC)
 * Conforme diretriz Proibição de Data UTC (Uso Exclusivo de Data Local)
 */

const pad = (n) => n.toString().padStart(2, '0');

/**
 * Retorna a data e hora local no formato ISO sem Z: YYYY-MM-DDTHH:mm:ss
 * @param {Date|string|number} [d=new Date()]
 * @returns {string}
 */
function getLocalDateTime(d = new Date()) {
  const date = d instanceof Date ? d : new Date(d);
  const ano = date.getFullYear();
  const mes = pad(date.getMonth() + 1);
  const dia = pad(date.getDate());
  const hora = pad(date.getHours());
  const min = pad(date.getMinutes());
  const seg = pad(date.getSeconds());
  return `${ano}-${mes}-${dia}T${hora}:${min}:${seg}`;
}

/**
 * Retorna a data e hora local no formato SQL: YYYY-MM-DD HH:mm:ss
 * @param {Date|string|number} [d=new Date()]
 * @returns {string}
 */
function getLocalSqlDateTime(d = new Date()) {
  const date = d instanceof Date ? d : new Date(d);
  const ano = date.getFullYear();
  const mes = pad(date.getMonth() + 1);
  const dia = pad(date.getDate());
  const hora = pad(date.getHours());
  const min = pad(date.getMinutes());
  const seg = pad(date.getSeconds());
  return `${ano}-${mes}-${dia} ${hora}:${min}:${seg}`;
}

/**
 * Retorna o bucket de hora local: YYYY-MM-DD HH:00:00
 * @param {Date|string|number} [d=new Date()]
 * @returns {string}
 */
function getLocalHourBucket(d = new Date()) {
  const date = d instanceof Date ? d : new Date(d);
  const ano = date.getFullYear();
  const mes = pad(date.getMonth() + 1);
  const dia = pad(date.getDate());
  const hora = pad(date.getHours());
  return `${ano}-${mes}-${dia} ${hora}:00:00`;
}

/**
 * Retorna o bucket diário local: YYYY-MM-DD
 * @param {Date|string|number} [d=new Date()]
 * @returns {string}
 */
function getLocalDayBucket(d = new Date()) {
  const date = d instanceof Date ? d : new Date(d);
  const ano = date.getFullYear();
  const mes = pad(date.getMonth() + 1);
  const dia = pad(date.getDate());
  return `${ano}-${mes}-${dia}`;
}

/**
 * Retorna a data formatada para mensagens e relatórios em pt-BR (ex: 20/10/2026 09:30:00)
 * @param {Date|string} [d=new Date()]
 * @returns {string}
 */
function formatPtBr(d = new Date()) {
  const date = d instanceof Date ? d : new Date(d);
  const ano = date.getFullYear();
  const mes = pad(date.getMonth() + 1);
  const dia = pad(date.getDate());
  const hora = pad(date.getHours());
  const min = pad(date.getMinutes());
  const seg = pad(date.getSeconds());
  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

/**
 * Calcula a diferença legível em português (ex: "1h 15m 30s" ou "45s")
 * @param {Date|string} start
 * @param {Date|string} [end=new Date()]
 * @returns {string}
 */
function formatDuration(start, end = new Date()) {
  const dStart = new Date(start).getTime();
  const dEnd = new Date(end).getTime();
  const diffSec = Math.max(0, Math.floor((dEnd - dStart) / 1000));

  const hours = Math.floor(diffSec / 3600);
  const minutes = Math.floor((diffSec % 3600) / 60);
  const seconds = diffSec % 60;

  const parts = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0 || hours > 0) parts.push(`${minutes}m`);
  parts.push(`${seconds}s`);
  return parts.join(' ');
}

module.exports = {
  getLocalDateTime,
  getLocalSqlDateTime,
  getLocalHourBucket,
  getLocalDayBucket,
  formatPtBr,
  formatDuration
};

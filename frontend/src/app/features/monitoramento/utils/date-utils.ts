/**
 * Utilitários de Data/Hora estritamente Locais (Sem UTC)
 * Conforme diretriz Proibição de Data UTC (Uso Exclusivo de Data Local)
 */

const pad = (n: number) => n.toString().padStart(2, '0');

export function formatLocalDateTime(dateInput: Date | string | number): string {
  const d = dateInput instanceof Date ? dateInput : new Date(dateInput);
  if (isNaN(d.getTime())) return '-';
  const dia = pad(d.getDate());
  const mes = pad(d.getMonth() + 1);
  const ano = d.getFullYear();
  const hora = pad(d.getHours());
  const min = pad(d.getMinutes());
  const seg = pad(d.getSeconds());
  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

export function formatLocalDate(dateInput: Date | string | number): string {
  const d = dateInput instanceof Date ? dateInput : new Date(dateInput);
  if (isNaN(d.getTime())) return '-';
  const dia = pad(d.getDate());
  const mes = pad(d.getMonth() + 1);
  const ano = d.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

export const formatDateLocal = formatLocalDateTime;

export function formatLocalTime(dateInput: Date | string | number): string {
  const d = dateInput instanceof Date ? dateInput : new Date(dateInput);
  if (isNaN(d.getTime())) return '-';
  const hora = pad(d.getHours());
  const min = pad(d.getMinutes());
  const seg = pad(d.getSeconds());
  return `${hora}:${min}:${seg}`;
}

export function formatLocalIso(dateInput: Date | string | number = new Date()): string {
  const d = dateInput instanceof Date ? dateInput : new Date(dateInput);
  const ano = d.getFullYear();
  const mes = pad(d.getMonth() + 1);
  const dia = pad(d.getDate());
  const hora = pad(d.getHours());
  const min = pad(d.getMinutes());
  const seg = pad(d.getSeconds());
  return `${ano}-${mes}-${dia}T${hora}:${min}:${seg}`;
}

export function formatDurationStr(start: Date | string, end: Date | string = new Date()): string {
  const dStart = new Date(start).getTime();
  const dEnd = new Date(end).getTime();
  const diffSec = Math.max(0, Math.floor((dEnd - dStart) / 1000));

  const days = Math.floor(diffSec / 86400);
  const hours = Math.floor((diffSec % 86400) / 3600);
  const minutes = Math.floor((diffSec % 3600) / 60);
  const seconds = diffSec % 60;

  const parts: string[] = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0 || days > 0) parts.push(`${hours}h`);
  if (minutes > 0 || hours > 0 || days > 0) parts.push(`${minutes}m`);
  parts.push(`${seconds}s`);
  return parts.join(' ');
}

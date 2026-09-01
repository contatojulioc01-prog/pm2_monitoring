import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { Pm2Process } from '../../services/pm2.service';

@Component({
  selector: 'app-process-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule, MatMenuModule],
  templateUrl: './process-card.component.html',
  styleUrl: './process-card.component.scss'
})
export class ProcessCardComponent {
  @Input() process!: Pm2Process;
  @Output() onStart    = new EventEmitter<Pm2Process>();
  @Output() onStop     = new EventEmitter<Pm2Process>();
  @Output() onRestart  = new EventEmitter<Pm2Process>();
  @Output() onReload   = new EventEmitter<Pm2Process>();
  @Output() onDelete   = new EventEmitter<Pm2Process>();
  @Output() onLogs     = new EventEmitter<Pm2Process>();
  @Output() onDescribe = new EventEmitter<Pm2Process>();

  get statusLabel(): string {
    switch (this.process.status) {
      case 'online':   return 'ONLINE';
      case 'stopped':  return 'PARADO';
      case 'errored':  return 'ERRO';
      case 'stopping': return 'PARANDO';
      case 'launching': return 'INICIANDO';
      default:         return this.process.status?.toUpperCase() ?? '—';
    }
  }

  get statusClass(): string {
    switch (this.process.status) {
      case 'online':   return 'status--online';
      case 'stopped':  return 'status--stopped';
      case 'errored':  return 'status--errored';
      default:         return 'status--unknown';
    }
  }

  formatMemory(bytes: number): string {
    if (!bytes) return '0 B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    if (bytes < 1073741824) return (bytes / 1048576).toFixed(1) + ' MB';
    return (bytes / 1073741824).toFixed(1) + ' GB';
  }

  formatUptime(ms: number): string {
    if (!ms) return '—';
    const elapsed = Date.now() - ms;
    const s = Math.floor(elapsed / 1000);
    const m = Math.floor(s / 60);
    const h = Math.floor(m / 60);
    const d = Math.floor(h / 24);
    if (d > 0) return `${d}d ${h % 24}h`;
    if (h > 0) return `${h}h ${m % 60}m`;
    if (m > 0) return `${m}m ${s % 60}s`;
    return `${s}s`;
  }

  shortPath(path: string): string {
    if (!path) return '—';
    const parts = path.replace(/\\/g, '/').split('/');
    if (parts.length <= 3) return path;
    return '…/' + parts.slice(-2).join('/');
  }
}

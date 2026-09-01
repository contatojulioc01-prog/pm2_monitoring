import {
  Component, Input, Output, EventEmitter,
  OnInit, OnDestroy, OnChanges, signal, inject, ViewChild, ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Pm2Service } from '../../services/pm2.service';

interface LogEntry {
  type: 'out' | 'err' | 'info' | 'error';
  text: string;
}

@Component({
  selector: 'app-log-drawer',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule, MatTooltipModule],
  templateUrl: './log-drawer.component.html',
  styleUrl: './log-drawer.component.scss'
})
export class LogDrawerComponent implements OnInit, OnDestroy, OnChanges {
  @Input() processId!: number | string;
  @Input() processName = '';
  @Output() close = new EventEmitter<void>();
  @ViewChild('logEnd') logEnd!: ElementRef;

  private pm2 = inject(Pm2Service);

  logLines = signal<LogEntry[]>([]);
  loading = signal(true);
  liveMode = signal(false);
  filter = signal<'all' | 'out' | 'err'>('all');
  private sse: EventSource | null = null;

  get filtered(): LogEntry[] {
    const f = this.filter();
    if (f === 'all') return this.logLines();
    return this.logLines().filter(l => l.type === f);
  }

  ngOnInit(): void {
    this.loadHistory();
  }

  ngOnChanges(): void {
    this.stopLive();
    this.logLines.set([]);
    this.loading.set(true);
    this.liveMode.set(false);
    this.loadHistory();
  }

  ngOnDestroy(): void {
    this.stopLive();
  }

  private loadHistory(): void {
    this.pm2.getLogs(this.processId, 200).subscribe({
      next: res => {
        if (res.success) {
          this.logLines.set(res.data!.lines ?? []);
        }
        this.loading.set(false);
        this.scrollBottom();
      },
      error: () => this.loading.set(false)
    });
  }

  toggleLive(): void {
    if (this.liveMode()) {
      this.stopLive();
      this.liveMode.set(false);
    } else {
      this.startLive();
      this.liveMode.set(true);
    }
  }

  private startLive(): void {
    this.sse = this.pm2.streamLogs(this.processId);
    this.sse.addEventListener('message', (ev) => {
      try {
        const data = JSON.parse(ev.data);
        this.logLines.update(lines => [...lines, data]);
        this.scrollBottom();
      } catch {}
    });
  }

  private stopLive(): void {
    this.sse?.close();
    this.sse = null;
  }

  private scrollBottom(): void {
    setTimeout(() => {
      this.logEnd?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  copyLogs(): void {
    const text = this.filtered.map(l => `[${l.type}] ${l.text}`).join('\n');
    navigator.clipboard?.writeText(text);
  }

  clearView(): void {
    this.logLines.set([]);
  }
}

import { Component, Inject, OnInit, inject, signal, computed, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Pm2Service } from '../../services/pm2.service';

@Component({
  selector: 'app-describe-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="modal-wrapper">
      <!-- Fixed Header -->
      <div class="modal-header">
        <div class="header-main">
          <div class="header-icon-badge">
            <mat-icon>info</mat-icon>
          </div>
          <div class="header-title-box">
            <h2>Detalhes do Processo</h2>
            <p>{{ detail() ? (detail().name + ' (#' + detail().id + ')') : 'Informações do processo PM2' }}</p>
          </div>
        </div>
        <button type="button" class="close-btn" (click)="dialogRef.close()" title="Fechar">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <!-- Scrollable Body -->
      <div class="modal-body">
        @if (loading()) {
          <div class="loading-center">
            <mat-progress-spinner mode="indeterminate" diameter="40" />
            <p class="loading-text">Carregando detalhes...</p>
          </div>
        } @else if (errorMsg()) {
          <div class="error-state">
            <mat-icon class="error-icon">error_outline</mat-icon>
            <p class="error-title">Não foi possível carregar</p>
            <p class="error-text">{{ errorMsg() }}</p>
          </div>
        } @else if (detail(); as d) {
          <div class="detail-container">
            <!-- Status & Overview Card -->
            <div class="form-card">
              <div class="card-header">
                <mat-icon class="section-icon color-blue">tune</mat-icon>
                <h3>Status e Execução</h3>
                <span class="status-badge" [class]="'badge--' + d.status">
                  {{ d.status?.toUpperCase() }}
                </span>
              </div>

              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">ID / PID</span>
                  <span class="info-value font-mono">#{{ d.id }} (PID: {{ d.pid || '—' }})</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Nome do Processo</span>
                  <span class="info-value font-bold">{{ d.name }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">CPU / RAM</span>
                  <span class="info-value">{{ d.cpu }}% &nbsp;·&nbsp; {{ formatMemory(d.memory) }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Uptime / Restarts</span>
                  <span class="info-value">{{ formatUptime(d.uptime) }} ({{ d.restarts }} reinícios)</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Modo de Execução</span>
                  <span class="info-value">{{ d.execMode }} ({{ d.instances }} instância(s))</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Node / Namespace</span>
                  <span class="info-value">{{ d.nodeVersion || 'N/A' }} / {{ d.namespace || 'default' }}</span>
                </div>
              </div>
            </div>

            <!-- Path & Logs Card -->
            <div class="form-card">
              <div class="card-header">
                <mat-icon class="section-icon color-purple">folder_open</mat-icon>
                <h3>Arquivos e Logs</h3>
              </div>

              <div class="paths-list">
                <div class="path-item">
                  <span class="path-label">Script Executável:</span>
                  <code class="path-code">{{ d.execPath || '—' }}</code>
                </div>
                <div class="path-item">
                  <span class="path-label">Log de Saída (stdout):</span>
                  <code class="path-code">{{ d.logOut || '—' }}</code>
                </div>
                <div class="path-item">
                  <span class="path-label">Log de Erro (stderr):</span>
                  <code class="path-code">{{ d.logErr || '—' }}</code>
                </div>
              </div>
            </div>

            <!-- Environment Variables Card -->
            @if (hasEnv()) {
              <div class="form-card">
                <div class="card-header">
                  <mat-icon class="section-icon color-green">code</mat-icon>
                  <h3>Variáveis de Ambiente ({{ envEntries().length }})</h3>
                </div>

                <div class="env-table">
                  @for (entry of envEntries(); track entry[0]) {
                    <div class="env-row">
                      <span class="env-key font-mono">{{ entry[0] }}</span>
                      <span class="env-val font-mono">{{ entry[1] }}</span>
                    </div>
                  }
                </div>
              </div>
            }
          </div>
        }
      </div>

      <!-- Fixed Footer -->
      <div class="modal-footer">
        <button type="button" class="btn-cancel" (click)="dialogRef.close()">Fechar</button>
      </div>
    </div>
  `,
  styles: [`
    .modal-wrapper {
      display: flex;
      flex-direction: column;
      max-height: 90vh;
      width: 100%;
      min-width: 580px;
      max-width: 740px;
      background: var(--bg-surface, #ffffff);
      color: var(--text-primary, #0f172a);
      border-radius: 16px;
      overflow: hidden;
      font-family: 'Inter', system-ui, sans-serif;
    }

    .modal-header {
      flex-shrink: 0;
      position: sticky;
      top: 0;
      z-index: 10;
      padding: 20px 24px 16px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      border-bottom: 1px solid var(--border-color, #e2e8f0);
      background: linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, var(--bg-surface, #ffffff) 100%);
    }

    .header-main {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .header-icon-badge {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);

      mat-icon {
        font-size: 22px;
        width: 22px;
        height: 22px;
      }
    }

    .header-title-box h2 {
      margin: 0 0 2px 0;
      font-size: 18px;
      font-weight: 700;
      color: var(--text-primary, #0f172a);
    }

    .header-title-box p {
      margin: 0;
      font-size: 13px;
      color: var(--text-muted, #64748b);
    }

    .close-btn {
      background: var(--bg-chip, #f1f5f9);
      border: none;
      width: 34px;
      height: 34px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--text-muted, #64748b);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        background: #fee2e2;
        color: #ef4444;
        transform: rotate(90deg);
      }
    }

    .modal-body {
      flex: 1;
      padding: 20px 24px;
      overflow-y: auto;
      max-height: calc(90vh - 140px);
    }

    .loading-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 50px 20px;
      gap: 16px;

      .loading-text {
        font-size: 0.9rem;
        color: var(--text-muted, #64748b);
        margin: 0;
      }
    }

    .error-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 20px;
      text-align: center;
      color: #dc2626;
      gap: 8px;

      .error-icon {
        font-size: 44px;
        width: 44px;
        height: 44px;
      }
      .error-title {
        font-size: 1.05rem;
        font-weight: 700;
        margin: 0;
      }
      .error-text {
        font-size: 0.85rem;
        color: var(--text-muted, #64748b);
        margin: 0;
      }
    }

    .detail-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .form-card {
      background: var(--bg-surface, #ffffff);
      border: 1px solid var(--border-color, #e2e8f0);
      border-radius: 12px;
      padding: 16px 20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--border-color, #f1f5f9);

      h3 {
        margin: 0;
        font-size: 15px;
        font-weight: 700;
        color: var(--text-primary, #0f172a);
        flex: 1;
      }
    }

    .section-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
    }
    .color-blue { color: #4f46e5; }
    .color-purple { color: #8b5cf6; }
    .color-green { color: #10b981; }

    .status-badge {
      font-size: 0.7rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 20px;
      letter-spacing: 0.4px;

      &.badge--online  { background: #dcfce7; color: #15803d; }
      &.badge--stopped { background: #f1f5f9; color: #475569; }
      &.badge--errored { background: #fee2e2; color: #dc2626; }
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px 18px;
    }

    .info-item {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .info-label {
      font-size: 0.72rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--text-muted, #64748b);
    }

    .info-value {
      font-size: 0.88rem;
      color: var(--text-primary, #0f172a);
      word-break: break-all;
    }

    .font-mono { font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; }
    .font-bold { font-weight: 600; }

    .paths-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .path-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .path-label {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-muted, #64748b);
    }

    .path-code {
      background: var(--bg-code, #f1f5f9);
      border: 1px solid var(--border-color, #e2e8f0);
      color: var(--text-primary, #0f172a);
      padding: 6px 10px;
      border-radius: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.78rem;
      word-break: break-all;
      display: block;
    }

    .env-table {
      display: flex;
      flex-direction: column;
      gap: 4px;
      max-height: 200px;
      overflow-y: auto;
    }

    .env-row {
      display: flex;
      gap: 12px;
      padding: 4px 6px;
      border-radius: 4px;
      font-size: 0.78rem;
      background: var(--bg-code, #f8fafc);

      &:nth-child(even) { background: transparent; }
    }

    .env-key {
      color: var(--accent, #4f46e5);
      font-weight: 600;
      min-width: 140px;
    }

    .env-val {
      color: var(--text-secondary, #334155);
      word-break: break-all;
      flex: 1;
    }

    .modal-footer {
      flex-shrink: 0;
      position: sticky;
      bottom: 0;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 14px 24px;
      background: var(--bg-surface, #ffffff);
      border-top: 1px solid var(--border-color, #e2e8f0);
    }

    .btn-cancel {
      padding: 0 20px;
      height: 38px;
      border-radius: 8px;
      border: 1px solid var(--border-color, #cbd5e1);
      background: var(--bg-surface, #ffffff);
      color: var(--text-secondary, #475569);
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background: var(--bg-hover, #f1f5f9);
        color: var(--text-primary, #1e293b);
      }
    }
  `]
})
export class DescribeModalComponent implements OnInit {
  private pm2 = inject(Pm2Service);
  public dialogRef = inject(MatDialogRef<DescribeModalComponent>);
  private cdr = inject(ChangeDetectorRef);

  loading = signal(true);
  detail = signal<any>(null);
  errorMsg = signal<string | null>(null);

  envEntries = computed(() => {
    const d = this.detail();
    if (!d?.env) return [];
    return Object.entries(d.env) as [string, string][];
  });

  hasEnv = computed(() => this.envEntries().length > 0);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { processId: number | string }
  ) {}

  ngOnInit(): void {
    const procId = this.data?.processId;
    if (procId === undefined || procId === null) {
      this.errorMsg.set('ID do processo não fornecido.');
      this.loading.set(false);
      return;
    }

    this.pm2.describeProcess(procId).subscribe({
      next: res => {
        if (res.success && res.data) {
          this.detail.set(res.data);
        } else {
          this.errorMsg.set(res.error ?? 'Processo não encontrado no PM2.');
        }
        this.loading.set(false);
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.errorMsg.set(`Erro ${err.status || 500}: ${err.error?.error || err.message || 'Falha na requisição'}`);
        this.loading.set(false);
        this.cdr.markForCheck();
      }
    });
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
    const day = Math.floor(h / 24);
    if (day > 0) return `${day}d ${h % 24}h`;
    if (h > 0) return `${h}h ${m % 60}m`;
    if (m > 0) return `${m}m`;
    return `${s}s`;
  }
}

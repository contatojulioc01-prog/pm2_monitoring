import { Component, Inject, OnInit, inject } from '@angular/core';
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
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatDividerModule, MatProgressSpinnerModule],
  template: `
    <div class="describe-modal">
      <div class="modal-header">
        <h2 class="modal-title">
          <mat-icon>info</mat-icon>
          Detalhes do Processo
        </h2>
        <button mat-icon-button mat-dialog-close><mat-icon>close</mat-icon></button>
      </div>
      <mat-divider />

      @if (loading) {
        <div class="loading-center">
          <mat-progress-spinner mode="indeterminate" diameter="36" />
        </div>
      } @else if (errorMsg) {
        <div class="error-state">
          <mat-icon class="error-icon">error_outline</mat-icon>
          <p class="error-text">{{ errorMsg }}</p>
        </div>
      } @else if (detail) {
        <div class="detail-body">
          <div class="detail-header">
            <span class="status-badge" [class]="'badge--' + detail.status">
              {{ detail.status.toUpperCase() }}
            </span>
            <h3 class="detail-name">{{ detail.name }}</h3>
            <span class="detail-id">#{{ detail.id }}</span>
          </div>

          <div class="detail-grid">
            @for (item of detailItems; track item.label) {
              <div class="detail-item">
                <span class="detail-label">{{ item.label }}</span>
                <span class="detail-value">{{ item.value }}</span>
              </div>
            }
          </div>

          @if (hasEnv) {
            <mat-divider />
            <div class="env-section">
              <h4 class="env-title">Variáveis de Ambiente</h4>
              <div class="env-grid">
                @for (entry of envEntries; track entry[0]) {
                  <div class="env-item">
                    <span class="env-key">{{ entry[0] }}</span>
                    <span class="env-val">{{ entry[1] }}</span>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      }

      <div class="modal-footer">
        <button mat-flat-button color="primary" mat-dialog-close>Fechar</button>
      </div>
    </div>
  `,
  styles: [`
    .describe-modal { min-width: 580px; max-width: 700px; }

    .modal-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 18px 24px;
    }
    .modal-title {
      display: flex; align-items: center; gap: 8px;
      font-size: 1rem; font-weight: 700; margin: 0;
      mat-icon { color: #4F46E5; }
    }

    .loading-center { display: flex; justify-content: center; padding: 40px; }

    .error-state {
      display: flex; flex-direction: column; align-items: center;
      padding: 40px 24px; gap: 10px; color: #dc2626;
      .error-icon { font-size: 40px; width: 40px; height: 40px; }
      .error-text { font-size: 0.875rem; text-align: center; margin: 0; }
    }

    .detail-body { padding: 16px 24px; }

    .detail-header {
      display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
      flex-wrap: wrap;
    }
    .detail-name { font-size: 1.1rem; font-weight: 700; margin: 0; }
    .detail-id { font-size: 0.8rem; color: #94a3b8; }

    .status-badge {
      font-size: 0.68rem; font-weight: 700;
      padding: 3px 8px; border-radius: 20px;
      &.badge--online  { background: #dcfce7; color: #15803d; }
      &.badge--stopped { background: #f1f5f9; color: #475569; }
      &.badge--errored { background: #fee2e2; color: #dc2626; }
    }

    .detail-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px 16px;
    }

    .detail-item {
      display: flex; flex-direction: column; gap: 2px;
    }
    .detail-label { font-size: 0.72rem; color: #94a3b8; text-transform: uppercase; font-weight: 600; letter-spacing: 0.4px; }
    .detail-value { font-size: 0.85rem; color: #1e293b; word-break: break-all; }

    .env-section { padding-top: 16px; }
    .env-title { font-size: 0.85rem; font-weight: 600; color: #475569; margin: 0 0 10px; }
    .env-grid { display: flex; flex-direction: column; gap: 4px; }
    .env-item { display: flex; gap: 8px; font-size: 0.78rem; }
    .env-key { color: #4F46E5; font-weight: 500; min-width: 120px; }
    .env-val { color: #475569; word-break: break-all; }

    .modal-footer { padding: 16px 24px; display: flex; justify-content: flex-end; border-top: 1px solid #e2e8f0; }
  `]
})
export class DescribeModalComponent implements OnInit {
  private pm2 = inject(Pm2Service);
  loading = true;
  detail: any = null;
  errorMsg: string | null = null;
  detailItems: { label: string; value: string }[] = [];
  envEntries: [string, string][] = [];
  get hasEnv() { return this.envEntries.length > 0; }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { processId: number | string }
  ) {}

  ngOnInit(): void {
    this.pm2.describeProcess(this.data.processId).subscribe({
      next: res => {
        if (res.success && res.data) {
          this.detail = res.data;
          this.buildItems();
        } else {
          this.errorMsg = res.error ?? 'Processo não encontrado.';
          console.error('[DescribeModal] API error:', res);
        }
        this.loading = false;
      },
      error: (err) => {
        this.errorMsg = 'Falha ao carregar detalhes. Verifique o console.';
        console.error('[DescribeModal] HTTP error:', err);
        this.loading = false;
      }
    });
  }

  private buildItems(): void {
    const d = this.detail;
    const fmtMem = (b: number) => b < 1048576 ? (b/1024).toFixed(1)+' KB' : (b/1048576).toFixed(1)+' MB';
    const fmtUp = (ms: number) => {
      if (!ms) return '—';
      const elapsed = Date.now() - ms;
      const s = Math.floor(elapsed / 1000);
      const m = Math.floor(s / 60);
      const h = Math.floor(m / 60);
      const day = Math.floor(h / 24);
      if (day > 0) return `${day}d ${h%24}h`;
      if (h > 0) return `${h}h ${m%60}m`;
      return `${m}m ${s%60}s`;
    };

    this.detailItems = [
      { label: 'PID', value: String(d.pid || '—') },
      { label: 'Status', value: d.status },
      { label: 'CPU', value: d.cpu + '%' },
      { label: 'RAM', value: fmtMem(d.memory) },
      { label: 'Restarts', value: String(d.restarts) },
      { label: 'Uptime', value: fmtUp(d.uptime) },
      { label: 'Modo', value: d.execMode },
      { label: 'Instâncias', value: String(d.instances) },
      { label: 'Namespace', value: d.namespace },
      { label: 'Watch', value: d.watch ? 'Sim' : 'Não' },
      { label: 'Node', value: d.nodeVersion || '—' },
      { label: 'Log Out', value: d.logOut || '—' },
      { label: 'Log Err', value: d.logErr || '—' },
      { label: 'Script', value: d.execPath || '—' },
    ];

    if (d.env) {
      this.envEntries = Object.entries(d.env) as [string, string][];
    }
  }
}

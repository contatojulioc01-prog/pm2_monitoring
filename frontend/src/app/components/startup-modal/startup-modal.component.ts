import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-startup-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="startup-modal">
      <div class="modal-header">
        <div class="modal-icon-badge">
          <mat-icon>power_settings_new</mat-icon>
        </div>
        <div>
          <h2 class="modal-title">Inicialização Automática</h2>
          <p class="modal-sub">Saída do comando <code>pm2 startup</code></p>
        </div>
        <button mat-icon-button mat-dialog-close class="close-btn"><mat-icon>close</mat-icon></button>
      </div>

      @if (data.isWindows) {
        <div class="windows-note">
          <mat-icon>info</mat-icon>
          <span>No Windows, use <strong>pm2-installer</strong> ou o Task Scheduler conforme indicado abaixo.</span>
        </div>
      }

      <pre class="startup-output">{{ data.output }}</pre>

      <div class="modal-footer">
        <button mat-stroked-button (click)="copyOutput()">
          <mat-icon>content_copy</mat-icon>
          Copiar
        </button>
        <button mat-flat-button color="primary" mat-dialog-close>Fechar</button>
      </div>
    </div>
  `,
  styles: [`
    .startup-modal { width: 580px; max-width: 95vw; }

    .modal-header {
      display: flex; align-items: center; gap: 14px;
      padding: 20px 24px;
    }

    .modal-icon-badge {
      width: 44px; height: 44px; border-radius: 12px;
      background: linear-gradient(135deg, #7C3AED, #4F46E5);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      mat-icon { color: #fff; }
    }

    .modal-title { margin: 0 0 4px; font-size: 1rem; font-weight: 700; }
    .modal-sub { margin: 0; font-size: 0.78rem; color: #64748b; }
    code { background: #f1f5f9; padding: 2px 5px; border-radius: 4px; }

    .close-btn { margin-left: auto; }

    .windows-note {
      display: flex; align-items: flex-start; gap: 8px;
      background: #eff6ff; border-left: 4px solid #3b82f6;
      padding: 10px 16px; margin: 0 24px 12px; border-radius: 6px;
      font-size: 0.82rem; color: #1e40af;
      mat-icon { font-size: 18px; flex-shrink: 0; }
    }

    .startup-output {
      margin: 0 24px 16px;
      background: #0f172a;
      color: #e2e8f0;
      border-radius: 10px;
      padding: 16px;
      font-size: 0.75rem;
      font-family: 'JetBrains Mono', monospace;
      max-height: 300px;
      overflow-y: auto;
      white-space: pre-wrap;
      word-break: break-all;
    }

    .modal-footer {
      display: flex; gap: 10px; justify-content: flex-end;
      padding: 12px 24px 20px;
      border-top: 1px solid #e2e8f0;
    }
  `]
})
export class StartupModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { output: string; isWindows: boolean }) {}

  copyOutput(): void {
    navigator.clipboard?.writeText(this.data.output);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-launch-modal',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatDialogModule, MatButtonModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatCheckboxModule, MatRadioModule, MatDividerModule
  ],
  template: `
    <div class="launch-modal">
      <div class="modal-header">
        <div class="modal-title-row">
          <div class="modal-icon-badge">
            <mat-icon>play_circle</mat-icon>
          </div>
          <div>
            <h2 class="modal-title">Nova Aplicação</h2>
            <p class="modal-sub">Equivale a: <code>pm2 start &lt;script&gt;</code></p>
          </div>
        </div>
        <button mat-icon-button mat-dialog-close>
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <mat-divider />

      <div class="modal-body">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Script / Caminho *</mat-label>
          <input matInput [(ngModel)]="form.script"
            placeholder="C:\\apps\\meu-app\\server.js  ou  app.js" />
          <mat-hint>Caminho absoluto ou relativo ao PM2.</mat-hint>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Nome da Aplicação (--name)</mat-label>
          <input matInput [(ngModel)]="form.name" placeholder="minha-app (opcional)" />
        </mat-form-field>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Modo de Execução</label>
            <mat-radio-group [(ngModel)]="form.execMode" class="radio-group">
              <mat-radio-button value="fork">fork</mat-radio-button>
              <mat-radio-button value="cluster">cluster (-i)</mat-radio-button>
            </mat-radio-group>
          </div>

          @if (form.execMode === 'cluster') {
            <mat-form-field appearance="outline">
              <mat-label>Instâncias</mat-label>
              <mat-select [(ngModel)]="form.instances">
                <mat-option value="max">max — todos os CPUs</mat-option>
                <mat-option value="1">1</mat-option>
                <mat-option value="2">2</mat-option>
                <mat-option value="4">4</mat-option>
                <mat-option value="8">8</mat-option>
              </mat-select>
            </mat-form-field>
          }
        </div>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Argumentos (opcionais)</mat-label>
          <input matInput [(ngModel)]="form.args" placeholder="--port 3000 --env production" />
        </mat-form-field>

        <mat-checkbox [(ngModel)]="form.watch">
          <strong>Watch mode (--watch)</strong> — Reiniciar ao detectar mudanças nos arquivos
        </mat-checkbox>
      </div>

      <div class="modal-footer">
        <button mat-stroked-button mat-dialog-close>Cancelar</button>
        <button mat-flat-button color="primary" (click)="submit()" [disabled]="!form.script.trim()">
          <mat-icon>play_arrow</mat-icon>
          Iniciar Processo
        </button>
      </div>
    </div>
  `,
  styles: [`
    .launch-modal { width: 100%; }

    .modal-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 20px 24px 16px;
    }

    .modal-title-row {
      display: flex; align-items: center; gap: 14px;
    }

    .modal-icon-badge {
      width: 44px; height: 44px; border-radius: 12px;
      background: linear-gradient(135deg, #7C3AED, #4F46E5);
      display: flex; align-items: center; justify-content: center;
      mat-icon { color: #fff; }
    }

    .modal-title { margin: 0 0 4px; font-size: 1.1rem; font-weight: 700; }
    .modal-sub { margin: 0; font-size: 0.78rem; color: #64748b; }
    code { background: #f1f5f9; padding: 2px 5px; border-radius: 4px; }

    .modal-body {
      padding: 20px 24px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .full-width { width: 100%; }

    .form-row {
      display: flex; gap: 16px; align-items: flex-start; flex-wrap: wrap;
    }

    .form-group { flex: 1; }
    .form-label { font-size: 0.82rem; font-weight: 500; color: #475569; display: block; margin-bottom: 6px; }

    .radio-group {
      display: flex; gap: 16px;
    }

    .modal-footer {
      display: flex; gap: 10px; justify-content: flex-end;
      padding: 16px 24px 20px;
      border-top: 1px solid #e2e8f0;
    }
  `]
})
export class LaunchModalComponent {
  form = {
    script: '',
    name: '',
    execMode: 'fork',
    instances: 'max',
    args: '',
    watch: false,
  };

  constructor(private dialogRef: MatDialogRef<LaunchModalComponent>) {}

  submit(): void {
    if (!this.form.script.trim()) return;
    this.dialogRef.close({ ...this.form });
  }
}

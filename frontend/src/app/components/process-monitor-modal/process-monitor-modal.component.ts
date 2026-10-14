import { Component, Inject, OnInit, OnDestroy, inject, signal, computed, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { finalize } from 'rxjs/operators';
import { Pm2Service, Pm2Process, MonitoringSession, MonitoringMetricPoint } from '../../services/pm2.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-process-monitor-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  template: `
    <div class="modal-wrapper">
      <!-- Fixed Header -->
      <div class="modal-header">
        <div class="header-main">
          <div class="header-icon-badge" [class.recording-active]="activeSession()">
            <mat-icon>{{ activeSession() ? 'fiber_manual_record' : 'query_stats' }}</mat-icon>
          </div>
          <div class="header-title-box">
            <h2>Monitoramento — {{ data.process.name }}</h2>
            <p>
              @if (activeSession()) {
                <span class="active-badge-sub">
                  <span class="pulse-dot"></span> Gravando minuto a minuto ({{ activeSession()!.durationMinutes }}m)
                </span>
              } @else {
                Gravação periódica de CPU e RAM no banco de dados (ID: #{{ data.process.id }})
              }
            </p>
          </div>
        </div>
        <button type="button" class="close-btn" (click)="fechar()" title="Fechar">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <!-- Scrollable Body -->
      <div class="modal-body">
        @if (loading()) {
          <div class="loading-center">
            <mat-progress-spinner mode="indeterminate" diameter="36" />
            <p class="loading-text">Carregando dados de monitoramento...</p>
          </div>
        } @else {
          <!-- Active Recording Status Card (se houver gravação ativa) -->
          @if (activeSession(); as active) {
            <div class="recording-card">
              <div class="recording-header">
                <div class="recording-title-group">
                  <span class="rec-live-indicator">
                    <span class="pulse-dot red"></span>
                    GRAVAÇÃO ATIVA
                  </span>
                  <h3 class="recording-title">Sessão em andamento</h3>
                </div>
                <button
                  type="button"
                  class="btn-stop-rec"
                  (click)="pararMonitoramento(active.id)"
                  [disabled]="loadingParar"
                >
                  <mat-progress-spinner
                    *ngIf="loadingParar"
                    mode="indeterminate"
                    diameter="16"
                    class="button-spinner"
                  />
                  <mat-icon *ngIf="!loadingParar">stop</mat-icon>
                  <span>{{ loadingParar ? 'Encerrando...' : 'Encerrar Monitoramento' }}</span>
                </button>
              </div>

              <div class="recording-meta-grid">
                <div class="meta-item">
                  <span class="meta-label">Duração Prevista</span>
                  <span class="meta-val">{{ active.durationMinutes }} min</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Amostras Coletadas</span>
                  <span class="meta-val font-mono">{{ metrics().length }} minuto(s)</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Iniciado às</span>
                  <span class="meta-val">{{ formatLocalTime(active.startedAt) }}</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Término Previsto</span>
                  <span class="meta-val">{{ formatLocalTime(active.endsAt) }}</span>
                </div>
              </div>

              <!-- Quick Stats Summary -->
              @if (metrics().length > 0) {
                <div class="stats-pills-row">
                  <div class="stat-pill">
                    <span class="stat-pill-label">CPU Médio</span>
                    <span class="stat-pill-val font-mono">{{ avgCpu().toFixed(1) }}%</span>
                  </div>
                  <div class="stat-pill">
                    <span class="stat-pill-label">CPU Pico</span>
                    <span class="stat-pill-val font-mono text-amber">{{ maxCpu().toFixed(1) }}%</span>
                  </div>
                  <div class="stat-pill">
                    <span class="stat-pill-label">RAM Média</span>
                    <span class="stat-pill-val font-mono">{{ formatMemory(avgMem()) }}</span>
                  </div>
                  <div class="stat-pill">
                    <span class="stat-pill-label">RAM Pico</span>
                    <span class="stat-pill-val font-mono text-purple">{{ formatMemory(maxMem()) }}</span>
                  </div>
                </div>
              }
            </div>
          } @else {
            <!-- Form to Configure New Monitoring Session -->
            <div class="form-card">
              <div class="card-header">
                <mat-icon class="section-icon color-indigo">schedule</mat-icon>
                <h3>Iniciar Novo Período de Monitoramento</h3>
              </div>

              <p class="config-desc">
                Selecione o tempo desejado. O sistema salvará no banco de dados SQLite o consumo exato de CPU e Memória RAM deste processo a cada <strong>1 minuto</strong> de forma autônoma.
              </p>

              <div class="duration-selector">
                <button
                  type="button"
                  class="duration-pill"
                  [class.active]="selectedDuration() === 5 && !isCustomDuration()"
                  (click)="setPresetDuration(5)"
                >
                  <span class="pill-title">5 Minutos</span>
                  <span class="pill-sub">5 amostras</span>
                </button>

                <button
                  type="button"
                  class="duration-pill"
                  [class.active]="selectedDuration() === 10 && !isCustomDuration()"
                  (click)="setPresetDuration(10)"
                >
                  <span class="pill-title">10 Minutos</span>
                  <span class="pill-sub">10 amostras</span>
                </button>

                <button
                  type="button"
                  class="duration-pill"
                  [class.active]="selectedDuration() === 30 && !isCustomDuration()"
                  (click)="setPresetDuration(30)"
                >
                  <span class="pill-title">30 Minutos</span>
                  <span class="pill-sub">30 amostras</span>
                </button>

                <button
                  type="button"
                  class="duration-pill"
                  [class.active]="selectedDuration() === 60 && !isCustomDuration()"
                  (click)="setPresetDuration(60)"
                >
                  <span class="pill-title">1 Hora</span>
                  <span class="pill-sub">60 amostras</span>
                </button>

                <button
                  type="button"
                  class="duration-pill"
                  [class.active]="isCustomDuration()"
                  (click)="setCustomDurationMode()"
                >
                  <span class="pill-title">Personalizado</span>
                  <span class="pill-sub">Definir horas</span>
                </button>
              </div>

              @if (isCustomDuration()) {
                <div class="custom-hours-box">
                  <label class="custom-label">Quantidade de horas a monitorar:</label>
                  <div class="custom-input-group">
                    <input
                      type="number"
                      min="1"
                      max="72"
                      [(ngModel)]="customHours"
                      class="custom-input"
                      placeholder="Ex: 2"
                    />
                    <span class="custom-suffix">horas ({{ (customHours || 0) * 60 }} minutos)</span>
                  </div>
                </div>
              }

              <div class="action-start-row">
                <button
                  type="button"
                  class="btn-start-rec"
                  (click)="iniciarMonitoramento()"
                  [disabled]="loadingIniciar"
                >
                  <mat-progress-spinner
                    *ngIf="loadingIniciar"
                    mode="indeterminate"
                    diameter="18"
                    class="button-spinner"
                  />
                  <mat-icon *ngIf="!loadingIniciar">play_arrow</mat-icon>
                  <span>{{ loadingIniciar ? 'Iniciando...' : 'Ligar Monitoramento Minuto a Minuto' }}</span>
                </button>
              </div>
            </div>
          }

          <!-- Live or Selected Session Metrics Table -->
          @if (metrics().length > 0) {
            <div class="form-card metrics-card">
              <div class="card-header">
                <mat-icon class="section-icon color-cyan">format_list_bulleted</mat-icon>
                <h3>Registros Minuto a Minuto ({{ metrics().length }} coletados)</h3>
                <button type="button" class="btn-export-sm" (click)="exportarCSV()" matTooltip="Exportar registros em CSV">
                  <mat-icon>download</mat-icon>
                  <span>Exportar CSV</span>
                </button>
              </div>

              <div class="metrics-table-wrapper">
                <table class="metrics-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Horário Local</th>
                      <th>CPU (%)</th>
                      <th>Memória RAM</th>
                    </tr>
                  </thead>
                  <tbody>
                    @for (m of metrics(); track m.id; let idx = $index) {
                      <tr>
                        <td class="font-mono text-muted">{{ idx + 1 }}</td>
                        <td class="font-mono">{{ formatLocalTime(m.capturedAt) }}</td>
                        <td>
                          <div class="cpu-data-cell">
                            <span class="font-mono" [class.alert]="m.cpu >= 70">{{ m.cpu.toFixed(1) }}%</span>
                            <div class="mini-bar-track">
                              <div class="mini-bar-fill" [style.width.%]="m.cpu > 100 ? 100 : m.cpu" [class.alert]="m.cpu >= 70"></div>
                            </div>
                          </div>
                        </td>
                        <td class="font-mono font-bold">{{ formatMemory(m.memory) }}</td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          }

          <!-- History of Past Sessions -->
          @if (historySessions().length > 0) {
            <div class="form-card history-card">
              <div class="card-header">
                <mat-icon class="section-icon color-slate">history</mat-icon>
                <h3>Histórico de Sessões Anteriores</h3>
              </div>

              <div class="history-list">
                @for (s of historySessions(); track s.id) {
                  <div
                    class="history-item"
                    [class.selected]="selectedHistoryId() === s.id"
                    (click)="carregarSessaoHistorico(s.id)"
                  >
                    <div class="history-left">
                      <span class="history-status" [class]="'status--' + s.status">
                        {{ s.status === 'completed' ? 'Concluído' : (s.status === 'active' ? 'Ativo' : 'Cancelado') }}
                      </span>
                      <span class="history-time">{{ formatLocalTime(s.startedAt) }}</span>
                      <span class="history-dur font-mono">{{ s.durationMinutes }}m</span>
                    </div>
                    <button type="button" class="btn-view-history" matTooltip="Visualizar amostras desta sessão">
                      <mat-icon>visibility</mat-icon>
                    </button>
                  </div>
                }
              </div>
            </div>
          }
        }
      </div>

      <!-- Fixed Footer -->
      <div class="modal-footer">
        <button type="button" class="btn-cancel" (click)="fechar()">Fechar</button>
      </div>
    </div>
  `,
  styles: [`
    .modal-wrapper {
      display: flex;
      flex-direction: column;
      max-height: 90vh;
      width: 100%;
      min-width: 620px;
      max-width: 780px;
      background: var(--bg-surface, #ffffff);
      color: var(--text-primary, #0f172a);
      border-radius: 16px;
      overflow: hidden;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }

    .modal-header {
      flex-shrink: 0;
      position: sticky;
      top: 0;
      z-index: 10;
      padding: 18px 24px 14px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      border-bottom: 1px solid var(--border-color, #e2e8f0);
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, var(--bg-surface, #ffffff) 100%);
    }

    .header-main {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .header-icon-badge {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);

      &.recording-active {
        background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
        box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
      }

      mat-icon {
        font-size: 22px;
        width: 22px;
        height: 22px;
      }
    }

    .header-title-box h2 {
      margin: 0 0 2px 0;
      font-size: 17px;
      font-weight: 700;
      color: var(--text-primary, #0f172a);
    }

    .header-title-box p {
      margin: 0;
      font-size: 12.5px;
      color: var(--text-muted, #64748b);
    }

    .active-badge-sub {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #ef4444;
      font-weight: 600;
    }

    .pulse-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #ef4444;
      box-shadow: 0 0 6px #ef4444;
      animation: recPulse 1.8s infinite ease-in-out;
    }

    @keyframes recPulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.35; transform: scale(0.85); }
    }

    .close-btn {
      background: var(--bg-hover, #f1f5f9);
      border: none;
      width: 32px;
      height: 32px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--text-muted, #64748b);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

      mat-icon { font-size: 18px; width: 18px; height: 18px; }

      &:hover {
        background: #fee2e2;
        color: #ef4444;
        transform: rotate(90deg);
      }
    }

    .modal-body {
      flex: 1;
      padding: 18px 24px;
      overflow-y: auto;
      max-height: calc(90vh - 120px);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .loading-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px;
      gap: 12px;
      color: var(--text-muted);
    }

    .recording-card {
      background: linear-gradient(135deg, rgba(239, 68, 68, 0.04) 0%, rgba(99, 102, 241, 0.02) 100%);
      border: 1px solid rgba(239, 68, 68, 0.25);
      border-radius: 12px;
      padding: 16px 20px;
    }

    .recording-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 14px;
    }

    .rec-live-indicator {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.68rem;
      font-weight: 700;
      color: #ef4444;
      letter-spacing: 0.5px;
      margin-bottom: 3px;
    }

    .recording-title {
      margin: 0;
      font-size: 15px;
      font-weight: 700;
      color: var(--text-primary);
    }

    .btn-stop-rec {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 8px;
      background: #fee2e2;
      border: 1px solid #fecaca;
      color: #dc2626;
      font-size: 0.76rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s ease;

      mat-icon { font-size: 16px; width: 16px; height: 16px; }

      &:hover:not(:disabled) {
        background: #fecaca;
        transform: translateY(-1px);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    .recording-meta-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border-color);
    }

    .meta-item {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .meta-label {
      font-size: 0.68rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.4px;
      color: var(--text-muted);
    }

    .meta-val {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .stats-pills-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-top: 12px;
    }

    .stat-pill {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 8px 12px;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .stat-pill-label {
      font-size: 0.68rem;
      color: var(--text-muted);
      font-weight: 500;
    }

    .stat-pill-val {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-primary);
    }

    .form-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 16px 20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border-color);

      h3 {
        margin: 0;
        font-size: 14.5px;
        font-weight: 700;
        color: var(--text-primary);
        flex: 1;
      }
    }

    .section-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }
    .color-indigo { color: #6366f1; }
    .color-cyan { color: #0891b2; }
    .color-slate { color: #64748b; }
    .text-amber { color: #d97706 !important; }
    .text-purple { color: #7c3aed !important; }

    .config-desc {
      font-size: 0.82rem;
      color: var(--text-secondary);
      line-height: 1.5;
      margin: 0 0 16px 0;
    }

    .duration-selector {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
      margin-bottom: 16px;
    }

    .duration-pill {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      padding: 10px 8px;
      border-radius: 10px;
      background: var(--bg-page);
      border: 1px solid var(--border-color);
      cursor: pointer;
      transition: all 0.15s ease;

      .pill-title {
        font-size: 0.78rem;
        font-weight: 600;
        color: var(--text-primary);
      }

      .pill-sub {
        font-size: 0.68rem;
        color: var(--text-muted);
      }

      &:hover {
        background: var(--bg-hover);
        border-color: rgba(99, 102, 241, 0.35);
      }

      &.active {
        background: rgba(99, 102, 241, 0.1);
        border-color: #6366f1;
        .pill-title { color: #6366f1; }
        .pill-sub { color: #6366f1; font-weight: 500; }
      }
    }

    .custom-hours-box {
      background: var(--bg-page);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 12px 16px;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .custom-label {
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--text-secondary);
    }

    .custom-input-group {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .custom-input {
      width: 70px;
      height: 32px;
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 0 10px;
      font-size: 0.85rem;
      font-weight: 600;
      background: var(--bg-surface);
      color: var(--text-primary);
      text-align: center;
    }

    .custom-suffix {
      font-size: 0.78rem;
      color: var(--text-muted);
    }

    .action-start-row {
      display: flex;
      justify-content: flex-end;
    }

    .btn-start-rec {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 20px;
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      color: #ffffff;
      border: none;
      border-radius: 8px;
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.18s ease;
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);

      mat-icon { font-size: 18px; width: 18px; height: 18px; }

      &:hover:not(:disabled) {
        transform: translateY(-1px);
        box-shadow: 0 6px 16px rgba(99, 102, 241, 0.35);
      }

      &:disabled {
        opacity: 0.65;
        cursor: not-allowed;
      }
    }

    .metrics-table-wrapper {
      max-height: 220px;
      overflow-y: auto;
      border: 1px solid var(--border-color);
      border-radius: 8px;
    }

    .metrics-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.78rem;

      th {
        position: sticky;
        top: 0;
        background: var(--bg-hover);
        padding: 8px 12px;
        text-align: left;
        font-size: 0.68rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.4px;
        color: var(--text-muted);
        border-bottom: 1px solid var(--border-color);
      }

      td {
        padding: 8px 12px;
        border-bottom: 1px solid var(--border-color);
        color: var(--text-secondary);
      }

      tr:last-child td { border-bottom: none; }
      tr:hover td { background: var(--bg-hover); }
    }

    .cpu-data-cell {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .mini-bar-track {
      width: 50px;
      height: 4px;
      background: var(--bg-hover);
      border-radius: 2px;
      overflow: hidden;
    }

    .mini-bar-fill {
      height: 100%;
      background: #0891b2;
      border-radius: 2px;
      &.alert { background: #f59e0b; }
    }

    .btn-export-sm {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 10px;
      background: var(--bg-page);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      color: var(--text-secondary);
      font-size: 0.72rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s ease;

      mat-icon { font-size: 14px; width: 14px; height: 14px; }

      &:hover {
        background: var(--bg-hover);
        color: var(--accent);
      }
    }

    .history-list {
      display: flex;
      flex-direction: column;
      gap: 6px;
      max-height: 160px;
      overflow-y: auto;
    }

    .history-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      background: var(--bg-page);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.15s ease;

      &:hover, &.selected {
        background: var(--bg-hover);
        border-color: rgba(99, 102, 241, 0.4);
      }
    }

    .history-left {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.76rem;
    }

    .history-status {
      font-size: 0.65rem;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 10px;
      text-transform: uppercase;

      &.status--completed { background: rgba(16, 185, 129, 0.12); color: #10b981; }
      &.status--active    { background: rgba(239, 68, 68, 0.12); color: #ef4444; }
      &.status--cancelled { background: rgba(100, 116, 139, 0.1); color: #64748b; }
    }

    .history-time {
      color: var(--text-primary);
      font-weight: 500;
    }

    .history-dur {
      color: var(--text-muted);
      font-size: 0.72rem;
    }

    .btn-view-history {
      background: transparent;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      mat-icon { font-size: 16px; width: 16px; height: 16px; }
      &:hover { color: var(--accent); }
    }

    .modal-footer {
      flex-shrink: 0;
      position: sticky;
      bottom: 0;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 12px 24px;
      background: var(--bg-surface);
      border-top: 1px solid var(--border-color);
    }

    .btn-cancel {
      padding: 0 18px;
      height: 34px;
      border-radius: 8px;
      border: 1px solid var(--border-color);
      background: var(--bg-surface);
      color: var(--text-secondary);
      font-weight: 600;
      font-size: 0.78rem;
      cursor: pointer;
      transition: all 0.15s ease;

      &:hover {
        background: var(--bg-hover);
        color: var(--text-primary);
      }
    }

    .font-mono { font-family: 'JetBrains Mono', monospace; }
    .font-bold { font-weight: 600; }
    .text-muted { color: var(--text-muted); }
    .button-spinner { display: inline-block; }
  `]
})
export class ProcessMonitorModalComponent implements OnInit, OnDestroy {
  private pm2 = inject(Pm2Service);
  private toast = inject(ToastService);
  public dialogRef = inject(MatDialogRef<ProcessMonitorModalComponent>);
  private cdr = inject(ChangeDetectorRef);

  loading = signal(true);
  loadingIniciar = false;
  loadingParar = false;

  activeSession = signal<MonitoringSession | null>(null);
  metrics = signal<MonitoringMetricPoint[]>([]);
  historySessions = signal<MonitoringSession[]>([]);
  selectedHistoryId = signal<string | null>(null);

  selectedDuration = signal<number>(10); // 10 min por padrão
  isCustomDuration = signal<boolean>(false);
  customHours: number = 1;

  private pollInterval: any = null;

  avgCpu = computed(() => {
    const list = this.metrics();
    if (!list.length) return 0;
    const sum = list.reduce((acc, m) => acc + (m.cpu || 0), 0);
    return sum / list.length;
  });

  maxCpu = computed(() => {
    const list = this.metrics();
    if (!list.length) return 0;
    return Math.max(...list.map(m => m.cpu || 0));
  });

  avgMem = computed(() => {
    const list = this.metrics();
    if (!list.length) return 0;
    const sum = list.reduce((acc, m) => acc + (m.memory || 0), 0);
    return sum / list.length;
  });

  maxMem = computed(() => {
    const list = this.metrics();
    if (!list.length) return 0;
    return Math.max(...list.map(m => m.memory || 0));
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { process: Pm2Process }
  ) {}

  ngOnInit(): void {
    this.carregarDados();
    // Enquanto o modal estiver aberto, atualiza a cada 30 segundos os pontos gravados
    this.pollInterval = setInterval(() => {
      if (this.activeSession()) {
        this.atualizarPontos(this.activeSession()!.id, false);
      }
    }, 30000);
  }

  ngOnDestroy(): void {
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
    }
  }

  setPresetDuration(minutes: number): void {
    this.isCustomDuration.set(false);
    this.selectedDuration.set(minutes);
  }

  setCustomDurationMode(): void {
    this.isCustomDuration.set(true);
  }

  carregarDados(): void {
    this.loading.set(true);
    const procName = this.data.process.name;

    // 1. Carrega sessões ativas globais
    this.pm2.getActiveProcessMonitors().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          const found = res.data.find(s => s.processName === procName);
          if (found) {
            this.activeSession.set(found);
            this.atualizarPontos(found.id, true);
          } else {
            this.activeSession.set(null);
            this.loading.set(false);
          }
        } else {
          this.loading.set(false);
        }
        this.carregarHistorico();
      },
      error: () => {
        this.loading.set(false);
        this.carregarHistorico();
      }
    });
  }

  carregarHistorico(): void {
    this.pm2.getProcessMonitorHistory(this.data.process.name).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.historySessions.set(res.data);
        }
        this.cdr.markForCheck();
      }
    });
  }

  atualizarPontos(sessionId: string, initial = false): void {
    this.pm2.getProcessMonitorSession(sessionId).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.activeSession.set(res.data.session);
          this.metrics.set(res.data.metrics || []);
        }
        if (initial) this.loading.set(false);
        this.cdr.markForCheck();
      },
      error: () => {
        if (initial) this.loading.set(false);
        this.cdr.markForCheck();
      }
    });
  }

  iniciarMonitoramento(): void {
    if (this.loadingIniciar) return;

    let duration = this.selectedDuration();
    let hoursParam: number | undefined = undefined;

    if (this.isCustomDuration()) {
      if (!this.customHours || this.customHours <= 0) {
        this.toast.error('Informe um número válido de horas.');
        return;
      }
      duration = Math.round(this.customHours * 60);
      hoursParam = this.customHours;
    }

    this.loadingIniciar = true;

    this.pm2.startProcessMonitor({
      processId: this.data.process.id,
      processName: this.data.process.name,
      durationMinutes: duration,
      customHours: hoursParam
    })
    .pipe(finalize(() => {
      this.loadingIniciar = false;
      this.cdr.markForCheck();
    }))
    .subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.toast.success(`Monitoramento iniciado para ${this.data.process.name} (${duration}m).`);
          this.activeSession.set(res.data);
          this.atualizarPontos(res.data.id, false);
          this.carregarHistorico();
        } else {
          this.toast.error(res.error || 'Falha ao iniciar monitoramento.');
        }
      },
      error: (err) => {
        this.toast.error(err.error?.error || 'Erro ao conectar com servidor.');
      }
    });
  }

  pararMonitoramento(sessionId: string): void {
    if (this.loadingParar) return;
    this.loadingParar = true;

    this.pm2.stopProcessMonitor(sessionId)
      .pipe(finalize(() => {
        this.loadingParar = false;
        this.cdr.markForCheck();
      }))
      .subscribe({
        next: (res) => {
          if (res.success) {
            this.toast.success('Monitoramento encerrado.');
            this.activeSession.set(null);
            this.carregarHistorico();
          } else {
            this.toast.error(res.error || 'Falha ao parar monitoramento.');
          }
        },
        error: (err) => {
          this.toast.error(err.error?.error || 'Erro ao parar monitoramento.');
        }
      });
  }

  carregarSessaoHistorico(sessionId: string): void {
    this.selectedHistoryId.set(sessionId);
    this.pm2.getProcessMonitorSession(sessionId).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.metrics.set(res.data.metrics || []);
          this.cdr.markForCheck();
        }
      }
    });
  }

  exportarCSV(): void {
    const list = this.metrics();
    if (!list.length) return;

    let csv = 'ID,Processo,HorarioLocal,CPU_Percent,RAM_Bytes,RAM_Formatada\r\n';
    list.forEach(m => {
      csv += `${m.id},"${m.processName}",${m.capturedAt},${m.cpu},${m.memory},"${this.formatMemory(m.memory)}"\r\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `monitoramento_${this.data.process.name}_${new Date().getTime()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  formatLocalTime(isoStr: string | null | undefined): string {
    if (!isoStr) return '—';
    try {
      const parts = isoStr.split('T');
      if (parts.length === 2) {
        const [y, m, d] = parts[0].split('-');
        const [h, min] = parts[1].split(':');
        return `${d}/${m} ${h}:${min}`;
      }
    } catch (_) {}
    return isoStr;
  }

  formatMemory(bytes: number): string {
    if (!bytes) return '0 B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    if (bytes < 1073741824) return (bytes / 1048576).toFixed(1) + ' MB';
    return (bytes / 1073741824).toFixed(2) + ' GB';
  }

  fechar(): void {
    this.dialogRef.close();
  }
}


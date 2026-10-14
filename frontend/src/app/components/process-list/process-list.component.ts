import { Component, Input, Output, EventEmitter, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { Pm2Process } from '../../services/pm2.service';

@Component({
  selector: 'app-process-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatDividerModule
  ],
  template: `
    <div class="table-container">
      <div class="table-wrapper">

        <!-- ── List View Filter Bar ── -->
        <div class="list-filter-bar">
          <div class="filter-bar-left">
            <!-- Search input -->
            <div class="list-search-box">
              <mat-icon class="search-icon">search</mat-icon>
              <input
                type="text"
                placeholder="Filtrar nesta lista (nome, ID, PID...)"
                [ngModel]="searchQuery()"
                (ngModelChange)="searchQuery.set($event)"
                class="list-search-input"
              />
              @if (searchQuery()) {
                <button type="button" class="btn-clear-search" (click)="searchQuery.set('')" matTooltip="Limpar busca">
                  <mat-icon>close</mat-icon>
                </button>
              }
            </div>

            <!-- Status filter pills -->
            <div class="filter-pills-group">
              <button
                type="button"
                class="filter-pill-sm"
                [class.active]="statusFilter() === 'all'"
                (click)="statusFilter.set('all')"
              >
                Todos
              </button>
              <button
                type="button"
                class="filter-pill-sm pill--online"
                [class.active]="statusFilter() === 'online'"
                (click)="statusFilter.set('online')"
              >
                <span class="pill-dot online"></span> Online
              </button>
              <button
                type="button"
                class="filter-pill-sm pill--stopped"
                [class.active]="statusFilter() === 'stopped'"
                (click)="statusFilter.set('stopped')"
              >
                <span class="pill-dot stopped"></span> Parados
              </button>
              <button
                type="button"
                class="filter-pill-sm pill--errored"
                [class.active]="statusFilter() === 'errored'"
                (click)="statusFilter.set('errored')"
              >
                <span class="pill-dot errored"></span> Erros
              </button>
            </div>

            <!-- Mode filter pills -->
            <div class="filter-pills-group mode-group">
              <button
                type="button"
                class="filter-pill-sm"
                [class.active]="modeFilter() === 'all'"
                (click)="modeFilter.set('all')"
              >
                Modo: Todos
              </button>
              <button
                type="button"
                class="filter-pill-sm"
                [class.active]="modeFilter() === 'fork'"
                (click)="modeFilter.set('fork')"
              >
                Fork
              </button>
              <button
                type="button"
                class="filter-pill-sm"
                [class.active]="modeFilter() === 'cluster'"
                (click)="modeFilter.set('cluster')"
              >
                Cluster
              </button>
            </div>

            <!-- Rec Only filter -->
            <button
              type="button"
              class="filter-pill-sm pill--rec"
              [class.active]="recOnlyFilter()"
              (click)="recOnlyFilter.set(!recOnlyFilter())"
              matTooltip="Exibir somente processos com gravação periódica ativa"
            >
              <span class="rec-dot-pulse"></span>
              <span>Gravando (REC)</span>
            </button>
          </div>

          <div class="filter-bar-right">
            <span class="results-counter">
              <strong>{{ filteredProcesses().length }}</strong> de {{ processes.length }}
            </span>
            @if (hasActiveFilters()) {
              <button type="button" class="btn-reset-filters" (click)="resetFilters()" matTooltip="Redefinir filtros da lista">
                <mat-icon>filter_alt_off</mat-icon>
                <span>Limpar filtros</span>
              </button>
            }
          </div>
        </div>

        <table mat-table [dataSource]="filteredProcesses()" class="proc-table">

          <!-- ID -->
          <ng-container matColumnDef="id">
            <th mat-header-cell *matHeaderCellDef class="sortable-th" (click)="toggleSort('id')" matTooltip="Ordenar por ID">
              <div class="th-content">
                <span>ID</span>
                <mat-icon class="sort-icon" [class.active]="sortColumn() === 'id'">
                  {{ sortColumn() === 'id' ? (sortDirection() === 'asc' ? 'arrow_upward' : 'arrow_downward') : 'unfold_more' }}
                </mat-icon>
              </div>
            </th>
            <td mat-cell *matCellDef="let p">
              <span class="cell-id">#{{ p.id }}</span>
            </td>
          </ng-container>

          <!-- Name -->
          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef class="sortable-th" (click)="toggleSort('name')" matTooltip="Ordenar por nome da aplicação">
              <div class="th-content">
                <span>Aplicação</span>
                <mat-icon class="sort-icon" [class.active]="sortColumn() === 'name'">
                  {{ sortColumn() === 'name' ? (sortDirection() === 'asc' ? 'arrow_upward' : 'arrow_downward') : 'unfold_more' }}
                </mat-icon>
              </div>
            </th>
            <td mat-cell *matCellDef="let p">
              <div class="proc-name-cell">
                <span class="cell-name">{{ p.name }}</span>
                <span class="cell-mode-tag">{{ p.execMode }}</span>
                @if (isMonitored(p)) {
                  <span
                    class="list-rec-badge"
                    (click)="onMonitor.emit(p); $event.stopPropagation()"
                    matTooltip="Gravação de monitoramento ativa (Clique para detalhes)"
                  >
                    <span class="rec-dot-pulse"></span> REC
                  </span>
                }
              </div>
            </td>
          </ng-container>

          <!-- Status -->
          <ng-container matColumnDef="status">
            <th mat-header-cell *matHeaderCellDef class="sortable-th" (click)="toggleSort('status')" matTooltip="Ordenar por status">
              <div class="th-content">
                <span>Status</span>
                <mat-icon class="sort-icon" [class.active]="sortColumn() === 'status'">
                  {{ sortColumn() === 'status' ? (sortDirection() === 'asc' ? 'arrow_upward' : 'arrow_downward') : 'unfold_more' }}
                </mat-icon>
              </div>
            </th>
            <td mat-cell *matCellDef="let p">
              <span class="status-badge" [class]="'badge--' + p.status">
                <span class="status-dot"></span>
                <span>{{ p.status.toUpperCase() }}</span>
              </span>
            </td>
          </ng-container>

          <!-- CPU -->
          <ng-container matColumnDef="cpu">
            <th mat-header-cell *matHeaderCellDef class="sortable-th" (click)="toggleSort('cpu')" matTooltip="Ordenar por consumo de CPU">
              <div class="th-content">
                <span>CPU</span>
                <mat-icon class="sort-icon" [class.active]="sortColumn() === 'cpu'">
                  {{ sortColumn() === 'cpu' ? (sortDirection() === 'asc' ? 'arrow_upward' : 'arrow_downward') : 'unfold_more' }}
                </mat-icon>
              </div>
            </th>
            <td mat-cell *matCellDef="let p">
              <div class="metric-cell">
                <span class="metric-val" [class.alert]="p.cpu >= 70">{{ p.cpu }}%</span>
                <div class="mini-bar-track">
                  <div class="mini-bar-fill cpu" [style.width.%]="p.cpu > 100 ? 100 : p.cpu" [class.alert]="p.cpu >= 70"></div>
                </div>
              </div>
            </td>
          </ng-container>

          <!-- Memory -->
          <ng-container matColumnDef="memory">
            <th mat-header-cell *matHeaderCellDef class="sortable-th" (click)="toggleSort('memory')" matTooltip="Ordenar por memória RAM">
              <div class="th-content">
                <span>RAM</span>
                <mat-icon class="sort-icon" [class.active]="sortColumn() === 'memory'">
                  {{ sortColumn() === 'memory' ? (sortDirection() === 'asc' ? 'arrow_upward' : 'arrow_downward') : 'unfold_more' }}
                </mat-icon>
              </div>
            </th>
            <td mat-cell *matCellDef="let p">
              <span class="metric-ram">{{ formatMemory(p.memory) }}</span>
            </td>
          </ng-container>

          <!-- Restarts -->
          <ng-container matColumnDef="restarts">
            <th mat-header-cell *matHeaderCellDef class="sortable-th" (click)="toggleSort('restarts')" matTooltip="Ordenar por reinícios">
              <div class="th-content">
                <span>Restarts</span>
                <mat-icon class="sort-icon" [class.active]="sortColumn() === 'restarts'">
                  {{ sortColumn() === 'restarts' ? (sortDirection() === 'asc' ? 'arrow_upward' : 'arrow_downward') : 'unfold_more' }}
                </mat-icon>
              </div>
            </th>
            <td mat-cell *matCellDef="let p">
              <span class="restarts-badge" [class.warn]="p.restarts > 5">
                {{ p.restarts }}
              </span>
            </td>
          </ng-container>

          <!-- Uptime -->
          <ng-container matColumnDef="uptime">
            <th mat-header-cell *matHeaderCellDef class="sortable-th" (click)="toggleSort('uptime')" matTooltip="Ordenar por tempo em execução">
              <div class="th-content">
                <span>Uptime</span>
                <mat-icon class="sort-icon" [class.active]="sortColumn() === 'uptime'">
                  {{ sortColumn() === 'uptime' ? (sortDirection() === 'asc' ? 'arrow_upward' : 'arrow_downward') : 'unfold_more' }}
                </mat-icon>
              </div>
            </th>
            <td mat-cell *matCellDef="let p">
              <span class="uptime-text">{{ formatUptime(p.uptime) }}</span>
            </td>
          </ng-container>

          <!-- Mode / PID -->
          <ng-container matColumnDef="mode">
            <th mat-header-cell *matHeaderCellDef>PID</th>
            <td mat-cell *matCellDef="let p">
              <span class="pid-text">{{ p.pid || '—' }}</span>
            </td>
          </ng-container>

          <!-- Actions -->
          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef class="actions-header">Ações</th>
            <td mat-cell *matCellDef="let p">
              <div class="row-actions">
                @if (p.status === 'online') {
                  <button mat-icon-button (click)="onStop.emit(p)" matTooltip="Parar processo" class="action-btn action-btn--stop">
                    <mat-icon>stop</mat-icon>
                  </button>
                } @else {
                  <button mat-icon-button (click)="onStart.emit(p)" matTooltip="Iniciar processo" class="action-btn action-btn--start">
                    <mat-icon>play_arrow</mat-icon>
                  </button>
                }
                <button mat-icon-button (click)="onRestart.emit(p)" matTooltip="Reiniciar" class="action-btn">
                  <mat-icon>refresh</mat-icon>
                </button>
                <button mat-icon-button (click)="onLogs.emit(p)" matTooltip="Logs em tempo real" class="action-btn">
                  <mat-icon>description</mat-icon>
                </button>
                <button
                  mat-icon-button
                  (click)="onMonitor.emit(p)"
                  [matTooltip]="isMonitored(p) ? 'Gravação ativa a cada minuto (Clique para detalhes)' : 'Monitorar CPU e RAM minuto a minuto'"
                  class="action-btn"
                  [class.action-btn--rec]="isMonitored(p)"
                >
                  <mat-icon>{{ isMonitored(p) ? 'fiber_manual_record' : 'query_stats' }}</mat-icon>
                </button>
                <button mat-icon-button [matMenuTriggerFor]="menu" matTooltip="Mais opções" class="action-btn">
                  <mat-icon>more_vert</mat-icon>
                </button>
                <mat-menu #menu="matMenu">
                  <button mat-menu-item (click)="onMonitor.emit(p)">
                    <mat-icon>query_stats</mat-icon>
                    <span>Monitorar Recursos</span>
                  </button>
                  <button mat-menu-item (click)="onReload.emit(p)">
                    <mat-icon>autorenew</mat-icon>
                    <span>Reload (gracioso)</span>
                  </button>
                  <button mat-menu-item (click)="onDescribe.emit(p)">
                    <mat-icon>info</mat-icon>
                    <span>Detalhes do processo</span>
                  </button>
                  <mat-divider></mat-divider>
                  <button mat-menu-item (click)="onDelete.emit(p)" class="danger-item">
                    <mat-icon>delete</mat-icon>
                    <span>Remover processo</span>
                  </button>
                </mat-menu>
              </div>
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="columns"></tr>
          <tr mat-row *matRowDef="let row; columns: columns;" class="proc-row"></tr>
        </table>

        <!-- Empty state within table -->
        @if (filteredProcesses().length === 0) {
          <div class="list-empty-state">
            <mat-icon class="list-empty-icon">filter_alt_off</mat-icon>
            <p class="list-empty-title">Nenhum processo corresponde aos filtros da lista</p>
            <button type="button" class="btn-clear-list-filters" (click)="resetFilters()">
              <mat-icon>refresh</mat-icon>
              <span>Redefinir filtros</span>
            </button>
          </div>
        }

      </div>
    </div>
  `,
  styles: [`
    .table-container {
      width: 100%;
      overflow-x: auto;
      border-radius: 14px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
      margin-bottom: 24px;
    }

    .table-wrapper {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 14px;
      min-width: 860px;
    }

    // ── List Filter Bar ──────────────────────────────────────────────
    .list-filter-bar {
      padding: 12px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      border-bottom: 1px solid var(--border-color);
      background: var(--bg-page);
      border-top-left-radius: 14px;
      border-top-right-radius: 14px;
      flex-wrap: wrap;
    }

    .filter-bar-left {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .filter-bar-right {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-left: auto;
    }

    .list-search-box {
      display: flex;
      align-items: center;
      gap: 6px;
      height: 32px;
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 0 8px 0 10px;
      width: 220px;
      transition: all 0.2s ease;

      &:focus-within {
        border-color: var(--accent);
        box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);
        width: 240px;
      }

      .search-icon {
        font-size: 16px;
        width: 16px;
        height: 16px;
        color: var(--text-muted);
      }
    }

    .list-search-input {
      border: none;
      background: transparent;
      outline: none;
      font-size: 0.76rem;
      font-family: inherit;
      color: var(--text-primary);
      width: 100%;

      &::placeholder {
        color: var(--text-muted);
      }
    }

    .btn-clear-search {
      background: transparent;
      border: none;
      padding: 0;
      cursor: pointer;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      justify-content: center;

      mat-icon { font-size: 14px; width: 14px; height: 14px; }
      &:hover { color: var(--text-primary); }
    }

    .filter-pills-group {
      display: inline-flex;
      align-items: center;
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 2px;
      gap: 2px;
    }

    .filter-pill-sm {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      height: 26px;
      padding: 0 9px;
      border-radius: 6px;
      border: none;
      background: transparent;
      color: var(--text-secondary);
      font-size: 0.72rem;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.15s ease;
      white-space: nowrap;

      &:hover {
        background: var(--bg-hover);
        color: var(--text-primary);
      }

      &.active {
        background: var(--bg-hover);
        color: var(--accent);
        font-weight: 600;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
      }

      .pill-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        &.online  { background: #10b981; }
        &.stopped { background: #64748b; }
        &.errored { background: #ef4444; }
      }

      &.pill--rec {
        background: var(--bg-surface);
        border: 1px solid var(--border-color);
        color: var(--text-secondary);

        &:hover {
          border-color: rgba(239, 68, 68, 0.4);
          color: #ef4444;
        }

        &.active {
          background: rgba(239, 68, 68, 0.1);
          border-color: rgba(239, 68, 68, 0.4);
          color: #ef4444;
          font-weight: 600;
        }
      }
    }

    .rec-dot-pulse {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #ef4444;
      box-shadow: 0 0 6px #ef4444;
      animation: pulse 1.8s infinite;
    }

    .results-counter {
      font-size: 0.74rem;
      color: var(--text-muted);
      white-space: nowrap;

      strong {
        color: var(--text-primary);
      }
    }

    .btn-reset-filters {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      height: 26px;
      padding: 0 8px;
      border-radius: 6px;
      border: 1px solid var(--border-color);
      background: var(--bg-surface);
      color: var(--text-secondary);
      font-size: 0.72rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s ease;

      mat-icon { font-size: 14px; width: 14px; height: 14px; color: var(--accent); }

      &:hover {
        background: var(--bg-hover);
        color: var(--accent);
        border-color: var(--accent);
      }
    }

    // ── Table Styling ────────────────────────────────────────────────
    .proc-table {
      width: 100%;
      background: transparent;
      border-collapse: separate;
      border-spacing: 0;
    }

    th.mat-header-cell {
      font-size: 0.72rem;
      font-weight: 700;
      font-family: inherit;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.6px;
      background: var(--bg-surface);
      border-bottom: 1px solid var(--border-color);
      padding: 12px 16px;
      white-space: nowrap;
      user-select: none;

      &.sortable-th {
        cursor: pointer;
        transition: background-color 0.15s ease, color 0.15s ease;

        &:hover {
          background: var(--bg-hover);
          color: var(--text-primary);
        }
      }
    }

    .th-content {
      display: inline-flex;
      align-items: center;
      gap: 4px;

      .sort-icon {
        font-size: 15px;
        width: 15px;
        height: 15px;
        color: var(--text-muted);
        opacity: 0.5;
        transition: all 0.2s ease;

        &.active {
          opacity: 1;
          color: var(--accent);
        }
      }
    }

    th.actions-header {
      text-align: right;
      padding-right: 24px;
    }

    td.mat-cell {
      font-size: 0.85rem;
      font-family: inherit;
      color: var(--text-secondary);
      padding: 12px 16px;
      border-bottom: 1px solid var(--border-color);
      transition: background-color 0.15s ease;
    }

    .proc-row:last-child td {
      border-bottom: none;
    }

    .proc-row {
      transition: background-color 0.15s ease;
      &:hover td {
        background: var(--bg-hover);
      }
    }

    .cell-id {
      display: inline-block;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-muted);
      background: var(--bg-page);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 2px 7px;
    }

    .proc-name-cell {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .cell-name {
      font-weight: 600;
      font-size: 0.9rem;
      color: var(--text-primary);
      letter-spacing: -0.2px;
    }

    .cell-mode-tag {
      font-size: 0.68rem;
      font-weight: 500;
      padding: 1px 6px;
      background: var(--bg-page);
      border: 1px solid var(--border-color);
      border-radius: 4px;
      color: var(--text-muted);
      text-transform: uppercase;
    }

    .list-rec-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 0.65rem;
      font-weight: 700;
      padding: 1px 6px;
      border-radius: 10px;
      background: rgba(239, 68, 68, 0.12);
      border: 1px solid rgba(239, 68, 68, 0.3);
      color: #ef4444;
      cursor: pointer;
      transition: all 0.15s ease;

      &:hover {
        background: rgba(239, 68, 68, 0.2);
        transform: scale(1.05);
      }
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.7rem;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 20px;
      letter-spacing: 0.3px;
      white-space: nowrap;

      .status-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }

      &.badge--online {
        background: rgba(16, 185, 129, 0.12);
        color: #10b981;
        border: 1px solid rgba(16, 185, 129, 0.25);

        .status-dot {
          background: #10b981;
          box-shadow: 0 0 6px #10b981;
          animation: pulse 2s infinite;
        }
      }

      &.badge--stopped {
        background: rgba(100, 116, 139, 0.1);
        color: #64748b;
        border: 1px solid rgba(100, 116, 139, 0.2);

        .status-dot {
          background: #64748b;
        }
      }

      &.badge--errored {
        background: rgba(239, 68, 68, 0.12);
        color: #ef4444;
        border: 1px solid rgba(239, 68, 68, 0.25);

        .status-dot {
          background: #ef4444;
          box-shadow: 0 0 6px #ef4444;
        }
      }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.85); }
    }

    .metric-cell {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 60px;
    }

    .metric-val {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--text-primary);

      &.alert {
        color: #f59e0b;
      }
    }

    .mini-bar-track {
      width: 100%;
      max-width: 60px;
      height: 4px;
      background: var(--bg-page);
      border-radius: 2px;
      overflow: hidden;
    }

    .mini-bar-fill {
      height: 100%;
      border-radius: 2px;
      background: #06b6d4;
      transition: width 0.3s ease;

      &.alert {
        background: #f59e0b;
      }
    }

    .metric-ram {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .restarts-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      color: var(--text-secondary);

      &.warn {
        color: #ef4444;
        font-weight: 700;
      }
    }

    .uptime-text {
      font-size: 0.82rem;
      color: var(--text-secondary);
      white-space: nowrap;
    }

    .pid-text {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.78rem;
      color: var(--text-muted);
    }

    .row-actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 4px;
    }

    .action-btn {
      width: 32px;
      height: 32px;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      color: var(--text-secondary);
      transition: all 0.15s ease;

      mat-icon {
        font-size: 18px;
        width: 18px;
        height: 18px;
      }

      &:hover {
        background: var(--bg-hover);
        color: var(--accent);
      }

      &.action-btn--start {
        color: #10b981;
        &:hover {
          background: rgba(16, 185, 129, 0.12);
        }
      }

      &.action-btn--stop {
        color: #ef4444;
        &:hover {
          background: rgba(239, 68, 68, 0.12);
        }
      }

      &.action-btn--rec {
        color: #ef4444 !important;
        background: rgba(239, 68, 68, 0.1) !important;
        &:hover {
          background: rgba(239, 68, 68, 0.2) !important;
        }
        mat-icon {
          animation: pulse 1.8s infinite;
        }
      }
    }

    .list-empty-state {
      padding: 48px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      text-align: center;
      color: var(--text-muted);

      .list-empty-icon {
        font-size: 40px;
        width: 40px;
        height: 40px;
        opacity: 0.4;
      }

      .list-empty-title {
        font-size: 0.95rem;
        font-weight: 600;
        margin: 0;
      }

      .btn-clear-list-filters {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 14px;
        border-radius: 8px;
        border: 1px solid var(--border-color);
        background: var(--bg-surface);
        color: var(--text-primary);
        font-size: 0.78rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.15s ease;

        mat-icon { font-size: 16px; width: 16px; height: 16px; color: var(--accent); }

        &:hover {
          background: var(--bg-hover);
          border-color: var(--accent);
          color: var(--accent);
        }
      }
    }

    ::ng-deep .danger-item {
      color: #ef4444 !important;
      mat-icon { color: #ef4444 !important; }
    }

    ::ng-deep .mat-mdc-menu-item,
    ::ng-deep .mat-mdc-menu-item .mdc-list-item__primary-text {
      font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
      font-size: 0.85rem !important;
    }
  `]
})
export class ProcessListComponent {
  @Input() processes: Pm2Process[] = [];
  @Input() activeMonitors: any[] = [];
  @Output() onStart    = new EventEmitter<Pm2Process>();
  @Output() onStop     = new EventEmitter<Pm2Process>();
  @Output() onRestart  = new EventEmitter<Pm2Process>();
  @Output() onReload   = new EventEmitter<Pm2Process>();
  @Output() onDelete   = new EventEmitter<Pm2Process>();
  @Output() onLogs     = new EventEmitter<Pm2Process>();
  @Output() onDescribe = new EventEmitter<Pm2Process>();
  @Output() onMonitor  = new EventEmitter<Pm2Process>();

  columns = ['id', 'name', 'status', 'cpu', 'memory', 'restarts', 'uptime', 'mode', 'actions'];

  // List filter states
  searchQuery = signal<string>('');
  statusFilter = signal<string>('all');
  modeFilter = signal<string>('all');
  recOnlyFilter = signal<boolean>(false);

  // Sorting states
  sortColumn = signal<string>('id');
  sortDirection = signal<'asc' | 'desc'>('asc');

  hasActiveFilters = computed(() => {
    return !!this.searchQuery().trim() ||
      this.statusFilter() !== 'all' ||
      this.modeFilter() !== 'all' ||
      this.recOnlyFilter();
  });

  filteredProcesses = computed(() => {
    let list = this.processes || [];
    const q = this.searchQuery().trim().toLowerCase();
    const st = this.statusFilter();
    const md = this.modeFilter();
    const recOnly = this.recOnlyFilter();

    if (q) {
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        String(p.id).includes(q) ||
        String(p.pid).includes(q) ||
        (p.execPath && p.execPath.toLowerCase().includes(q))
      );
    }

    if (st !== 'all') {
      list = list.filter(p => p.status === st);
    }

    if (md !== 'all') {
      list = list.filter(p => p.execMode === md);
    }

    if (recOnly) {
      list = list.filter(p => this.isMonitored(p));
    }

    // Sort
    const col = this.sortColumn();
    const dir = this.sortDirection() === 'asc' ? 1 : -1;

    return [...list].sort((a, b) => {
      let diff = 0;
      switch (col) {
        case 'id':
          diff = Number(a.id) - Number(b.id);
          break;
        case 'name':
          diff = a.name.localeCompare(b.name);
          break;
        case 'status':
          diff = a.status.localeCompare(b.status);
          break;
        case 'cpu':
          diff = (a.cpu || 0) - (b.cpu || 0);
          break;
        case 'memory':
          diff = (a.memory || 0) - (b.memory || 0);
          break;
        case 'restarts':
          diff = (a.restarts || 0) - (b.restarts || 0);
          break;
        case 'uptime':
          diff = (a.uptime || 0) - (b.uptime || 0);
          break;
        default:
          diff = 0;
      }
      return diff * dir;
    });
  });

  toggleSort(col: string): void {
    if (this.sortColumn() === col) {
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortColumn.set(col);
      this.sortDirection.set('asc');
    }
  }

  resetFilters(): void {
    this.searchQuery.set('');
    this.statusFilter.set('all');
    this.modeFilter.set('all');
    this.recOnlyFilter.set(false);
  }

  isMonitored(p: Pm2Process): boolean {
    return this.activeMonitors?.some(m => m.processName === p.name || m.processId === p.id) ?? false;
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
    if (m > 0) return `${m}m`;
    return `${s}s`;
  }
}

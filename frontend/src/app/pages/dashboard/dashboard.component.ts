import {
  Component, OnInit, OnDestroy, signal, computed, inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';

import { Pm2Service, Pm2Process, SystemInfo, SystemMetrics, MonitoringSession } from '../../services/pm2.service';
import { ThemeService } from '../../services/theme.service';
import { ToastService } from '../../services/toast.service';
import { AuthService } from '../../services/auth.service';
import { ProcessCardComponent } from '../../components/process-card/process-card.component';
import { ProcessListComponent } from '../../components/process-list/process-list.component';
import { LaunchModalComponent } from '../../components/launch-modal/launch-modal.component';
import { LogDrawerComponent } from '../../components/log-drawer/log-drawer.component';
import { DescribeModalComponent } from '../../components/describe-modal/describe-modal.component';
import { ProcessMonitorModalComponent } from '../../components/process-monitor-modal/process-monitor-modal.component';
import { StartupModalComponent } from '../../components/startup-modal/startup-modal.component';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { ResourcePieChartComponent } from '../../components/resource-pie-chart/resource-pie-chart.component';
import { AliasModalComponent } from '../../components/alias-modal/alias-modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatBadgeModule,
    ProcessCardComponent,
    ProcessListComponent,
    LogDrawerComponent,
    ResourcePieChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  private pm2 = inject(Pm2Service);
  private toast = inject(ToastService);
  public theme = inject(ThemeService);
  public auth = inject(AuthService);
  private dialog = inject(MatDialog);

  // State
  processes = signal<Pm2Process[]>([]);
  systemInfo = signal<SystemInfo | null>(null);
  systemMetrics = signal<SystemMetrics | null>(null);
  activeMonitors = signal<MonitoringSession[]>([]);
  loading = signal(true);
  connected = signal(false);
  searchQuery = signal('');
  viewMode = signal<'cards' | 'list'>('cards');
  lastUpdated = signal<Date | null>(null);
  logDrawerOpen = signal(false);
  logDrawerProcessId = signal<number | string | null>(null);
  logDrawerProcessName = signal('');
  avatarError = signal(false);
  statusFilter = signal<'all' | 'online' | 'stopped' | 'errored'>('all');

  // Computed
  filtered = computed(() => {
    const q = this.searchQuery().toLowerCase();
    const sf = this.statusFilter();
    return this.processes().filter(p => {
      const matchQuery = !q ||
        p.name.toLowerCase().includes(q) ||
        (p.alias && p.alias.toLowerCase().includes(q)) ||
        String(p.id).includes(q) ||
        p.status.toLowerCase().includes(q);
      const matchStatus = sf === 'all' || p.status === sf;
      return matchQuery && matchStatus;
    });
  });

  countOnline  = computed(() => this.processes().filter(p => p.status === 'online').length);
  countStopped = computed(() => this.processes().filter(p => p.status === 'stopped').length);
  countErrored = computed(() => this.processes().filter(p => p.status === 'errored').length);
  countTotal   = computed(() => this.processes().length);

  private liveTelemetryTimer: any = null;
  private isFetchingTelemetry = false;
  private consecutiveErrors = 0;

  private onVisibilityChange = () => {
    if (document.hidden) {
      // Quando o usuário sai da aba, pausa o timer para poupar recursos do PC e do servidor
      this.stopLiveTelemetry();
    } else {
      // Ao retornar para a aba ativa, reativa imediatamente e garante renderização segundo a segundo
      if (this.auth.isAuthenticated()) {
        this.fetchTelemetry();
        this.loadActiveMonitors();
        this.startLiveTelemetry();
      }
    }
  };

  async ngOnInit(): Promise<void> {
    document.addEventListener('visibilitychange', this.onVisibilityChange);
    const isAuth = await this.auth.init();
    if (isAuth) {
      // Abre imediatamente com o monitoramento ativo e carrega a telemetria
      this.connected.set(true);
      this.fetchTelemetry();
      this.loadSystemInfo();
      this.loadActiveMonitors();
      this.startLiveTelemetry();
    } else {
      this.loading.set(false);
    }
  }

  ngOnDestroy(): void {
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
    this.stopLiveTelemetry();
  }

  private startLiveTelemetry(): void {
    if (this.liveTelemetryTimer) return;
    // Renderiza segundo a segundo (exatamente a cada 1000ms) sem atrasos
    this.liveTelemetryTimer = setInterval(() => {
      if (document.hidden || !this.auth.isAuthenticated()) return;
      this.fetchTelemetry();
    }, 1000);
  }

  private stopLiveTelemetry(): void {
    if (this.liveTelemetryTimer) {
      clearInterval(this.liveTelemetryTimer);
      this.liveTelemetryTimer = null;
    }
  }

  fetchTelemetry(): void {
    if (this.isFetchingTelemetry) return;
    this.isFetchingTelemetry = true;

    this.pm2.getProcesses().subscribe({
      next: res => {
        this.isFetchingTelemetry = false;
        this.consecutiveErrors = 0;
        if (res.success && res.data) {
          this.processes.set(res.data);
          if (res.metrics) {
            this.systemMetrics.set(res.metrics);
          }
          this.lastUpdated.set(new Date());
          this.connected.set(true);
        }
        this.loading.set(false);
      },
      error: () => {
        this.isFetchingTelemetry = false;
        this.consecutiveErrors++;
        // Se houver 3 falhas consecutivas (3 segundos sem resposta), indica desconexão
        if (this.consecutiveErrors >= 3) {
          this.connected.set(false);
        }
        this.loading.set(false);
      }
    });
  }

  openProcessMonitor(p: Pm2Process): void {
    const ref = this.dialog.open(ProcessMonitorModalComponent, {
      data: { process: p },
      width: '740px',
      maxWidth: '95vw',
      disableClose: true
    });
    ref.afterClosed().subscribe(() => {
      this.loadActiveMonitors();
    });
  }

  loadActiveMonitors(): void {
    if (!this.auth.isAuthenticated()) return;
    this.pm2.getActiveProcessMonitors().subscribe({
      next: res => {
        if (res.success && res.data) {
          this.activeMonitors.set(res.data);
        }
      }
    });
  }

  isProcessMonitored(p: Pm2Process): boolean {
    return this.activeMonitors().some(m => m.processName === p.name || m.processId === p.id);
  }

  handleLogout(): void {
    this.stopLiveTelemetry();
    this.processes.set([]);
    this.systemInfo.set(null);
    this.connected.set(false);
    this.auth.logout();
  }

  private loadSystemInfo(): void {
    if (!this.auth.isAuthenticated()) return;

    this.pm2.getSystemInfo().subscribe({
      next: res => {
        if (res.success && res.data) {
          this.systemInfo.set(res.data);
          if (res.data.metrics) {
            this.systemMetrics.set(res.data.metrics);
          }
        }
      },
      error: () => {}
    });
  }

  refreshNow(): void {
    this.fetchTelemetry();
  }

  // ── Actions ──
  onStart(p: Pm2Process): void {
    this.pm2.startProcess(p.id).subscribe({
      next: () => {
        this.toast.success(`✅ ${p.name} iniciado`);
        this.refreshNow();
      },
      error: () => this.toast.error(`Falha ao iniciar ${p.name}`)
    });
  }

  onStop(p: Pm2Process): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: { title: 'Parar processo', message: `Deseja parar "${p.name}"?`, danger: false }
    });
    ref.afterClosed().subscribe(ok => {
      if (!ok) return;
      this.pm2.stopProcess(p.id).subscribe({
        next: () => {
          this.toast.success(`⏹ ${p.name} parado`);
          this.refreshNow();
        },
        error: () => this.toast.error(`Falha ao parar ${p.name}`)
      });
    });
  }

  onRestart(p: Pm2Process): void {
    this.pm2.restartProcess(p.id).subscribe({
      next: () => {
        this.toast.success(`🔄 ${p.name} reiniciado`);
        this.refreshNow();
      },
      error: () => this.toast.error(`Falha ao reiniciar ${p.name}`)
    });
  }

  onReload(p: Pm2Process): void {
    this.pm2.reloadProcess(p.id).subscribe({
      next: () => {
        this.toast.success(`♻️ ${p.name} recarregado (gracioso)`);
        this.refreshNow();
      },
      error: () => this.toast.error(`Falha ao recarregar ${p.name}`)
    });
  }

  onDelete(p: Pm2Process): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: { title: 'Deletar processo', message: `Tem certeza que deseja remover "${p.name}" do PM2?`, danger: true }
    });
    ref.afterClosed().subscribe(ok => {
      if (!ok) return;
      this.pm2.deleteProcess(p.id).subscribe({
        next: () => {
          this.toast.success(`🗑 ${p.name} removido`);
          this.refreshNow();
        },
        error: () => this.toast.error(`Falha ao remover ${p.name}`)
      });
    });
  }

  onViewLogs(p: Pm2Process): void {
    this.logDrawerProcessId.set(p.id);
    this.logDrawerProcessName.set(p.name);
    this.logDrawerOpen.set(true);
  }

  onDescribe(p: Pm2Process): void {
    this.dialog.open(DescribeModalComponent, {
      data: { processId: p.id },
      width: '700px',
      maxWidth: '95vw'
    });
  }

  openAliasModal(p: Pm2Process): void {
    const ref = this.dialog.open(AliasModalComponent, {
      data: { process: p },
      width: '540px',
      maxWidth: '95vw',
      disableClose: true
    });

    ref.afterClosed().subscribe(res => {
      if (res?.updated) {
        this.processes.update(procs => procs.map(item => {
          if (item.name === p.name) {
            return { ...item, alias: res.alias !== undefined ? res.alias : item.alias };
          }
          return item;
        }));
        this.refreshNow();
      }
    });
  }

  closeLogDrawer(): void {
    this.logDrawerOpen.set(false);
    this.logDrawerProcessId.set(null);
  }

  openLaunch(): void {
    const ref = this.dialog.open(LaunchModalComponent, {
      width: '560px',
      maxWidth: '95vw'
    });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.pm2.launch(result).subscribe({
          next: res => {
            this.toast.success(res.message ?? 'Processo iniciado');
            this.refreshNow();
          },
          error: () => this.toast.error('Falha ao iniciar processo')
        });
      }
    });
  }

  openSave(): void {
    this.pm2.save().subscribe({
      next: res => this.toast.success(res.message ?? 'Estado salvo'),
      error: () => this.toast.error('Falha ao salvar estado')
    });
  }

  openFlush(): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: { title: 'Limpar Logs', message: 'Deseja limpar todos os logs do PM2? (pm2 flush)', danger: true }
    });
    ref.afterClosed().subscribe(ok => {
      if (!ok) return;
      this.pm2.flush().subscribe({
        next: res => {
          this.toast.success(res.message ?? 'Logs limpos');
          this.refreshNow();
        },
        error: () => this.toast.error('Falha ao limpar logs')
      });
    });
  }

  openStartup(): void {
    this.pm2.startup().subscribe({
      next: res => {
        this.dialog.open(StartupModalComponent, {
          data: { output: (res as any)['output'], isWindows: (res as any)['isWindows'] },
          width: '640px',
          maxWidth: '95vw'
        });
      },
      error: () => this.toast.error('Falha ao executar pm2 startup')
    });
  }

  setView(mode: 'cards' | 'list'): void {
    this.viewMode.set(mode);
  }

  setStatusFilter(status: 'all' | 'online' | 'stopped' | 'errored'): void {
    this.statusFilter.set(status);
  }

  clearFilters(): void {
    this.searchQuery.set('');
    this.statusFilter.set('all');
  }

  toggleTheme(): void {
    this.theme.toggle();
  }

  formatMemory(bytes: number): string {
    return this.formatBytes(bytes);
  }

  formatBytes(bytes: number | undefined | null): string {
    if (!bytes || bytes <= 0) return '0 B';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    if (bytes < 1073741824) return (bytes / 1048576).toFixed(1) + ' MB';
    return (bytes / 1073741824).toFixed(2) + ' GB';
  }

  getResourceLevel(percent: number): 'normal' | 'warning' | 'critical' {
    if (percent >= 90) return 'critical';
    if (percent >= 75) return 'warning';
    return 'normal';
  }
}

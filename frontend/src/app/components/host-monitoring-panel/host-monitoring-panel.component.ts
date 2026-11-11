import {
  Component,
  inject,
  computed,
  signal,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  HostMonitoringService,
  HostProcess,
  HostTriggerConfig,
  HistoricalSession,
  HistoricalSnapshot,
  SessionDetailsResponse,
  ProcessRanking
} from '../../services/host-monitoring.service';

export interface GroupedHostProcess {
  groupKey: string;
  displayName: string;
  processName: string;
  isPm2: boolean;
  totalCpu: number;
  totalRamMB: number;
  totalRamPercent: number;
  instancesCount: number;
  primaryPid: number;
  pids: number[];
  instances: HostProcess[];
}

export interface GroupedRankingItem {
  groupKey: string;
  displayName: string;
  rawName: string;
  isPm2: boolean;
  totalCpu: number;
  avgCpu: number;
  totalRamMB: number;
  avgRamMB: number;
  instancesCount: number;
  primaryPid: number;
  instances: {
    pid: number;
    displayName: string;
    rawName: string;
    isPm2: boolean;
    cpu: number;
    ramMB: number;
    avgCpu?: number;
    avgRamMB?: number;
    occurrences?: number;
  }[];
}

@Component({
  selector: 'app-host-monitoring-panel',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './host-monitoring-panel.component.html',
  styleUrls: ['./host-monitoring-panel.component.scss']
})
export class HostMonitoringPanelComponent implements OnInit, OnDestroy {
  private hostService = inject(HostMonitoringService);
  private cdr = inject(ChangeDetectorRef);

  readonly session = this.hostService.sessionStatus;
  readonly metrics = this.hostService.liveMetrics;

  activeTab: 'live' | 'history' = 'live';

  refreshing = signal<boolean>(false);
  filterQuery = '';
  filterOnlyPm2 = false;
  showTriggerModal = false;

  // Ordenação da tabela em tempo real
  liveSortColumn = signal<'cpu' | 'ram' | 'name' | 'pid'>('cpu');
  liveSortDirection = signal<'desc' | 'asc'>('desc');

  // Estado do Histórico usando Signal para reatividade imediata
  loadingHistory = signal<boolean>(false);
  historySessions = signal<HistoricalSession[]>([]);
  historyModeFilter = signal<'all' | 'auto_triggered' | 'manual_timed' | 'manual_infinite'>('all');
  selectedSessionDetails = signal<SessionDetailsResponse | null>(null);

  // Instância/snapshot específico selecionado pelo usuário no histórico
  selectedSnapshot = signal<HistoricalSnapshot | null>(null);

  // Controle de grupos expandidos (aplicações unificadas)
  expandedGroupKeys = signal<Set<string>>(new Set<string>());

  // Ordenação do Modal de Detalhes da Sessão
  detailsSortColumn = signal<'peakCpu' | 'avgCpu' | 'peakRam' | 'avgRam' | 'name' | 'pid'>('peakCpu');
  detailsSortDirection = signal<'desc' | 'asc'>('desc');

  tempConfig: HostTriggerConfig = {
    enabled: true,
    cpuThreshold: 90,
    ramThreshold: 90,
    durationMinutes: 10,
    cooldownMinutes: 15
  };

  private timerInterval: any = null;

  // ── Aplicações em Tempo Real UNIFICADAS por Nome com Instâncias Separadas ──
  readonly groupedLiveProcesses = computed<GroupedHostProcess[]>(() => {
    const list = this.metrics()?.processes || [];
    const query = this.filterQuery.trim().toLowerCase();
    const onlyPm2 = this.filterOnlyPm2;
    const sortCol = this.liveSortColumn();
    const isDesc = this.liveSortDirection() === 'desc';

    const map = new Map<string, GroupedHostProcess>();

    for (const p of list) {
      if (onlyPm2 && !p.isPm2) continue;

      const key = (p.displayName || p.processName).trim().toLowerCase();
      let group = map.get(key);

      if (!group) {
        group = {
          groupKey: key,
          displayName: p.displayName || p.processName,
          processName: p.processName,
          isPm2: p.isPm2,
          totalCpu: 0,
          totalRamMB: 0,
          totalRamPercent: 0,
          instancesCount: 0,
          primaryPid: p.pid,
          pids: [],
          instances: []
        };
        map.set(key, group);
      }

      group.totalCpu = parseFloat((group.totalCpu + p.cpuPercent).toFixed(1));
      group.totalRamMB = parseFloat((group.totalRamMB + p.memMB).toFixed(1));
      group.totalRamPercent = parseFloat((group.totalRamPercent + p.memPercent).toFixed(1));
      group.instancesCount += 1;
      group.pids.push(p.pid);
      if (p.isPm2) group.isPm2 = true;
      group.instances.push(p);
    }

    // Ordenar instâncias filhas de cada grupo pelo maior uso de CPU
    for (const group of map.values()) {
      group.instances.sort((a, b) => b.cpuPercent - a.cpuPercent || b.memMB - a.memMB);
      group.primaryPid = group.instances[0]?.pid || group.primaryPid;
    }

    let groups = Array.from(map.values());

    if (query) {
      groups = groups.filter(g => {
        const nameMatch = g.displayName.toLowerCase().includes(query) || g.processName.toLowerCase().includes(query);
        const pidMatch = g.pids.some(pid => String(pid).includes(query));
        const childMatch = g.instances.some(i => i.pm2Details?.name?.toLowerCase().includes(query));
        return nameMatch || pidMatch || childMatch;
      });
    }

    return groups.sort((a, b) => {
      let comp = 0;
      switch (sortCol) {
        case 'cpu':
          comp = a.totalCpu - b.totalCpu;
          break;
        case 'ram':
          comp = a.totalRamMB - b.totalRamMB;
          break;
        case 'name':
          comp = a.displayName.localeCompare(b.displayName);
          break;
        case 'pid':
          comp = a.primaryPid - b.primaryPid;
          break;
      }
      return isDesc ? -comp : comp;
    });
  });

  // Sessões históricas filtradas reativamente
  readonly filteredHistorySessions = computed(() => {
    const mode = this.historyModeFilter();
    const list = this.historySessions();
    if (mode === 'all') return list;
    return list.filter(s => s.mode === mode);
  });

  // ── Processos do Modal UNIFICADOS por Nome (Snapshot Específico OU Consolidado) ──
  readonly groupedModalProcesses = computed<GroupedRankingItem[]>(() => {
    const details = this.selectedSessionDetails();
    if (!details) return [];

    const selectedSnap = this.selectedSnapshot();
    const sortCol = this.detailsSortColumn();
    const isDesc = this.detailsSortDirection() === 'desc';

    const map = new Map<string, GroupedRankingItem>();

    if (selectedSnap) {
      // Amostra específica selecionada pelo clique no horário
      const procs = selectedSnap.topProcesses || [];
      for (const p of procs) {
        const key = (p.name || p.rawName).trim().toLowerCase();
        let group = map.get(key);
        if (!group) {
          group = {
            groupKey: key,
            displayName: p.name || p.rawName,
            rawName: p.rawName,
            isPm2: p.isPm2,
            totalCpu: 0,
            avgCpu: 0,
            totalRamMB: 0,
            avgRamMB: 0,
            instancesCount: 0,
            primaryPid: p.pid,
            instances: []
          };
          map.set(key, group);
        }
        group.totalCpu = parseFloat((group.totalCpu + (p.cpu || 0)).toFixed(1));
        group.totalRamMB = parseFloat((group.totalRamMB + (p.ramMB || 0)).toFixed(1));
        group.instancesCount += 1;
        if (p.isPm2) group.isPm2 = true;
        group.instances.push({
          pid: p.pid,
          displayName: p.name || p.rawName,
          rawName: p.rawName,
          isPm2: p.isPm2,
          cpu: p.cpu || 0,
          ramMB: p.ramMB || 0,
          avgCpu: p.cpu || 0,
          avgRamMB: p.ramMB || 0
        });
      }
      for (const group of map.values()) {
        group.avgCpu = parseFloat((group.totalCpu / group.instancesCount).toFixed(1));
        group.avgRamMB = parseFloat((group.totalRamMB / group.instancesCount).toFixed(1));
        group.instances.sort((a, b) => b.cpu - a.cpu);
        group.primaryPid = group.instances[0]?.pid || group.primaryPid;
      }
    } else {
      // Visão consolidada da sessão
      const rankings = details.processRankings || [];
      for (const r of rankings) {
        const key = (r.name || r.rawName).trim().toLowerCase();
        let group = map.get(key);
        if (!group) {
          group = {
            groupKey: key,
            displayName: r.name || r.rawName,
            rawName: r.rawName,
            isPm2: r.isPm2,
            totalCpu: 0,
            avgCpu: 0,
            totalRamMB: 0,
            avgRamMB: 0,
            instancesCount: 0,
            primaryPid: r.pid,
            instances: []
          };
          map.set(key, group);
        }
        group.totalCpu = parseFloat((group.totalCpu + (r.peakCpu || 0)).toFixed(1));
        group.totalRamMB = parseFloat((group.totalRamMB + (r.peakRamMB || 0)).toFixed(1));
        group.avgCpu = parseFloat((group.avgCpu + (r.avgCpu || 0)).toFixed(1));
        group.avgRamMB = parseFloat((group.avgRamMB + (r.avgRamMB || 0)).toFixed(1));
        group.instancesCount += 1;
        if (r.isPm2) group.isPm2 = true;
        group.instances.push({
          pid: r.pid,
          displayName: r.name || r.rawName,
          rawName: r.rawName,
          isPm2: r.isPm2,
          cpu: r.peakCpu,
          ramMB: r.peakRamMB,
          avgCpu: r.avgCpu,
          avgRamMB: r.avgRamMB,
          occurrences: r.occurrences
        });
      }
      for (const group of map.values()) {
        group.avgCpu = parseFloat((group.avgCpu / group.instancesCount).toFixed(1));
        group.avgRamMB = parseFloat((group.avgRamMB / group.instancesCount).toFixed(1));
        group.instances.sort((a, b) => b.cpu - a.cpu);
        group.primaryPid = group.instances[0]?.pid || group.primaryPid;
      }
    }

    const groups = Array.from(map.values());
    return groups.sort((a, b) => {
      let comp = 0;
      switch (sortCol) {
        case 'peakCpu':
          comp = a.totalCpu - b.totalCpu;
          break;
        case 'avgCpu':
          comp = a.avgCpu - b.avgCpu;
          break;
        case 'peakRam':
          comp = a.totalRamMB - b.totalRamMB;
          break;
        case 'avgRam':
          comp = a.avgRamMB - b.avgRamMB;
          break;
        case 'name':
          comp = a.displayName.localeCompare(b.displayName);
          break;
        case 'pid':
          comp = a.primaryPid - b.primaryPid;
          break;
      }
      return isDesc ? -comp : comp;
    });
  });

  ngOnInit(): void {
    const currCfg = this.session().triggerConfig;
    if (currCfg) {
      this.tempConfig = { ...currCfg };
    }

    if (!this.metrics()) {
      this.refreshSnapshot();
    }

    this.timerInterval = setInterval(() => {
      const s = this.session();
      if (s.active && s.remainingSeconds && s.remainingSeconds > 0) {
        this.hostService.sessionStatus.update(prev => ({
          ...prev,
          remainingSeconds: Math.max(0, (prev.remainingSeconds || 1) - 1)
        }));
      }
    }, 1000);

    // Carrega sessões históricas imediatamente
    this.loadHistorySessions();
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  // Alternância de Expansão de Grupos de Aplicações
  toggleGroupExpand(groupKey: string, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.expandedGroupKeys.update(set => {
      const next = new Set(set);
      if (next.has(groupKey)) {
        next.delete(groupKey);
      } else {
        next.add(groupKey);
      }
      return next;
    });
    this.cdr.detectChanges();
  }

  isGroupExpanded(groupKey: string): boolean {
    return this.expandedGroupKeys().has(groupKey);
  }

  // Seleção de Amostra/Snapshot Específico por Horário
  selectSnapshot(snap: HistoricalSnapshot | null): void {
    this.selectedSnapshot.set(snap);
    this.cdr.detectChanges();
  }

  // Alternância de Ordenação na Tabela de Tempo Real
  toggleLiveSort(col: 'cpu' | 'ram' | 'name' | 'pid'): void {
    if (this.liveSortColumn() === col) {
      this.liveSortDirection.update(d => d === 'desc' ? 'asc' : 'desc');
    } else {
      this.liveSortColumn.set(col);
      this.liveSortDirection.set('desc');
    }
    this.cdr.markForCheck();
  }

  // Alternância de Ordenação no Modal de Detalhes
  toggleDetailsSort(col: 'peakCpu' | 'avgCpu' | 'peakRam' | 'avgRam' | 'name' | 'pid'): void {
    if (this.detailsSortColumn() === col) {
      this.detailsSortDirection.update(d => d === 'desc' ? 'asc' : 'desc');
    } else {
      this.detailsSortColumn.set(col);
      this.detailsSortDirection.set('desc');
    }
    this.cdr.markForCheck();
  }

  openLiveTab(): void {
    this.activeTab = 'live';
    this.cdr.detectChanges();
  }

  openHistoryTab(): void {
    this.activeTab = 'history';
    this.cdr.detectChanges();
    this.loadHistorySessions();
  }

  loadHistorySessions(): void {
    this.loadingHistory.set(true);
    this.cdr.markForCheck();

    this.hostService.getHistorySessions(100).subscribe({
      next: (res) => {
        this.loadingHistory.set(false);
        if (res && Array.isArray(res.sessions)) {
          this.historySessions.set(res.sessions);
        }
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.loadingHistory.set(false);
        console.error('Erro ao carregar histórico de monitoramento:', err);
        this.cdr.detectChanges();
      }
    });
  }

  setHistoryFilter(filter: 'all' | 'auto_triggered' | 'manual_timed' | 'manual_infinite'): void {
    this.historyModeFilter.set(filter);
    this.cdr.markForCheck();
  }

  viewSessionDetails(session: HistoricalSession): void {
    this.hostService.getSessionDetails(session.id).subscribe({
      next: (res) => {
        if (res && res.success) {
          this.selectedSessionDetails.set(res);
          this.selectedSnapshot.set(null);
          this.cdr.detectChanges();
        }
      },
      error: (err) => {
        console.error('Erro ao carregar detalhes da sessão:', err);
      }
    });
  }

  deleteSession(session: HistoricalSession): void {
    if (!confirm(`Deseja excluir a sessão de monitoramento de ${this.formatDateTime(session.startedAt)}?`)) {
      return;
    }
    this.hostService.deleteHistorySession(session.id).subscribe({
      next: () => {
        this.historySessions.update(list => list.filter(s => s.id !== session.id));
        if (this.selectedSessionDetails()?.session?.id === session.id) {
          this.selectedSessionDetails.set(null);
        }
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erro ao excluir sessão:', err)
    });
  }

  confirmClearHistory(): void {
    if (!confirm('Deseja realmente limpar todo o histórico de monitoramentos?')) {
      return;
    }
    this.hostService.clearAllHistory().subscribe({
      next: () => {
        this.historySessions.set([]);
        this.selectedSessionDetails.set(null);
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erro ao limpar histórico:', err)
    });
  }

  exportSessionCsv(): void {
    const details = this.selectedSessionDetails();
    if (!details) return;
    const { session, processRankings } = details;

    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += `Relatorio de Monitoramento - Host Windows\n`;
    csvContent += `Sessao ID;${session.id}\n`;
    csvContent += `Inicio;${session.startedAt}\n`;
    csvContent += `Termino;${session.endsAt || 'N/A'}\n`;
    csvContent += `Modo;${session.mode}\n`;
    csvContent += `Pico CPU (%);${session.peakCpu}%\n`;
    csvContent += `Pico RAM (%);${session.peakRam}%\n\n`;

    csvContent += `RANKING DE CONSUMO INDIVIDUAL POR PROCESSO\n`;
    csvContent += `PID;Nome;Tipo;Pico CPU (%);Media CPU (%);Pico RAM (MB);Media RAM (MB);Ocorrencias\n`;

    for (const pr of processRankings) {
      csvContent += `${pr.pid};"${pr.name}";${pr.isPm2 ? 'PM2' : 'Windows'};${pr.peakCpu};${pr.avgCpu};${pr.peakRamMB};${pr.avgRamMB};${pr.occurrences}\n`;
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `monitoramento_${session.id}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  startMonitoring(mode: 'manual_infinite' | 'manual_timed', durationMinutes?: number): void {
    this.hostService.startSession(mode, durationMinutes).subscribe({
      next: (res) => {
        if (res?.session) {
          this.hostService.sessionStatus.set(res.session);
          this.activeTab = 'live';
          this.cdr.detectChanges();
        }
      },
      error: (err) => console.error('Erro ao iniciar monitoramento:', err)
    });
  }

  stopMonitoring(): void {
    this.hostService.stopSession().subscribe({
      next: (res) => {
        if (res?.session) {
          this.hostService.sessionStatus.set(res.session);
        }
        this.loadHistorySessions();
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erro ao parar monitoramento:', err)
    });
  }

  refreshSnapshot(): void {
    this.refreshing.set(true);
    this.cdr.markForCheck();

    this.hostService.fetchSnapshot(40).subscribe({
      next: (res) => {
        this.refreshing.set(false);
        if (res?.data) {
          this.hostService.liveMetrics.set(res.data);
        }
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.refreshing.set(false);
        console.error('Erro ao atualizar snapshot do host:', err);
        this.cdr.detectChanges();
      }
    });
  }

  toggleTriggerModal(): void {
    this.showTriggerModal = !this.showTriggerModal;
    if (this.showTriggerModal && this.session().triggerConfig) {
      this.tempConfig = { ...this.session().triggerConfig };
    }
    this.cdr.markForCheck();
  }

  saveTriggerConfig(): void {
    this.hostService.updateTriggerConfig(this.tempConfig).subscribe({
      next: (res) => {
        if (res?.config) {
          this.hostService.sessionStatus.update(prev => ({
            ...prev,
            triggerConfig: res.config
          }));
        }
        this.showTriggerModal = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao salvar configuração do gatilho:', err);
      }
    });
  }

  formatRemaining(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  formatDateTime(isoStr?: string | null): string {
    if (!isoStr) return '--';
    try {
      const d = new Date(isoStr);
      return d.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    } catch {
      return isoStr;
    }
  }

  formatTimeOnly(isoStr?: string | null): string {
    if (!isoStr) return '';
    try {
      const d = new Date(isoStr);
      return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    } catch {
      return '';
    }
  }

  calculateDuration(start?: string | null, end?: string | null): string {
    if (!start) return '--';
    const s = new Date(start).getTime();
    const e = end ? new Date(end).getTime() : Date.now();
    const diffSec = Math.max(0, Math.round((e - s) / 1000));
    const mins = Math.floor(diffSec / 60);
    const secs = diffSec % 60;
    return `${mins}m ${secs}s`;
  }
}

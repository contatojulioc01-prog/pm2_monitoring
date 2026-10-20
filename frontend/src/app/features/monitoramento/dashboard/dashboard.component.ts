import { Component, OnInit, ChangeDetectorRef, ViewChild, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { timeout, finalize } from 'rxjs';
import { DashboardService } from './dashboard.service';
import { MonitoramentoService } from '../monitoramento.service';
import { Monitor, Heartbeat, Incident } from '../services/socket.service';
import { ClipboardService } from '../services/clipboard.service';
import { MonitorFormService } from '../monitor-form/monitor-form.service';
import { MonitorFormComponent } from '../monitor-form/monitor-form.component';
import { ToastService } from '../../../services/toast.service';
import { ConfirmDialogComponent } from '../../../components/confirm-dialog/confirm-dialog.component';

export interface MonitorGroupView {
  name: string;
  total: number;
  up: number;
  down: number;
  pending: number;
  maintenance: number;
  monitors: Monitor[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    MonitorFormComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('contextMenuTrigger') contextMenuTrigger!: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };
  selectedContextMonitor: Monitor | null = null;

  modalMonitorAberto = false;
  editMonitorId: number | null = null;

  monitores = computed(() => this.dashboardService.obterMonitores());
  totalCount = computed(() => this.monitores().length);
  upCount = computed(() => this.monitores().filter(m => m.status === 1).length);
  downCount = computed(() => this.monitores().filter(m => m.status === 0).length);
  pendingCount = computed(() => this.monitores().filter(m => m.status === 2).length);
  maintenanceCount = computed(() => this.monitores().filter(m => m.status === 3).length);
  activeIncidents = computed(() => this.dashboardService.obterIncidentes());

  selectedGroupFilter = signal<string>('all');
  collapsedGroups = signal<Record<string, boolean>>({});

  gruposDisponiveis = computed(() => {
    const list = this.monitores();
    const set = new Set<string>();
    list.forEach(m => {
      const g = m.group_name && m.group_name.trim() ? m.group_name.trim() : 'Geral';
      set.add(g);
    });
    return Array.from(set).sort((a, b) => {
      if (a === 'Geral') return 1;
      if (b === 'Geral') return -1;
      return a.localeCompare(b);
    });
  });

  gruposAgrupados = computed(() => {
    const list = this.monitores();
    const filter = this.selectedGroupFilter();
    const map: Record<string, MonitorGroupView> = {};

    for (const m of list) {
      const gName = m.group_name && m.group_name.trim() ? m.group_name.trim() : 'Geral';
      if (filter !== 'all' && gName !== filter) continue;

      if (!map[gName]) {
        map[gName] = {
          name: gName,
          total: 0,
          up: 0,
          down: 0,
          pending: 0,
          maintenance: 0,
          monitors: []
        };
      }
      map[gName].total++;
      if (m.status === 1) map[gName].up++;
      else if (m.status === 0) map[gName].down++;
      else if (m.status === 2) map[gName].pending++;
      else if (m.status === 3) map[gName].maintenance++;

      map[gName].monitors.push(m);
    }

    return Object.values(map).sort((a, b) => {
      if (a.name === 'Geral') return 1;
      if (b.name === 'Geral') return -1;
      return a.name.localeCompare(b.name);
    });
  });

  overallUptime = computed(() => {
    const total = this.totalCount();
    if (total === 0) return 100.0;
    const up = this.upCount();
    return Math.round((up / total) * 1000) / 10;
  });

  constructor(
    public dashboardService: DashboardService,
    private monitoramentoService: MonitoramentoService,
    private monitorFormService: MonitorFormService,
    private toast: ToastService,
    private clipboard: ClipboardService,
    private dialog: MatDialog,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dashboardService.socketService.connect();
    this.carregarDadosIniciais();
    this.cdr.detectChanges();
  }

  carregarDadosIniciais(): void {
    this.monitoramentoService.listarMonitores().subscribe({
      next: (list) => {
        if (list && list.length > 0) {
          this.dashboardService.socketService.monitors.set(list);
          this.cdr.detectChanges();
        }
      },
      error: (err) => console.warn('Aviso ao listar monitores no dashboard:', err)
    });

    this.monitoramentoService.obterResumoBatimentos().subscribe({
      next: (map) => {
        if (map && Object.keys(map).length > 0) {
          this.dashboardService.socketService.heartbeats.update(current => ({
            ...map,
            ...current
          }));
          this.cdr.detectChanges();
        }
      },
      error: (err) => console.warn('Aviso ao carregar batimentos recentes via HTTP:', err)
    });
  }

  getBeats(monitorId: number): Heartbeat[] {
    const map = this.dashboardService.socketService.heartbeats();
    if (!map) return [];
    return (map as any)[monitorId] || (map as any)[String(monitorId)] || [];
  }

  getMonitorName(monitorId: number): string {
    const m = this.monitores().find(x => x.id === monitorId);
    return m ? m.name : `Monitor #${monitorId}`;
  }

  setGroupFilter(group: string): void {
    this.selectedGroupFilter.set(group);
    this.cdr.detectChanges();
  }

  toggleGroupCollapse(groupName: string): void {
    this.collapsedGroups.update(cur => ({
      ...cur,
      [groupName]: !cur[groupName]
    }));
    this.cdr.detectChanges();
  }

  isGroupCollapsed(groupName: string): boolean {
    return !!this.collapsedGroups()[groupName];
  }

  getGroupIcon(groupName: string): string {
    const lower = groupName.toLowerCase();
    if (lower.includes('mail') || lower.includes('email') || lower.includes('smtp')) return 'mail';
    if (lower.includes('ping') || lower.includes('icmp') || lower.includes('servidor') || lower.includes('infra')) return 'router';
    if (lower.includes('api') || lower.includes('web') || lower.includes('http') || lower.includes('site')) return 'language';
    if (lower.includes('banco') || lower.includes('db') || lower.includes('sql') || lower.includes('postgres')) return 'storage';
    if (lower.includes('push') || lower.includes('script') || lower.includes('cron') || lower.includes('tarefa')) return 'schedule';
    return 'folder_special';
  }

  // ── Interação com o Botão Direito (Context Menu) ──
  onContextMenu(event: MouseEvent, monitor: Monitor): void {
    event.preventDefault();
    event.stopPropagation();
    this.selectedContextMonitor = monitor;
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.cdr.detectChanges();
    if (this.contextMenuTrigger) {
      this.contextMenuTrigger.menuData = { monitor };
      this.contextMenuTrigger.openMenu();
    }
  }

  irParaDetalhes(monitor: Monitor): void {
    if (!monitor?.id) return;
    this.router.navigate(['/monitoramento/monitors', monitor.id]);
  }

  abrirModalEditar(monitor: Monitor): void {
    if (!monitor?.id) return;
    this.editMonitorId = monitor.id;
    this.modalMonitorAberto = true;
    this.cdr.detectChanges();
  }

  fecharModalMonitor(salvou?: any): void {
    this.modalMonitorAberto = false;
    this.editMonitorId = null;
    this.cdr.detectChanges();
    if (salvou) {
      this.monitoramentoService.listarMonitores().subscribe({
        next: (list) => {
          if (list) {
            this.dashboardService.socketService.monitors.set(list);
            this.cdr.detectChanges();
          }
        }
      });
    }
  }

  togglePausa(monitor: Monitor): void {
    if (!monitor?.id) return;
    const isAtivo = Boolean(monitor.active);
    const req$ = isAtivo
      ? this.monitoramentoService.pausar(monitor.id)
      : this.monitoramentoService.retomar(monitor.id);

    req$.pipe(
      timeout(15000),
      finalize(() => this.cdr.detectChanges())
    ).subscribe({
      next: () => {
        if (isAtivo) {
          this.toast.info(`Monitor "${monitor.name}" foi pausado.`);
        } else {
          this.toast.success(`Monitor "${monitor.name}" foi retomado.`);
        }
        const currentList = this.dashboardService.socketService.monitors();
        const updated = currentList.map(m => m.id === monitor.id ? { ...m, active: !isAtivo } : m);
        this.dashboardService.socketService.monitors.set(updated);
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.toast.error('Erro ao alterar estado do monitor: ' + (err.error?.error || err.message));
        this.cdr.detectChanges();
      }
    });
  }

  testarMonitor(monitor: Monitor): void {
    if (!monitor) return;
    this.toast.info(`Testando conectividade de "${monitor.name}"...`);
    this.monitorFormService.testarSonda(monitor).pipe(
      timeout(15000),
      finalize(() => this.cdr.detectChanges())
    ).subscribe({
      next: (res) => {
        if (res.up) {
          const pingStr = res.ping_ms ? ` (${res.ping_ms}ms)` : '';
          const codeStr = res.status_code ? ` [HTTP ${res.status_code}]` : '';
          this.toast.success(`✅ ${monitor.name} está UP${pingStr}${codeStr}!`);
        } else {
          this.toast.error(`❌ ${monitor.name} está DOWN: ${res.msg || 'Sem resposta do host'}`);
        }
      },
      error: (err) => {
        this.toast.error('Falha ao testar monitor: ' + (err.error?.error || err.message));
      }
    });
  }

  async copiarEndereco(monitor: Monitor): Promise<void> {
    const endereco = monitor?.url || monitor?.hostname || '';
    if (!endereco) {
      this.toast.warning('Este monitor não possui endereço configurado.');
      return;
    }
    const copiou = await this.clipboard.copy(endereco);
    if (copiou) {
      this.toast.success(`Endereço "${endereco}" copiado!`);
    } else {
      this.toast.error('Não foi possível copiar o endereço.');
    }
  }

  excluirMonitor(monitor: Monitor): void {
    if (!monitor?.id) return;
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Excluir Monitor',
        message: `Deseja realmente excluir o monitor "${monitor.name}"? Todo o histórico de batimentos e incidentes será perdido.`,
        danger: true
      }
    });

    ref.afterClosed().subscribe(confirmado => {
      if (!confirmado) return;
      this.monitoramentoService.excluir(monitor.id).pipe(
        timeout(15000),
        finalize(() => this.cdr.detectChanges())
      ).subscribe({
        next: () => {
          this.toast.success(`Monitor "${monitor.name}" excluído com sucesso!`);
          const currentList = this.dashboardService.socketService.monitors();
          this.dashboardService.socketService.monitors.set(currentList.filter(m => m.id !== monitor.id));
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.toast.error('Erro ao excluir monitor: ' + (err.error?.error || err.message));
        }
      });
    });
  }
}

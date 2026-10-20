import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { timeout, finalize } from 'rxjs';
import { MonitoramentoService } from './monitoramento.service';
import { Monitor, CustomGroup } from './services/socket.service';
import { ClipboardService } from './services/clipboard.service';
import { MonitorFormService } from './monitor-form/monitor-form.service';
import { MonitorFormComponent } from './monitor-form/monitor-form.component';
import { GroupFormService } from './group-form/group-form.service';
import { GroupFormComponent } from './group-form/group-form.component';
import { ToastService } from '../../services/toast.service';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

export interface GroupSection {
  group: CustomGroup;
  monitors: Monitor[];
}

@Component({
  selector: 'app-monitoramento',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    DragDropModule,
    MonitorFormComponent,
    GroupFormComponent
  ],
  templateUrl: './monitoramento.component.html',
  styleUrls: ['./monitoramento.component.css']
})
export class MonitoramentoComponent implements OnInit, OnDestroy {
  @ViewChild('contextMenuTrigger') contextMenuTrigger!: MatMenuTrigger;

  private fallbackTimer: any = null;

  searchQuery = signal<string>('');
  selectedFilter = signal<'all' | 'up' | 'down' | 'pending' | 'maintenance'>('all');
  selectedGroup = signal<string>('all');

  modalMonitorAberto = false;
  editMonitorId: number | null = null;

  modalGrupoAberto = false;
  editGroup: CustomGroup | null = null;

  gruposRecolhidos = signal<Set<string>>(new Set<string>());

  contextMenuPosition = { x: '0px', y: '0px' };
  selectedContextMonitor: Monitor | null = null;

  // Estado local desacoplado para Drag & Drop estável
  gruposLocais: GroupSection[] = [];
  semGrupoLocais: Monitor[] = [];
  isDragging = false;

  monitors = computed(() => this.monitoramentoService.socketService.monitors());
  customGroups = computed(() => this.monitoramentoService.socketService.customGroups());

  totalCount = computed(() => this.monitors().length);
  upCount = computed(() => this.monitors().filter(m => m.status === 1).length);
  downCount = computed(() => this.monitors().filter(m => m.status === 0).length);
  pendingCount = computed(() => this.monitors().filter(m => m.status === 2).length);
  maintenanceCount = computed(() => this.monitors().filter(m => m.status === 3).length);

  gruposDisponiveis = computed(() => {
    const list = this.monitors();
    const map: Record<string, number> = {};
    list.forEach(m => {
      const g = m.group_name && m.group_name.trim() ? m.group_name.trim() : 'Geral';
      map[g] = (map[g] || 0) + 1;
    });
    return Object.entries(map).map(([name, count]) => ({ name, count })).sort((a, b) => {
      if (a.name === 'Geral') return 1;
      if (b.name === 'Geral') return -1;
      return a.name.localeCompare(b.name);
    });
  });

  monitoresFiltrados = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const filter = this.selectedFilter();
    const group = this.selectedGroup();

    return this.monitors().filter(m => {
      const matchesSearch = !query ||
        m.name.toLowerCase().includes(query) ||
        (m.url && m.url.toLowerCase().includes(query)) ||
        (m.hostname && m.hostname.toLowerCase().includes(query));
      if (!matchesSearch) return false;

      if (filter === 'up' && m.status !== 1) return false;
      if (filter === 'down' && m.status !== 0) return false;
      if (filter === 'pending' && m.status !== 2) return false;
      if (filter === 'maintenance' && m.status !== 3) return false;

      if (group !== 'all') {
        const g = m.group_name && m.group_name.trim() ? m.group_name.trim() : 'Geral';
        if (g !== group) return false;
      }

      return true;
    });
  });

  get monitorDropListIds(): string[] {
    const ids = this.gruposLocais.map(g => 'group-drop-' + this.sanitizarId(g.group.name));
    ids.push('group-drop-geral');
    return ids;
  }

  sanitizarId(name: string): string {
    return (name || 'sem-nome').toLowerCase().replace(/[^a-z0-9]/g, '-');
  }

  onDragStarted(): void {
    this.isDragging = true;
  }

  onDragEnded(): void {
    setTimeout(() => {
      this.isDragging = false;
    }, 150);
  }

  trackByGroupId(index: number, sec: GroupSection): string | number {
    return sec.group.id || sec.group.name;
  }

  trackByMonitorId(index: number, monitor: Monitor): number {
    return monitor.id;
  }

  isMonitorAtivo(monitorId: number): boolean {
    return this.router.url.includes(`/monitors/${monitorId}`);
  }

  constructor(
    public monitoramentoService: MonitoramentoService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private dialog: MatDialog,
    private toast: ToastService,
    private clipboard: ClipboardService,
    private monitorFormService: MonitorFormService,
    private groupFormService: GroupFormService
  ) {
    effect(() => {
      // Reage a alterações nos dados do socket ou filtros
      this.monitors();
      this.customGroups();
      this.searchQuery();
      this.selectedFilter();
      this.selectedGroup();
      this.sincronizarListas();
    });
  }

  sincronizarListas(): void {
    if (this.isDragging) return;

    const configuredGroups = this.customGroups();
    const filtered = this.monitoresFiltrados();

    const map = new Map<string, Monitor[]>();
    const semGrupo: Monitor[] = [];

    filtered.forEach(m => {
      const gName = m.group_name && m.group_name.trim();
      if (gName) {
        const key = gName.toLowerCase();
        if (!map.has(key)) {
          map.set(key, []);
        }
        map.get(key)!.push(m);
      } else {
        semGrupo.push(m);
      }
    });

    const secoes: GroupSection[] = configuredGroups.map(cg => ({
      group: cg,
      monitors: map.get(cg.name.toLowerCase()) || []
    }));

    // Detecta grupos que existem nos monitores mas ainda não na tabela de custom_groups
    map.forEach((monList, lowerName) => {
      const jaExiste = configuredGroups.some(cg => cg.name.toLowerCase() === lowerName);
      if (!jaExiste && monList.length > 0) {
        const originalName = monList[0].group_name || lowerName;
        secoes.push({
          group: { id: 0, name: originalName, icon: 'folder', order_index: 999 },
          monitors: monList
        });
      }
    });

    this.gruposLocais = secoes;
    this.semGrupoLocais = semGrupo;
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.monitoramentoService.iniciarSocket();
    this.carregarGrupos();
    this.carregarDadosIniciais();

    // Fallback de polling para garantir renderização contínua caso o socket esteja reconectando
    this.fallbackTimer = setInterval(() => {
      if (!this.monitoramentoService.socketService.connected()) {
        this.carregarDadosIniciais();
      }
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.fallbackTimer) {
      clearInterval(this.fallbackTimer);
      this.fallbackTimer = null;
    }
  }

  carregarDadosIniciais(): void {
    this.monitoramentoService.listarMonitores().subscribe({
      next: (list) => {
        if (list && list.length > 0) {
          this.monitoramentoService.socketService.monitors.set(list);
          this.cdr.detectChanges();
        }
      },
      error: (err) => console.warn('Erro ao listar monitores inicialmente:', err)
    });

    this.monitoramentoService.obterResumoBatimentos().subscribe({
      next: (map) => {
        if (map && Object.keys(map).length > 0) {
          this.monitoramentoService.socketService.heartbeats.update(current => ({
            ...map,
            ...current
          }));
          this.cdr.detectChanges();
        }
      },
      error: (err) => console.warn('Erro ao carregar batimentos iniciais:', err)
    });
  }

  carregarGrupos(): void {
    this.groupFormService.listarGrupos().subscribe({
      next: (list) => {
        if (list) {
          this.monitoramentoService.socketService.customGroups.set(list);
          this.cdr.detectChanges();
        }
      },
      error: (err) => console.warn('Erro ao listar grupos personalizados:', err)
    });
  }

  setFilter(filter: 'all' | 'up' | 'down' | 'pending' | 'maintenance'): void {
    this.selectedFilter.set(filter);
    this.cdr.detectChanges();
  }

  setGroupFilter(group: string): void {
    this.selectedGroup.set(group);
    this.cdr.detectChanges();
  }

  updateSearch(query: string): void {
    this.searchQuery.set(query);
    this.cdr.detectChanges();
  }

  abrirModalNovo(): void {
    this.editMonitorId = null;
    this.modalMonitorAberto = true;
    this.cdr.detectChanges();
  }

  fecharModalMonitor(salvou?: any): void {
    this.modalMonitorAberto = false;
    this.editMonitorId = null;
    this.cdr.detectChanges();
    if (salvou) {
      this.recarregarLista();
    }
  }

  recarregarLista(): void {
    this.monitoramentoService.listarMonitores().subscribe({
      next: (list) => {
        if (list) {
          this.monitoramentoService.socketService.monitors.set(list);
          this.cdr.detectChanges();
        }
      }
    });
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

  abrirModalEditar(monitor: Monitor): void {
    if (!monitor?.id) return;
    this.editMonitorId = monitor.id;
    this.modalMonitorAberto = true;
    this.cdr.detectChanges();
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
        const currentList = this.monitoramentoService.socketService.monitors();
        const updated = currentList.map(m => m.id === monitor.id ? { ...m, active: !isAtivo } : m);
        this.monitoramentoService.socketService.monitors.set(updated);
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
          const currentList = this.monitoramentoService.socketService.monitors();
          this.monitoramentoService.socketService.monitors.set(currentList.filter(m => m.id !== monitor.id));
          if (this.router.url.includes(`/monitors/${monitor.id}`)) {
            this.router.navigate(['/monitoramento/dashboard']);
          }
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.toast.error('Erro ao excluir monitor: ' + (err.error?.error || err.message));
        }
      });
    });
  }

  // ── Gerenciamento de Grupos Personalizados ──
  abrirModalNovoGrupo(): void {
    this.editGroup = null;
    this.modalGrupoAberto = true;
    this.cdr.detectChanges();
  }

  abrirModalEditarGrupo(group: CustomGroup, event?: MouseEvent): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.editGroup = group;
    this.modalGrupoAberto = true;
    this.cdr.detectChanges();
  }

  fecharModalGrupo(salvou?: boolean): void {
    this.modalGrupoAberto = false;
    this.editGroup = null;
    this.cdr.detectChanges();
    if (salvou) {
      this.carregarGrupos();
      this.recarregarLista();
    }
  }

  excluirGrupo(group: CustomGroup, event?: MouseEvent): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (!group?.id) return;

    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Excluir Grupo',
        message: `Deseja realmente excluir o grupo "${group.name}"? Os monitores associados permanecerão ativos e serão movidos para a categoria geral.`,
        danger: true
      }
    });

    ref.afterClosed().subscribe(confirmado => {
      if (!confirmado) return;
      this.groupFormService.excluirGrupo(group.id).pipe(
        timeout(15000),
        finalize(() => this.cdr.detectChanges())
      ).subscribe({
        next: () => {
          this.toast.success(`Grupo "${group.name}" excluído com sucesso!`);
          this.carregarGrupos();
          this.recarregarLista();
        },
        error: (err) => {
          this.toast.error('Erro ao excluir grupo: ' + (err.error?.error || err.message));
        }
      });
    });
  }

  toggleRecolherGrupo(nomeGrupo: string): void {
    const key = (nomeGrupo || 'Geral').toLowerCase();
    const atual = new Set(this.gruposRecolhidos());
    if (atual.has(key)) {
      atual.delete(key);
    } else {
      atual.add(key);
    }
    this.gruposRecolhidos.set(atual);
    this.cdr.detectChanges();
  }

  isGrupoRecolhido(nomeGrupo: string): boolean {
    return this.gruposRecolhidos().has((nomeGrupo || 'Geral').toLowerCase());
  }

  irParaDetalhes(monitor: Monitor): void {
    if (this.isDragging || !monitor?.id) return;
    this.router.navigate(['/monitoramento/monitors', monitor.id]);
  }

  // ── Drag & Drop de Grupos ──
  onGroupDrop(event: CdkDragDrop<GroupSection[]>): void {
    if (event.previousIndex === event.currentIndex) {
      this.isDragging = false;
      return;
    }

    moveItemInArray(this.gruposLocais, event.previousIndex, event.currentIndex);

    const reorderedPayload = this.gruposLocais.map((sec, idx) => ({
      id: sec.group.id,
      order_index: idx + 1
    }));

    // Atualização otimista
    this.monitoramentoService.socketService.customGroups.set(
      this.gruposLocais.map((sec, idx) => ({ ...sec.group, order_index: idx + 1 }))
    );

    this.groupFormService.reordenarGrupos(reorderedPayload).subscribe({
      next: () => {
        this.toast.info('Ordem dos grupos atualizada.');
      },
      error: (err) => {
        this.toast.error('Erro ao reordenar grupos: ' + (err.error?.error || err.message));
        this.carregarGrupos();
      }
    });

    setTimeout(() => {
      this.isDragging = false;
    }, 150);
    this.cdr.detectChanges();
  }

  // ── Drag & Drop de Monitores ──
  onMonitorDrop(event: CdkDragDrop<Monitor[]>, targetGroupName: string | null): void {
    const normTarget = targetGroupName && targetGroupName.trim() ? targetGroupName.trim() : null;

    if (event.previousContainer === event.container) {
      if (event.previousIndex === event.currentIndex) {
        this.isDragging = false;
        return;
      }

      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

      const items = event.container.data.map((m, idx) => ({
        id: m.id,
        group_name: normTarget,
        order_index: idx + 1
      }));

      this.groupFormService.reordenarMonitores(items).subscribe({
        error: (err) => console.warn('Erro ao salvar reordenação de monitores:', err)
      });
    } else {
      const movedMonitor = event.previousContainer.data[event.previousIndex];
      if (!movedMonitor) {
        this.isDragging = false;
        return;
      }

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      movedMonitor.group_name = normTarget;

      // Atualiza o estado global de monitores no signal
      this.monitoramentoService.socketService.monitors.update(current =>
        current.map(m => m.id === movedMonitor.id ? { ...m, group_name: normTarget } : m)
      );

      const labelAlvo = normTarget || 'Geral';
      this.toast.success(`Monitor "${movedMonitor.name}" transferido para "${labelAlvo}"!`);

      this.groupFormService.moverMonitor(movedMonitor.id, normTarget, event.currentIndex + 1).subscribe({
        error: (err) => {
          this.toast.error('Erro ao mover monitor: ' + (err.error?.error || err.message));
          this.recarregarLista();
        }
      });
    }

    setTimeout(() => {
      this.isDragging = false;
      this.sincronizarListas();
    }, 150);
    this.cdr.detectChanges();
  }
}

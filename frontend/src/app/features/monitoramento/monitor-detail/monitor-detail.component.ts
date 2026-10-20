import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { finalize, Subscription } from 'rxjs';
import Chart from 'chart.js/auto';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MonitorDetailService } from './monitor-detail.service';
import { Monitor, Heartbeat, MonitorStats, Incident, TlsInfo } from '../services/socket.service';
import { ClipboardService } from '../services/clipboard.service';
import { formatLocalIso } from '../utils/date-utils';
import { MonitorFormComponent } from '../monitor-form/monitor-form.component';

@Component({
  selector: 'app-monitor-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MonitorFormComponent
  ],
  templateUrl: './monitor-detail.component.html',
  styleUrls: ['./monitor-detail.component.css']
})
export class MonitorDetailComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('latencyCanvas') canvasRef?: ElementRef<HTMLCanvasElement>;

  monitorId: number | null = null;
  monitor: Monitor | null = null;
  stats: MonitorStats | null = null;
  incidentes: Incident[] = [];
  tlsInfo: TlsInfo | null = null;
  localBeats: Heartbeat[] = [];

  carregando = false;
  erroCarregar = '';

  selectedTimeframe: '3h' | '24h' | '7d' | '30d' = '24h';
  chartInstance: any = null;

  loadingPausar = false;
  loadingRetomar = false;
  loadingExcluir = false;
  targetCopiado = false;
  modalEditAberto = false;

  private routeSub: Subscription | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public detailService: MonitorDetailService,
    private clipboard: ClipboardService,
    private cdr: ChangeDetectorRef
  ) {
    // Sincroniza dados do monitor em tempo real
    effect(() => {
      const all = this.detailService.socketService.monitors();
      if (this.monitorId) {
        const found = all.find(m => m.id === this.monitorId);
        if (found) {
          this.monitor = found;
          if (found.tls_info) this.tlsInfo = found.tls_info;
          this.cdr.markForCheck();
        }
      }
    });

    // Sincroniza estatísticas em tempo real
    effect(() => {
      const allStats = this.detailService.socketService.stats();
      if (this.monitorId && allStats[this.monitorId]) {
        this.stats = allStats[this.monitorId];
        this.cdr.markForCheck();
      }
    });

    // Sincroniza gráfico com novos batimentos do socket
    effect(() => {
      const allBeats = this.detailService.socketService.heartbeats();
      if (this.monitorId && allBeats[this.monitorId]) {
        const b = allBeats[this.monitorId];
        if (b && b.length > 0) {
          this.atualizarGrafico(b);
          this.cdr.markForCheck();
        }
      }
    });

    // Sincroniza incidentes em tempo real
    effect(() => {
      const activeIncs = this.detailService.socketService.incidents();
      if (this.monitorId) {
        const found = activeIncs.filter(i => i.monitor_id === this.monitorId);
        if (found.length > 0) {
          const map = new Map(this.incidentes.map(i => [i.id, i]));
          found.forEach(inc => map.set(inc.id, inc));
          this.incidentes = Array.from(map.values()).sort((a, b) => b.id - a.id);
          this.cdr.markForCheck();
        }
      }
    });
  }

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const idStr = params.get('id');
      if (idStr) {
        this.monitorId = parseInt(idStr, 10);
        this.carregarTodosDados();
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.beats.length > 0) {
      this.atualizarGrafico(this.beats);
    }
  }

  ngOnDestroy(): void {
    if (this.routeSub) this.routeSub.unsubscribe();
    if (this.chartInstance) {
      this.chartInstance.destroy();
      this.chartInstance = null;
    }
  }

  get beats(): Heartbeat[] {
    if (!this.monitorId) return [];
    const allBeats = this.detailService.socketService.heartbeats();
    const live = allBeats[this.monitorId];
    if (live && live.length > 0) {
      return live;
    }
    return this.localBeats || [];
  }

  get diasRestantesCert(): number {
    if (!this.tlsInfo?.valid_to) return 0;
    const exp = new Date(this.tlsInfo.valid_to).getTime();
    const now = Date.now();
    return Math.max(0, Math.floor((exp - now) / (1000 * 60 * 60 * 24)));
  }

  carregarTodosDados(): void {
    if (!this.monitorId) return;

    this.erroCarregar = '';

    // 1. Tenta carregar imediatamente da lista de monitores em memória (evita tela branca)
    const emMemoria = this.detailService.socketService.monitors().find(m => m.id === this.monitorId);
    if (emMemoria) {
      this.monitor = emMemoria;
      this.tlsInfo = emMemoria.tls_info || null;
      this.cdr.detectChanges();
    } else {
      this.carregando = true;
      this.cdr.detectChanges();
    }

    // 2. Busca dados completos via HTTP
    this.detailService.obterMonitor(this.monitorId)
      .pipe(finalize(() => {
        this.carregando = false;
        this.cdr.detectChanges();
      }))
      .subscribe({
        next: (m) => {
          this.monitor = m;
          this.tlsInfo = m.tls_info || null;
          this.carregando = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Erro ao obter detalhes do monitor:', err);
          if (!this.monitor) {
            this.erroCarregar = err.error?.error || 'Não foi possível carregar os detalhes deste monitor.';
          }
          this.cdr.detectChanges();
        }
      });

    this.detailService.obterStats(this.monitorId).subscribe({
      next: (s) => {
        this.stats = s;
        this.cdr.detectChanges();
      },
      error: (err) => console.warn('Aviso stats:', err)
    });

    this.detailService.obterIncidentes(this.monitorId).subscribe({
      next: (list) => {
        this.incidentes = Array.isArray(list) ? list : [];
        this.cdr.detectChanges();
      },
      error: (err) => console.warn('Aviso incidentes:', err)
    });

    this.carregarDadosGrafico();
  }

  mudarTimeframe(tf: '3h' | '24h' | '7d' | '30d'): void {
    this.selectedTimeframe = tf;
    this.carregarDadosGrafico();
  }

  carregarDadosGrafico(): void {
    if (!this.monitorId) return;

    let hours = 24;
    if (this.selectedTimeframe === '3h') hours = 3;
    if (this.selectedTimeframe === '7d') hours = 24 * 7;
    if (this.selectedTimeframe === '30d') hours = 24 * 30;

    const fromDate = formatLocalIso(new Date(Date.now() - hours * 60 * 60 * 1000));

    this.detailService.obterHeartbeats(this.monitorId, 60, fromDate).subscribe({
      next: (beats) => {
        if (beats && Array.isArray(beats)) {
          this.localBeats = beats;
          setTimeout(() => this.atualizarGrafico(beats), 60);
        }
      },
      error: (err) => console.warn('Aviso ao carregar histórico de batimentos:', err)
    });
  }

  inicializarGrafico(): void {
    const canvas = this.canvasRef?.nativeElement || (document.getElementById('latencyChartCanvas') as HTMLCanvasElement);
    if (!canvas) return;

    // Destrói com segurança qualquer gráfico anterior vinculado a este canvas
    const prev = Chart.getChart(canvas);
    if (prev) {
      prev.destroy();
    }
    if (this.chartInstance) {
      this.chartInstance.destroy();
      this.chartInstance = null;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    this.chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Latência (ms)',
          data: [],
          borderColor: '#4f46e5',
          backgroundColor: 'rgba(79, 70, 229, 0.08)',
          borderWidth: 2,
          fill: true,
          tension: 0.3,
          pointRadius: 2,
          pointHoverRadius: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { font: { size: 11 }, color: '#94a3b8', maxTicksLimit: 12 }
          },
          y: {
            beginAtZero: true,
            grid: { color: '#f1f5f9' },
            ticks: {
              font: { size: 11 },
              color: '#94a3b8',
              callback: (val) => `${val}ms`
            }
          }
        }
      }
    });
  }

  atualizarGrafico(beats: Heartbeat[]): void {
    const canvas = this.canvasRef?.nativeElement || (document.getElementById('latencyChartCanvas') as HTMLCanvasElement);
    if (!canvas) return;

    if (!this.chartInstance) {
      this.inicializarGrafico();
    }
    if (!this.chartInstance) return;

    const safeBeats = Array.isArray(beats) ? beats : [];
    const labels = safeBeats.map(b => {
      if (!b || !b.time) return '';
      const timeStr = String(b.time);
      if (timeStr.includes('T')) {
        return timeStr.split('T')[1].slice(0, 5);
      }
      if (timeStr.includes(' ')) {
        return timeStr.split(' ')[1].slice(0, 5);
      }
      return timeStr.slice(0, 5);
    });

    const data = safeBeats.map(b => (b && typeof b.ping_ms === 'number' ? b.ping_ms : 0));

    this.chartInstance.data.labels = labels;
    this.chartInstance.data.datasets[0].data = data;
    this.chartInstance.update();
  }

  async copiarAlvo(): Promise<void> {
    const target = this.monitor?.url || this.monitor?.hostname || '';
    if (!target) return;
    const ok = await this.clipboard.copy(target);
    if (ok) {
      this.targetCopiado = true;
      setTimeout(() => { this.targetCopiado = false; }, 2500);
    }
  }

  pausar(): void {
    if (!this.monitorId || this.loadingPausar) return;
    this.loadingPausar = true;
    this.cdr.detectChanges();
    this.detailService.pausar(this.monitorId)
      .pipe(finalize(() => {
        this.loadingPausar = false;
        this.cdr.detectChanges();
      }))
      .subscribe({
        next: (res) => {
          this.monitor = res;
          this.cdr.detectChanges();
        }
      });
  }

  retomar(): void {
    if (!this.monitorId || this.loadingRetomar) return;
    this.loadingRetomar = true;
    this.cdr.detectChanges();
    this.detailService.retomar(this.monitorId)
      .pipe(finalize(() => {
        this.loadingRetomar = false;
        this.cdr.detectChanges();
      }))
      .subscribe({
        next: (res) => {
          this.monitor = res;
          this.cdr.detectChanges();
        }
      });
  }

  excluir(): void {
    if (!this.monitorId || this.loadingExcluir) return;
    if (!confirm(`Deseja realmente excluir o monitor "${this.monitor?.name}"?`)) return;

    this.loadingExcluir = true;
    this.cdr.detectChanges();
    this.detailService.excluir(this.monitorId)
      .pipe(finalize(() => {
        this.loadingExcluir = false;
        this.cdr.detectChanges();
      }))
      .subscribe({
        next: () => {
          this.router.navigate(['/monitoramento/dashboard']);
        }
      });
  }

  abrirEditar(): void {
    this.modalEditAberto = true;
    this.cdr.detectChanges();
  }

  fecharModalEdit(salvou?: any): void {
    this.modalEditAberto = false;
    this.cdr.detectChanges();
    if (salvou) {
      this.carregarTodosDados();
    }
  }
}

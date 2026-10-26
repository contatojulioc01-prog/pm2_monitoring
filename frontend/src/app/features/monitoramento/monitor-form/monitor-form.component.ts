import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize, timeout } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MonitorFormService } from './monitor-form.service';
import { ClipboardService } from '../services/clipboard.service';

@Component({
  selector: 'app-monitor-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  templateUrl: './monitor-form.component.html',
  styleUrls: ['./monitor-form.component.css']
})
export class MonitorFormComponent implements OnInit {
  @Input() monitorId: number | null = null;
  @Output() fechou = new EventEmitter<boolean>();

  isEdit = false;
  loadingSalvar = false;
  loadingTestar = false;
  errorMessage = '';
  testResult: { ok: boolean; msg: string; pingMs: number } | null = null;
  urlCopiada = false;

  formData: any = {
    name: '',
    type: 'http',
    url: '',
    hostname: '',
    port: null,
    method: 'GET',
    expected_status: '200-299',
    keyword: '',
    invert_keyword: false,
    ignore_tls: false,
    cert_expiry_alert: false,
    body: '',
    interval_s: 20,
    retry_interval_s: 10,
    max_retries: 3,
    resend_interval_min: 0,
    parent_id: null,
    notification_ids: [] as number[],
    group_name: '',
    active: true
  };

  gruposSidebar: Array<{ id?: number; name: string; icon: string }> = [];
  gruposExistentes: string[] = [];

  dbConnectionString = '';
  canaisNotificacao: any[] = [];
  outrosMonitores: any[] = [];
  pushToken: string | null = null;

  constructor(
    private monitorService: MonitorFormService,
    private clipboard: ClipboardService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarListasAuxiliares();

    if (this.monitorId) {
      this.isEdit = true;
      this.carregarDados(this.monitorId);
    }
  }

  carregarListasAuxiliares(): void {
    this.monitorService.listarGruposPersonalizados()
      .pipe(timeout(10000))
      .subscribe({
        next: (grupos) => {
          this.gruposSidebar = grupos || [];
          if (this.formData.group_name && !this.gruposSidebar.some(g => g.name.toLowerCase() === this.formData.group_name.toLowerCase())) {
            this.gruposSidebar.push({ name: this.formData.group_name, icon: 'folder' });
          }
          this.cdr.detectChanges();
        },
        error: (err) => console.warn('Erro ao carregar grupos da sidebar:', err)
      });

    this.monitorService.listarNotificacoes()
      .pipe(timeout(10000))
      .subscribe({
        next: (list) => {
          this.canaisNotificacao = list || [];
          if (!this.isEdit) {
            const defaults = (list || []).filter(n => n.is_default).map(n => n.id);
            this.formData.notification_ids = defaults;
          }
          this.cdr.detectChanges();
        },
        error: () => {
          this.cdr.detectChanges();
        }
      });

    this.monitorService.listarMonitores()
      .pipe(timeout(10000))
      .subscribe({
        next: (list) => {
          this.outrosMonitores = (list || []).filter(m => !this.monitorId || m.id !== this.monitorId);
          const set = new Set<string>();
          (list || []).forEach(m => {
            if (m.group_name && m.group_name.trim()) set.add(m.group_name.trim());
          });
          this.gruposExistentes = Array.from(set);
          this.cdr.detectChanges();
        },
        error: () => {
          this.cdr.detectChanges();
        }
      });
  }

  selecionarGrupo(nome: string): void {
    if (!nome) {
      this.formData.group_name = '';
    } else if (this.formData.group_name?.toLowerCase() === nome.toLowerCase()) {
      this.formData.group_name = '';
    } else {
      this.formData.group_name = nome;
    }
    this.cdr.detectChanges();
  }

  onTipoAlterado(): void {
    if (!this.isEdit && !this.formData.group_name && this.gruposSidebar.length > 0) {
      if (this.formData.type === 'smtp') {
        const found = this.gruposSidebar.find(g => g.name.toLowerCase().includes('mail') || g.icon === 'mail');
        if (found) this.formData.group_name = found.name;
      } else if (this.formData.type === 'ping') {
        const found = this.gruposSidebar.find(g => g.name.toLowerCase().includes('ping') || g.name.toLowerCase().includes('servidor') || g.icon === 'router');
        if (found) this.formData.group_name = found.name;
      } else if (this.formData.type === 'http') {
        const found = this.gruposSidebar.find(g => g.name.toLowerCase().includes('web') || g.name.toLowerCase().includes('api') || g.icon === 'language');
        if (found) this.formData.group_name = found.name;
      }
      this.cdr.detectChanges();
    }
  }

  carregarDados(id: number): void {
    this.monitorService.obterPorId(id)
      .pipe(timeout(10000))
      .subscribe({
        next: (m) => {
          this.formData = {
            name: m.name,
            type: m.type,
            url: m.url || '',
            hostname: m.hostname || '',
            port: m.port,
            method: m.method || 'GET',
            expected_status: m.expected_status || '200-299',
            keyword: m.keyword || '',
            invert_keyword: m.invert_keyword || false,
            ignore_tls: m.ignore_tls || false,
            cert_expiry_alert: m.cert_expiry_alert || false,
            body: m.body || '',
            interval_s: m.interval_s || 20,
            retry_interval_s: m.retry_interval_s || 10,
            max_retries: m.max_retries !== undefined && m.max_retries !== null ? Number(m.max_retries) : 3,
            resend_interval_min: m.resend_interval_min || 0,
            parent_id: m.parent_id || null,
            notification_ids: m.notification_ids || [],
            group_name: m.group_name || '',
            active: m.active
          };

          this.pushToken = m.push_token || null;
          if (m.config?.connectionString) {
            this.dbConnectionString = m.config.connectionString;
          }
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.errorMessage = 'Erro ao carregar dados do monitor: ' + (err.error?.error || err.message);
          this.cdr.detectChanges();
        }
      });
  }

  get pushUrl(): string {
    if (!this.pushToken) return '';
    const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:6767';
    return `${origin}/api/push/${this.pushToken}?status=up`;
  }

  async copiarPushUrl(): Promise<void> {
    if (!this.pushUrl) return;
    const ok = await this.clipboard.copy(this.pushUrl);
    if (ok) {
      this.urlCopiada = true;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.urlCopiada = false;
        this.cdr.detectChanges();
      }, 2500);
    }
  }

  isNotifSelected(id: number): boolean {
    return this.formData.notification_ids.includes(id);
  }

  toggleNotif(id: number): void {
    const idx = this.formData.notification_ids.indexOf(id);
    if (idx >= 0) {
      this.formData.notification_ids.splice(idx, 1);
    } else {
      this.formData.notification_ids.push(id);
    }
    this.cdr.detectChanges();
  }

  testar(): void {
    if (this.loadingTestar) return;
    this.testResult = null;
    this.errorMessage = '';

    const payload = { ...this.formData };
    if (this.formData.type === 'database') {
      payload.config = {
        dbType: 'postgres',
        connectionString: this.dbConnectionString
      };
    }

    this.loadingTestar = true;
    this.cdr.detectChanges();

    this.monitorService.testarSonda(payload)
      .pipe(
        timeout(15000),
        finalize(() => {
          this.loadingTestar = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (res) => {
          this.testResult = res;
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.testResult = {
            ok: false,
            msg: err.error?.error || err.message || 'Erro ao executar teste da sonda.',
            pingMs: 0
          };
          this.cdr.detectChanges();
        }
      });
  }

  fechar(): void {
    this.fechou.emit(false);
  }

  salvar(): void {
    if (this.loadingSalvar) return;
    this.errorMessage = '';

    if (!this.formData.name.trim()) {
      this.errorMessage = 'Informe o nome do monitor.';
      this.cdr.detectChanges();
      return;
    }

    if (this.formData.type === 'http' && !this.formData.url.trim()) {
      this.errorMessage = 'Informe a URL do monitor HTTP.';
      this.cdr.detectChanges();
      return;
    }

    if (['tcp', 'ping', 'dns', 'smtp'].includes(this.formData.type) && !this.formData.hostname?.trim()) {
      this.errorMessage = 'Informe o hostname ou IP do serviço.';
      this.cdr.detectChanges();
      return;
    }

    const payload = {
      ...this.formData,
      interval_s: Math.max(5, Number(this.formData.interval_s) || 20),
      retry_interval_s: Math.max(1, Number(this.formData.retry_interval_s) || 10),
      max_retries: Math.max(0, Number(this.formData.max_retries !== undefined && this.formData.max_retries !== null ? this.formData.max_retries : 3)),
      group_name: this.formData.group_name && this.formData.group_name.trim() ? this.formData.group_name.trim() : null
    };
    if (this.formData.type === 'database') {
      payload.config = {
        dbType: 'postgres',
        connectionString: this.dbConnectionString
      };
    }

    this.loadingSalvar = true;
    this.cdr.detectChanges();

    const op$ = this.isEdit && this.monitorId
      ? this.monitorService.atualizar(this.monitorId, payload)
      : this.monitorService.salvar(payload);

    op$.pipe(
      timeout(15000),
      finalize(() => {
        this.loadingSalvar = false;
        this.cdr.detectChanges();
      })
    ).subscribe({
      next: () => {
        this.fechou.emit(true);
      },
      error: (err) => {
        this.errorMessage = err.error?.error || err.message || 'Erro ao salvar o monitor.';
        this.cdr.detectChanges();
      }
    });
  }
}

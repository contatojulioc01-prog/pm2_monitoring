import { Component, OnInit, OnDestroy, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { finalize } from 'rxjs/operators';
import { ServersService } from '../../services/servers.service';
import { ToastService } from '../../services/toast.service';
import { Server } from '../../models/models';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatIconModule, MatButtonModule, MatTooltipModule, MatProgressSpinnerModule
  ],
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit, OnDestroy {
  servers = signal<Server[]>([]);
  loading = signal<boolean>(true);
  showModal = signal<boolean>(false);
  showHelp = signal<boolean>(false);
  editingServer = signal<Server | null>(null);

  serverForm!: FormGroup;
  loadingSalvar = signal<boolean>(false);
  loadingExcluir = signal<boolean>(false);
  syncingServerIds = new Set<string>();

  // Exclusão / Confirmação
  showDeleteModal = signal<boolean>(false);
  serverToDelete = signal<Server | null>(null);

  private pollInterval: any = null;

  constructor(
    private fb: FormBuilder,
    private serversService: ServersService,
    private toast: ToastService,
    private cdr: ChangeDetectorRef
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.loadServers();
    this.pollInterval = setInterval(() => {
      this.refreshStatus();
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
    }
  }

  initForm(): void {
    this.serverForm = this.fb.group({
      name: ['', [Validators.required]],
      ip: ['', [Validators.required]],
      agentPort: [3001, [Validators.required, Validators.min(1), Validators.max(65535)]],
      token: ['dc_manager_secret_token', [Validators.required]],
      rootPath: ['D:\\']
    });
  }

  loadServers(): void {
    this.loading.set(true);
    this.serversService.getServers()
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (data) => this.servers.set(data),
        error: (err) => this.toast.error('Erro ao carregar servidores: ' + (err.error?.error || err.message))
      });
  }

  refreshStatus(): void {
    this.serversService.getServers().subscribe({
      next: (data) => this.servers.set(data),
      error: () => {}
    });
  }

  openModal(server?: Server): void {
    if (server) {
      this.editingServer.set(server);
      this.serverForm.patchValue({
        name: server.name,
        ip: server.ip,
        agentPort: server.agentPort || 3001,
        token: server.token || '••••••••',
        rootPath: server.rootPath || 'D:\\'
      });
    } else {
      this.editingServer.set(null);
      this.serverForm.reset({
        name: '',
        ip: '',
        agentPort: 3001,
        token: 'dc_manager_secret_token',
        rootPath: 'D:\\'
      });
    }
    this.showModal.set(true);
  }

  closeModal(): void {
    if (this.loadingSalvar()) return;
    this.showModal.set(false);
    this.editingServer.set(null);
  }

  salvarServidor(): void {
    if (this.serverForm.invalid || this.loadingSalvar()) return;

    this.loadingSalvar.set(true);
    this.cdr.detectChanges();
    const formValue = this.serverForm.value;

    const req$ = this.editingServer()
      ? this.serversService.updateServer(this.editingServer()!.id, formValue)
      : this.serversService.createServer(formValue);

    req$.pipe(finalize(() => {
      this.loadingSalvar.set(false);
      this.cdr.detectChanges();
    }))
      .subscribe({
        next: () => {
          this.toast.success(this.editingServer() ? 'Servidor atualizado com sucesso!' : 'Servidor cadastrado com sucesso!');
          this.closeModal();
          this.loadServers();
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.toast.error(err.error?.error || err.message || 'Erro ao salvar servidor');
          this.cdr.detectChanges();
        }
      });
  }

  sincronizarServidor(server: Server): void {
    if (this.syncingServerIds.has(server.id)) return;

    this.syncingServerIds.add(server.id);
    this.serversService.syncServer(server.id)
      .pipe(finalize(() => {
        setTimeout(() => {
          this.syncingServerIds.delete(server.id);
          this.cdr.detectChanges();
        }, 2000);
      }))
      .subscribe({
        next: () => {
          this.toast.info(`Sincronização iniciada para ${server.name}...`);
          this.refreshStatus();
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.toast.error('Erro ao disparar sincronização: ' + (err.error?.error || err.message));
          this.cdr.detectChanges();
        }
      });
  }

  confirmarExclusao(server: Server): void {
    this.serverToDelete.set(server);
    this.showDeleteModal.set(true);
    this.cdr.detectChanges();
  }

  closeDeleteModal(): void {
    if (this.loadingExcluir()) return;
    this.showDeleteModal.set(false);
    this.serverToDelete.set(null);
    this.cdr.detectChanges();
  }

  executarExclusao(): void {
    const srv = this.serverToDelete();
    if (!srv || this.loadingExcluir()) return;

    this.loadingExcluir.set(true);
    this.cdr.detectChanges();
    this.serversService.deleteServer(srv.id)
      .pipe(finalize(() => {
        this.loadingExcluir.set(false);
        this.closeDeleteModal();
        this.cdr.detectChanges();
      }))
      .subscribe({
        next: () => {
          this.toast.success(`Servidor "${srv.name}" removido com sucesso.`);
          this.loadServers();
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.toast.error('Erro ao excluir servidor: ' + (err.error?.error || err.message));
          this.cdr.detectChanges();
        }
      });
  }

  formatDate(isoDate?: string): string {
    if (!isoDate) return 'Nunca sincronizado';
    try {
      const d = new Date(isoDate);
      const pad = (n: number) => n.toString().padStart(2, '0');
      return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    } catch {
      return isoDate;
    }
  }
}


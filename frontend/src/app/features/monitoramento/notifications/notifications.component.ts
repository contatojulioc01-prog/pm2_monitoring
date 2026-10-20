import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize, timeout } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  canais: any[] = [];
  modalAberto = false;
  isEdit = false;
  editId: number | null = null;

  loadingSalvar = false;
  loadingTestarModal = false;
  loadingTestarId: number | null = null;
  loadingExcluirId: number | null = null;

  errorMessage = '';
  testFeedback = '';
  testSuccess = true;

  formData: any = {
    name: '',
    type: 'telegram',
    is_default: false,
    active: true,
    config: {
      botToken: '',
      chatId: '',
      threadId: null,
      disable_notification: false,
      customTemplate: '',
      host: '',
      port: 587,
      user: '',
      pass: '',
      to: '',
      webhookUrl: '',
      url: '',
      method: 'POST'
    }
  };

  constructor(
    private notifService: NotificationsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarCanais();
  }

  carregarCanais(): void {
    this.notifService.listar()
      .pipe(timeout(10000))
      .subscribe({
        next: (list) => {
          this.canais = list || [];
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.warn('Erro ao carregar canais:', err);
          this.cdr.detectChanges();
        }
      });
  }

  abrirModalNovo(): void {
    this.isEdit = false;
    this.editId = null;
    this.errorMessage = '';
    this.testFeedback = '';
    this.formData = {
      name: '',
      type: 'telegram',
      is_default: false,
      active: true,
      config: {
        botToken: '',
        chatId: '',
        threadId: null,
        disable_notification: false,
        customTemplate: '',
        host: '',
        port: 587,
        user: '',
        pass: '',
        to: '',
        webhookUrl: '',
        url: '',
        method: 'POST'
      }
    };
    this.modalAberto = true;
    this.cdr.detectChanges();
  }

  abrirModalEditar(canal: any): void {
    this.isEdit = true;
    this.editId = canal.id;
    this.errorMessage = '';
    this.testFeedback = '';
    this.formData = {
      name: canal.name,
      type: canal.type,
      is_default: canal.is_default,
      active: canal.active,
      config: { ...canal.config }
    };
    this.modalAberto = true;
    this.cdr.detectChanges();
  }

  fecharModal(): void {
    this.modalAberto = false;
    this.editId = null;
    this.loadingSalvar = false;
    this.loadingTestarModal = false;
    this.cdr.detectChanges();
  }

  testarNoModal(): void {
    if (this.loadingTestarModal) return;
    this.loadingTestarModal = true;
    this.testFeedback = '';
    this.cdr.detectChanges();

    this.notifService.testarTemp(this.formData.type, this.formData.config)
      .pipe(
        timeout(15000),
        finalize(() => {
          this.loadingTestarModal = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: () => {
          this.testSuccess = true;
          this.testFeedback = 'Notificação de teste enviada com sucesso! Verifique seu Telegram / canal.';
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.testSuccess = false;
          this.testFeedback = 'Falha no teste: ' + (err.error?.error || err.message);
          this.cdr.detectChanges();
        }
      });
  }

  testar(id: number): void {
    if (this.loadingTestarId) return;
    this.loadingTestarId = id;
    this.testFeedback = '';
    this.cdr.detectChanges();

    this.notifService.testar(id)
      .pipe(
        timeout(15000),
        finalize(() => {
          this.loadingTestarId = null;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: () => {
          this.testSuccess = true;
          this.testFeedback = 'Notificação de teste enviada com sucesso! Verifique seu canal.';
          this.cdr.detectChanges();
          setTimeout(() => {
            this.testFeedback = '';
            this.cdr.detectChanges();
          }, 6000);
        },
        error: (err) => {
          this.testSuccess = false;
          this.testFeedback = 'Falha no teste: ' + (err.error?.error || err.message);
          this.cdr.detectChanges();
        }
      });
  }

  excluir(id: number, name: string): void {
    if (this.loadingExcluirId) return;
    if (!confirm(`Deseja realmente excluir o canal de notificação "${name}"?`)) return;

    this.loadingExcluirId = id;
    this.cdr.detectChanges();

    this.notifService.excluir(id)
      .pipe(
        timeout(10000),
        finalize(() => {
          this.loadingExcluirId = null;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: () => {
          this.carregarCanais();
        },
        error: (err) => {
          alert('Erro ao excluir canal: ' + (err.error?.error || err.message));
          this.cdr.detectChanges();
        }
      });
  }

  salvar(): void {
    if (this.loadingSalvar) return;
    this.errorMessage = '';

    if (!this.formData.name.trim()) {
      this.errorMessage = 'Informe o nome do canal de notificação.';
      this.cdr.detectChanges();
      return;
    }

    if (this.formData.type === 'telegram') {
      if (!this.formData.config.botToken?.trim() || !this.formData.config.chatId?.trim()) {
        this.errorMessage = 'Bot Token e Chat ID do Telegram são obrigatórios.';
        this.cdr.detectChanges();
        return;
      }
    }

    if (this.formData.type === 'email') {
      if (!this.formData.config.host?.trim() || !this.formData.config.to?.trim()) {
        this.errorMessage = 'Host SMTP e Destinatários de e-mail são obrigatórios.';
        this.cdr.detectChanges();
        return;
      }
    }

    this.loadingSalvar = true;
    this.cdr.detectChanges();

    const op$ = this.isEdit && this.editId
      ? this.notifService.atualizar(this.editId, this.formData)
      : this.notifService.salvar(this.formData);

    op$.pipe(
      timeout(15000),
      finalize(() => {
        this.loadingSalvar = false;
        this.cdr.detectChanges();
      })
    ).subscribe({
      next: () => {
        this.modalAberto = false;
        this.carregarCanais();
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = err.error?.error || err.message || 'Erro ao salvar o canal de notificação.';
        this.cdr.detectChanges();
      }
    });
  }
}

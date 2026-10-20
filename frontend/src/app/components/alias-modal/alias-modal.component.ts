import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Pm2Process, Pm2Service } from '../../services/pm2.service';
import { ToastService } from '../../services/toast.service';

export interface AliasModalData {
  process: Pm2Process;
}

@Component({
  selector: 'app-alias-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './alias-modal.component.html',
  styleUrl: './alias-modal.component.scss'
})
export class AliasModalComponent implements OnInit {
  alias: string = '';
  isSaving: boolean = false;
  isRemoving: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AliasModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AliasModalData,
    private pm2Service: Pm2Service,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    if (this.data?.process?.alias) {
      this.alias = this.data.process.alias;
    }
  }

  fechar(result?: { updated: boolean; alias?: string | null }): void {
    this.dialogRef.close(result);
  }

  salvar(): void {
    const cleanAlias = this.alias.trim();
    if (!cleanAlias) {
      this.toast.error('Informe um apelido válido ou clique em Remover.');
      return;
    }

    if (cleanAlias === (this.data.process.alias || '')) {
      this.fechar();
      return;
    }

    this.isSaving = true;
    this.pm2Service.setProcessAlias(this.data.process.name, cleanAlias).subscribe({
      next: (res) => {
        this.isSaving = false;
        this.toast.success(res.message || 'Apelido salvo com sucesso!');
        this.fechar({ updated: true, alias: cleanAlias });
      },
      error: (err) => {
        this.isSaving = false;
        this.toast.error('Erro ao salvar apelido: ' + (err?.error?.error || err.message));
      }
    });
  }

  remover(): void {
    if (!this.data.process.alias) {
      this.fechar();
      return;
    }

    this.isRemoving = true;
    this.pm2Service.deleteProcessAlias(this.data.process.name).subscribe({
      next: (res) => {
        this.isRemoving = false;
        this.toast.success(res.message || 'Apelido removido com sucesso!');
        this.fechar({ updated: true, alias: null });
      },
      error: (err) => {
        this.isRemoving = false;
        this.toast.error('Erro ao remover apelido: ' + (err?.error?.error || err.message));
      }
    });
  }
}


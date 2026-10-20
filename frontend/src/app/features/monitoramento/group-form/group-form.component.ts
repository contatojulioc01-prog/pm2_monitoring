import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize, timeout } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GroupFormService } from './group-form.service';
import { CustomGroup } from '../services/socket.service';

@Component({
  selector: 'app-group-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {
  @Input() group: CustomGroup | null = null;
  @Output() fechou = new EventEmitter<boolean>();

  isEdit = false;
  loadingSalvar = false;
  errorMessage = '';

  formData = {
    name: '',
    icon: 'folder'
  };

  iconSearch = '';

  readonly availableIcons: string[] = [
    'folder',
    'mail',
    'email',
    'send',
    'inbox',
    'mark_email_read',
    'router',
    'wifi',
    'lan',
    'hub',
    'cell_tower',
    'language',
    'web',
    'public',
    'dns',
    'cloud',
    'cloud_queue',
    'cloud_sync',
    'storage',
    'memory',
    'database',
    'developer_board',
    'terminal',
    'code',
    'shield',
    'security',
    'lock',
    'vpn_key',
    'speed',
    'timer',
    'schedule',
    'sync',
    'sensors',
    'notifications_active',
    'api',
    'monitoring',
    'analytics',
    'flag',
    'label',
    'star',
    'devices',
    'computer',
    'desktop_windows',
    'dns'
  ];

  constructor(
    private groupFormService: GroupFormService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (this.group && this.group.id) {
      this.isEdit = true;
      this.formData = {
        name: this.group.name || '',
        icon: this.group.icon || 'folder'
      };
    }
  }

  get filteredIcons(): string[] {
    const query = this.iconSearch.trim().toLowerCase();
    if (!query) {
      return this.availableIcons;
    }
    const filtered = this.availableIcons.filter(ic => ic.toLowerCase().includes(query));
    if (!filtered.includes(query) && query.length >= 2) {
      // Permite usar qualquer mat-icon digitado pelo usuário!
      return [query, ...filtered];
    }
    return filtered;
  }

  selecionarIcone(icon: string): void {
    this.formData.icon = icon;
  }

  fechar(): void {
    this.fechou.emit(false);
  }

  salvar(): void {
    if (this.loadingSalvar) return;

    const trimmedName = this.formData.name.trim();
    if (!trimmedName) {
      this.errorMessage = 'O nome do grupo é obrigatório.';
      return;
    }

    this.errorMessage = '';
    this.loadingSalvar = true;

    const payload = {
      name: trimmedName,
      icon: (this.formData.icon || 'folder').trim().toLowerCase()
    };

    const request$ = this.isEdit && this.group?.id
      ? this.groupFormService.atualizarGrupo(this.group.id, payload)
      : this.groupFormService.criarGrupo(payload);

    request$
      .pipe(
        timeout(15000),
        finalize(() => {
          this.loadingSalvar = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: () => {
          this.fechou.emit(true);
        },
        error: (err) => {
          this.errorMessage = err?.error?.error || err?.message || 'Falha ao salvar grupo.';
          this.cdr.detectChanges();
        }
      });
  }
}

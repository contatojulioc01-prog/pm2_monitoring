import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize, timeout } from 'rxjs';
import { MaintenancesService, MaintenanceRecord } from './maintenances.service';
import { formatDateLocal } from '../utils/date-utils';

@Component({
  selector: 'app-maintenances',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './maintenances.component.html',
  styleUrls: ['./maintenances.component.css']
})
export class MaintenancesComponent implements OnInit {
  maintenances: MaintenanceRecord[] = [];
  todosMonitores: any[] = [];
  modalAberto = false;
  isEdit = false;
  editId: number | null = null;

  carregandoLista = false;
  loadingSalvar = false;
  loadingExcluirId: number | null = null;
  errorMessage = '';

  formData: MaintenanceRecord = {
    name: '',
    strategy: 'once',
    start_at: '',
    end_at: '',
    weekdays: '1,2,3,4,5',
    start_time: '02:00',
    end_time: '04:00',
    active: true,
    monitor_ids: []
  };

  diasSemana = [
    { id: 0, label: 'Dom' },
    { id: 1, label: 'Seg' },
    { id: 2, label: 'Ter' },
    { id: 3, label: 'Qua' },
    { id: 4, label: 'Qui' },
    { id: 5, label: 'Sex' },
    { id: 6, label: 'Sáb' }
  ];

  constructor(
    private mService: MaintenancesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarDados();
    this.carregarMonitores();
  }

  carregarDados(): void {
    this.carregandoLista = true;
    this.cdr.detectChanges();

    this.mService.listar()
      .pipe(
        timeout(10000),
        finalize(() => {
          this.carregandoLista = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (list) => {
          this.maintenances = list || [];
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Erro ao listar manutenções:', err);
          this.cdr.detectChanges();
        }
      });
  }

  carregarMonitores(): void {
    this.mService.obterMonitores()
      .pipe(timeout(10000))
      .subscribe({
        next: (list) => {
          this.todosMonitores = list || [];
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Erro ao listar monitores:', err);
          this.cdr.detectChanges();
        }
      });
  }

  formatDate(dateStr?: string): string {
    if (!dateStr) return '-';
    return formatDateLocal(dateStr);
  }

  getWeekdaysLabel(weekdaysStr?: string): string {
    if (!weekdaysStr) return '-';
    const ids = weekdaysStr.split(',').map(Number);
    return this.diasSemana.filter(d => ids.includes(d.id)).map(d => d.label).join(', ');
  }

  isDiaSelecionado(diaId: number): boolean {
    const list = this.formData.weekdays ? this.formData.weekdays.split(',').map(Number) : [];
    return list.includes(diaId);
  }

  toggleDia(diaId: number): void {
    let list = this.formData.weekdays ? this.formData.weekdays.split(',').map(Number) : [];
    if (list.includes(diaId)) {
      list = list.filter((d: number) => d !== diaId);
    } else {
      list.push(diaId);
    }
    this.formData.weekdays = list.sort((a, b) => a - b).join(',');
    this.cdr.detectChanges();
  }

  isMonitorSelecionado(id: number): boolean {
    return (this.formData.monitor_ids || []).includes(id);
  }

  toggleMonitor(id: number): void {
    if (!this.formData.monitor_ids) {
      this.formData.monitor_ids = [];
    }
    const idx = this.formData.monitor_ids.indexOf(id);
    if (idx >= 0) {
      this.formData.monitor_ids.splice(idx, 1);
    } else {
      this.formData.monitor_ids.push(id);
    }
    this.cdr.detectChanges();
  }

  abrirModalNovo(): void {
    this.isEdit = false;
    this.editId = null;
    this.errorMessage = '';
    this.formData = {
      name: '',
      strategy: 'once',
      start_at: '',
      end_at: '',
      weekdays: '1,2,3,4,5',
      start_time: '02:00',
      end_time: '04:00',
      active: true,
      monitor_ids: []
    };
    this.modalAberto = true;
    this.cdr.detectChanges();
  }

  abrirModalEditar(m: MaintenanceRecord): void {
    this.isEdit = true;
    this.editId = m.id || null;
    this.errorMessage = '';
    this.formData = {
      name: m.name,
      strategy: m.strategy,
      start_at: m.start_at || '',
      end_at: m.end_at || '',
      weekdays: m.weekdays || '1,2,3,4,5',
      start_time: m.start_time || '02:00',
      end_time: m.end_time || '04:00',
      active: m.active,
      monitor_ids: m.monitors ? m.monitors.map(s => s.id) : (m.monitor_ids ? [...m.monitor_ids] : [])
    };
    this.modalAberto = true;
    this.cdr.detectChanges();
  }

  fecharModal(): void {
    this.modalAberto = false;
    this.editId = null;
    this.loadingSalvar = false;
    this.cdr.detectChanges();
  }

  excluir(id: number | undefined, name: string): void {
    if (!id || this.loadingExcluirId) return;
    if (!confirm(`Deseja excluir a manutenção "${name}"?`)) return;

    this.loadingExcluirId = id;
    this.cdr.detectChanges();

    this.mService.excluir(id)
      .pipe(
        timeout(10000),
        finalize(() => {
          this.loadingExcluirId = null;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: () => {
          this.carregarDados();
        },
        error: (err) => {
          alert('Erro ao excluir manutenção: ' + (err.error?.error || err.message));
          this.cdr.detectChanges();
        }
      });
  }

  salvar(): void {
    if (this.loadingSalvar) return;
    this.errorMessage = '';

    if (!this.formData.name.trim()) {
      this.errorMessage = 'Informe o nome da janela de manutenção.';
      this.cdr.detectChanges();
      return;
    }

    this.loadingSalvar = true;
    this.cdr.detectChanges();

    const op$ = this.isEdit && this.editId
      ? this.mService.atualizar(this.editId, this.formData)
      : this.mService.salvar(this.formData);

    op$.pipe(
      timeout(15000),
      finalize(() => {
        this.loadingSalvar = false;
        this.cdr.detectChanges();
      })
    ).subscribe({
      next: () => {
        this.modalAberto = false;
        this.carregarDados();
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = err.error?.error || err.message || 'Erro ao salvar a janela de manutenção.';
        this.cdr.detectChanges();
      }
    });
  }
}

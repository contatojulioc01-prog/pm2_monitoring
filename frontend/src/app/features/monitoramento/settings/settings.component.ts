import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize, timeout } from 'rxjs';
import { SettingsService, MonitoringSettings } from './settings.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  configData: MonitoringSettings = {
    heartbeat_retention_days: 30,
    timezone: 'America/Sao_Paulo'
  };

  carregando = false;
  loadingConfig = false;
  feedbackMsg = '';
  feedbackSuccess = true;

  constructor(
    private settingsService: SettingsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarConfiguracoes();
  }

  carregarConfiguracoes(): void {
    this.carregando = true;
    this.cdr.detectChanges();

    this.settingsService.obterConfiguracoes()
      .pipe(
        timeout(10000),
        finalize(() => {
          this.carregando = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (res) => {
          if (res) {
            if (res.heartbeat_retention_days) {
              this.configData.heartbeat_retention_days = res.heartbeat_retention_days;
            }
            if (res.timezone) {
              this.configData.timezone = res.timezone;
            }
          }
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Erro ao carregar configurações:', err);
          this.cdr.detectChanges();
        }
      });
  }

  salvarConfiguracoes(): void {
    if (this.loadingConfig) return;
    this.loadingConfig = true;
    this.feedbackMsg = '';
    this.cdr.detectChanges();

    this.settingsService.salvarConfiguracoes(this.configData)
      .pipe(
        timeout(12000),
        finalize(() => {
          this.loadingConfig = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: () => {
          this.feedbackSuccess = true;
          this.feedbackMsg = 'Configurações de retenção atualizadas com sucesso!';
          this.cdr.detectChanges();
          setTimeout(() => {
            this.feedbackMsg = '';
            this.cdr.detectChanges();
          }, 5000);
        },
        error: (err) => {
          this.feedbackSuccess = false;
          this.feedbackMsg = 'Erro ao salvar configurações: ' + (err.error?.error || err.message);
          this.cdr.detectChanges();
        }
      });
  }
}

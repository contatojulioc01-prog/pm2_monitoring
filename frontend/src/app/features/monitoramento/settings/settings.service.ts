import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MonitoringSettings {
  heartbeat_retention_days: number;
  timezone: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private readonly apiUrl = '/api/settings';

  constructor(private http: HttpClient) {}

  obterConfiguracoes(): Observable<MonitoringSettings> {
    return this.http.get<MonitoringSettings>(this.apiUrl);
  }

  salvarConfiguracoes(dados: MonitoringSettings): Observable<MonitoringSettings> {
    return this.http.put<MonitoringSettings>(this.apiUrl, dados);
  }
}

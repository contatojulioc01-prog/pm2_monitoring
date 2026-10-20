import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MaintenanceRecord {
  id?: number;
  name: string;
  strategy: 'once' | 'weekly';
  start_at?: string;
  end_at?: string;
  weekdays?: string;
  start_time?: string;
  end_time?: string;
  active: boolean;
  monitor_ids?: number[];
  monitors?: Array<{ id: number; name: string }>;
  created_at?: string;
  updated_at?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MaintenancesService {
  private readonly apiUrl = '/api/maintenances';

  constructor(private http: HttpClient) {}

  listar(): Observable<MaintenanceRecord[]> {
    return this.http.get<MaintenanceRecord[]>(this.apiUrl);
  }

  obterMonitores(): Observable<any[]> {
    return this.http.get<any[]>('/api/monitors');
  }

  salvar(dados: Partial<MaintenanceRecord>): Observable<MaintenanceRecord> {
    return this.http.post<MaintenanceRecord>(this.apiUrl, dados);
  }

  atualizar(id: number, dados: Partial<MaintenanceRecord>): Observable<MaintenanceRecord> {
    return this.http.put<MaintenanceRecord>(`${this.apiUrl}/${id}`, dados);
  }

  excluir(id: number): Observable<{ ok: boolean }> {
    return this.http.delete<{ ok: boolean }>(`${this.apiUrl}/${id}`);
  }
}

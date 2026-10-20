import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SocketService, Monitor, Heartbeat, MonitorStats, Incident } from '../services/socket.service';

@Injectable({
  providedIn: 'root'
})
export class MonitorDetailService {
  private readonly apiUrl = '/api/monitors';

  constructor(
    private http: HttpClient,
    public socketService: SocketService
  ) {}

  obterMonitor(id: number): Observable<Monitor> {
    return this.http.get<Monitor>(`${this.apiUrl}/${id}`);
  }

  obterHeartbeats(id: number, limit = 60, from?: string): Observable<Heartbeat[]> {
    let url = `${this.apiUrl}/${id}/heartbeats?limit=${limit}`;
    if (from) url += `&from=${from}`;
    return this.http.get<Heartbeat[]>(url);
  }

  obterStats(id: number): Observable<MonitorStats> {
    return this.http.get<MonitorStats>(`${this.apiUrl}/${id}/stats`);
  }

  obterIncidentes(id: number): Observable<Incident[]> {
    return this.http.get<Incident[]>(`${this.apiUrl}/${id}/incidents`);
  }

  pausar(id: number): Observable<Monitor> {
    return this.http.post<Monitor>(`${this.apiUrl}/${id}/pause`, {});
  }

  retomar(id: number): Observable<Monitor> {
    return this.http.post<Monitor>(`${this.apiUrl}/${id}/resume`, {});
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

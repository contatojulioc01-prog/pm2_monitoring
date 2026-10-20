import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SocketService, Monitor, Heartbeat } from './services/socket.service';

@Injectable({
  providedIn: 'root'
})
export class MonitoramentoService {
  private readonly apiUrl = '/api/monitors';

  constructor(
    private http: HttpClient,
    public socketService: SocketService
  ) {}

  iniciarSocket(): void {
    this.socketService.connect();
  }

  encerrarSocket(): void {
    this.socketService.disconnect();
  }

  listarMonitores(): Observable<Monitor[]> {
    return this.http.get<Monitor[]>(this.apiUrl);
  }

  obterResumoBatimentos(): Observable<Record<number, Heartbeat[]>> {
    return this.http.get<Record<number, Heartbeat[]>>(`${this.apiUrl}/heartbeats/summary`);
  }

  obterMonitor(id: number): Observable<Monitor> {
    return this.http.get<Monitor>(`${this.apiUrl}/${id}`);
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

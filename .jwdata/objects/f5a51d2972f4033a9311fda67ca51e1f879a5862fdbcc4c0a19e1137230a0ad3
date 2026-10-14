import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Server } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  private get API(): string {
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/pm2-manager')) {
      return '/pm2-manager/api';
    }
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/doce-manager')) {
      return '/doce-manager/api';
    }
    const base = document.querySelector('base')?.getAttribute('href') ?? '/';
    return base.replace(/\/$/, '') + '/api';
  }

  constructor(private http: HttpClient) {}

  getServers(): Observable<Server[]> {
    return this.http.get<Server[]>(`${this.API}/servers`);
  }

  getServer(id: string): Observable<Server> {
    return this.http.get<Server>(`${this.API}/servers/${id}`);
  }

  createServer(server: Partial<Server>): Observable<Server> {
    return this.http.post<Server>(`${this.API}/servers`, server);
  }

  updateServer(id: string, server: Partial<Server>): Observable<Server> {
    return this.http.put<Server>(`${this.API}/servers/${id}`, server);
  }

  deleteServer(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.API}/servers/${id}`);
  }

  syncServer(id: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.API}/servers/${id}/sync`, {});
  }
}


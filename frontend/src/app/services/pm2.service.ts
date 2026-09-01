import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface Pm2Process {
  id: number;
  pid: number;
  name: string;
  status: 'online' | 'stopped' | 'errored' | 'stopping' | 'launching' | 'one-launch-status' | string;
  cpu: number;
  memory: number;
  restarts: number;
  uptime: number;
  createdAt: number;
  execPath: string;
  nodeVersion: string;
  execMode: string;
  instances: number;
  watch: boolean;
  logOut: string;
  logErr: string;
  namespace: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface SystemInfo {
  nodeVersion: string;
  platform: string;
  pm2Version: string;
  hostname: string;
  uptime: number;
  serverTime: string;
  totalMemory: number;
  freeMemory: number;
  cpus: number;
}

@Injectable({ providedIn: 'root' })
export class Pm2Service {
  /**
   * Resolve o base path da API dinamicamente a partir do document.baseURI.
   * Funciona tanto em desenvolvimento (localhost:6767/) quanto em produção
   * com proxy reverso IIS em subcaminho (ex: /pm2-manager/).
   * Ex: base href = "/pm2-manager/" → API = "/pm2-manager/api"
   * Ex: base href = "/"             → API = "/api"
   */
  private get API(): string {
    const base = document.querySelector('base')?.getAttribute('href') ?? '/';
    return base.replace(/\/$/, '') + '/api';
  }

  constructor(private http: HttpClient) {}

  getProcesses(): Observable<ApiResponse<Pm2Process[]>> {
    return this.http.get<ApiResponse<Pm2Process[]>>(`${this.API}/processes`);
  }

  getSystemInfo(): Observable<ApiResponse<SystemInfo>> {
    return this.http.get<ApiResponse<SystemInfo>>(`${this.API}/system`);
  }

  startProcess(id: number | string): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.API}/processes/${id}/start`, {});
  }

  stopProcess(id: number | string): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.API}/processes/${id}/stop`, {});
  }

  restartProcess(id: number | string): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.API}/processes/${id}/restart`, {});
  }

  reloadProcess(id: number | string): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.API}/processes/${id}/reload`, {});
  }

  deleteProcess(id: number | string): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.API}/processes/${id}`);
  }

  describeProcess(id: number | string): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(`${this.API}/processes/${id}/describe`);
  }

  getLogs(id: number | string, lines = 100): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(`${this.API}/processes/${id}/logs?lines=${lines}`);
  }

  save(): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.API}/save`, {});
  }

  flush(): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.API}/flush`, {});
  }

  startup(): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.API}/startup`, {});
  }

  launch(data: {
    script: string;
    name?: string;
    instances?: string | number;
    execMode?: string;
    watch?: boolean;
    args?: string;
  }): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.API}/launch`, data);
  }

  streamProcesses(): EventSource {
    return new EventSource(`${this.API}/processes/stream`);
  }

  streamLogs(id: number | string): EventSource {
    return new EventSource(`${this.API}/processes/${id}/logs/stream`);
  }
}

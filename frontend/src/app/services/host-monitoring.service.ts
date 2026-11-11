import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

export interface HostProcess {
  pid: number;
  processName: string;
  displayName: string;
  isPm2: boolean;
  pm2Details?: {
    pm_id: number;
    name: string;
    alias: string;
    status: string;
    instances: number;
    uptime: number;
  } | null;
  cpuPercent: number;
  memMB: number;
  memPercent: number;
  workingSetBytes: number;
}

export interface HostMetricsStream {
  timestamp: string;
  globalCpu: {
    usedPercent: number;
    cores: number;
    model: string;
  };
  globalMemory: {
    totalBytes: number;
    usedBytes: number;
    freeBytes: number;
    usedMB: number;
    totalMB: number;
    usedGB: number;
    totalGB: number;
    usedPercent: number;
  };
  totalProcesses: number;
  pm2Count: number;
  processes: HostProcess[];
  session?: HostSessionStatus;
}

export interface HostTriggerConfig {
  enabled: boolean;
  cpuThreshold: number;
  ramThreshold: number;
  durationMinutes: number;
  cooldownMinutes: number;
}

export interface HostSessionStatus {
  id?: string | null;
  active: boolean;
  mode: 'idle' | 'manual_infinite' | 'manual_timed' | 'auto_triggered';
  startedAt: string | null;
  endsAt: string | null;
  remainingSeconds: number | null;
  durationMinutes: number | null;
  triggerReason: string | null;
  triggerConfig: HostTriggerConfig;
  globalSnapshot?: {
    cpuUsage: number;
    memory: any;
  };
}

export interface HistoricalSession {
  id: string;
  mode: string;
  durationMinutes: number | null;
  startedAt: string;
  endsAt: string | null;
  status: string;
  triggerReason: string | null;
  peakCpu: number;
  peakRam: number;
  avgCpu: number;
  avgRam: number;
  topProcessName: string | null;
  topProcessPid: number | null;
  topProcessCpu: number;
  topProcessRam: number;
  samplesCount: number;
  createdAt: string;
}

export interface HistoricalSnapshot {
  id: number;
  sessionId: string;
  cpuPercent: number;
  ramPercent: number;
  ramUsedMB: number;
  ramTotalMB: number;
  pm2Count: number;
  totalProcesses: number;
  capturedAt: string;
  topProcesses: {
    pid: number;
    name: string;
    rawName: string;
    isPm2: boolean;
    cpu: number;
    ramMB: number;
    ramPercent: number;
  }[];
}

export interface ProcessRanking {
  pid: number;
  name: string;
  rawName: string;
  isPm2: boolean;
  peakCpu: number;
  avgCpu: number;
  peakRamMB: number;
  avgRamMB: number;
  occurrences: number;
}

export interface SessionDetailsResponse {
  success: boolean;
  session: HistoricalSession;
  snapshots: HistoricalSnapshot[];
  processRankings: ProcessRanking[];
}

@Injectable({
  providedIn: 'root'
})
export class HostMonitoringService {
  private http = inject(HttpClient);
  private socket: Socket | null = null;

  // Signals reativos
  readonly sessionStatus = signal<HostSessionStatus>({
    id: null,
    active: false,
    mode: 'idle',
    startedAt: null,
    endsAt: null,
    remainingSeconds: null,
    durationMinutes: null,
    triggerReason: null,
    triggerConfig: {
      enabled: true,
      cpuThreshold: 90,
      ramThreshold: 90,
      durationMinutes: 10,
      cooldownMinutes: 15
    }
  });

  readonly liveMetrics = signal<HostMetricsStream | null>(null);
  readonly isConnected = signal<boolean>(false);
  readonly lastAlert = signal<string | null>(null);

  constructor() {
    this.initSocket();
    this.fetchStatus();
  }

  private initSocket(): void {
    try {
      const isDev = typeof window !== 'undefined' && window.location.port === '4200';
      const isPm2 = typeof window !== 'undefined' && window.location.pathname.startsWith('/pm2-manager');
      const isDoce = typeof window !== 'undefined' && window.location.pathname.startsWith('/doce-manager');

      let socketPath = '/socket.io';
      if (!isDev) {
        if (isPm2) {
          socketPath = '/pm2-manager/socket.io';
        } else if (isDoce) {
          socketPath = '/doce-manager/socket.io';
        }
      }

      const socketUrl = isDev ? `http://${window.location.hostname}:6767` : undefined;

      this.socket = io(socketUrl, {
        path: socketPath,
        transports: ['polling', 'websocket'],
        reconnection: true,
        reconnectionAttempts: Infinity,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        timeout: 20000
      });

      this.socket.on('connect', () => {
        this.isConnected.set(true);
      });

      this.socket.on('disconnect', () => {
        this.isConnected.set(false);
      });

      this.socket.on('host:metrics:stream', (data: HostMetricsStream) => {
        this.liveMetrics.set(data);
        if (data.session) {
          this.sessionStatus.set(data.session);
        }
      });

      this.socket.on('host:session:state', (payload: { session: HostSessionStatus; stoppedReason?: string }) => {
        if (payload?.session) {
          this.sessionStatus.set(payload.session);
          if (payload.session.triggerReason) {
            this.lastAlert.set(payload.session.triggerReason);
          }
        }
      });
    } catch (e) {
      console.error('Erro ao conectar socket de monitoramento do host:', e);
    }
  }

  fetchStatus(): void {
    this.http.get<{ success: boolean } & HostSessionStatus>('/api/host/status').subscribe({
      next: (res) => {
        if (res && res.success) {
          this.sessionStatus.set(res);
        }
      },
      error: (err) => console.error('Erro ao obter status do host:', err)
    });
  }

  fetchSnapshot(limit = 40): Observable<{ success: boolean; data: HostMetricsStream }> {
    return this.http.get<{ success: boolean; data: HostMetricsStream }>(`/api/host/snapshot?limit=${limit}`);
  }

  startSession(mode: 'manual_infinite' | 'manual_timed', durationMinutes?: number): Observable<any> {
    return this.http.post('/api/host/session/start', { mode, durationMinutes });
  }

  stopSession(): Observable<any> {
    return this.http.post('/api/host/session/stop', {});
  }

  updateTriggerConfig(config: Partial<HostTriggerConfig>): Observable<any> {
    return this.http.post('/api/host/trigger/config', config);
  }

  // ── Métodos do Histórico ──
  getHistorySessions(limit = 50, offset = 0, mode?: string): Observable<{ success: boolean; sessions: HistoricalSession[]; total: number }> {
    let url = `/api/host/history/sessions?limit=${limit}&offset=${offset}`;
    if (mode) url += `&mode=${encodeURIComponent(mode)}`;
    return this.http.get<{ success: boolean; sessions: HistoricalSession[]; total: number }>(url);
  }

  getSessionDetails(sessionId: string): Observable<SessionDetailsResponse> {
    return this.http.get<SessionDetailsResponse>(`/api/host/history/sessions/${encodeURIComponent(sessionId)}`);
  }

  deleteHistorySession(sessionId: string): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`/api/host/history/sessions/${encodeURIComponent(sessionId)}`);
  }

  clearAllHistory(): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`/api/host/history/clear`);
  }
}

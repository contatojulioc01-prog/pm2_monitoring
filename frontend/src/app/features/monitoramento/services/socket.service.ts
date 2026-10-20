import { Injectable, signal } from '@angular/core';
import { io, Socket } from 'socket.io-client';

export interface Monitor {
  id: number;
  name: string;
  type: string;
  hostname?: string;
  url?: string;
  port?: number;
  method: string;
  keyword?: string;
  invert_keyword: boolean;
  expected_status: string;
  headers?: any;
  body?: string;
  ignore_tls: boolean;
  timeout_s: number;
  interval_s: number;
  retry_interval_s: number;
  max_retries: number;
  resend_interval_min: number;
  cert_expiry_alert: boolean;
  parent_id?: number | null;
  push_token?: string;
  config?: any;
  active: boolean;
  status?: number | null; // 0 DOWN, 1 UP, 2 PENDING, 3 MAINTENANCE
  lastBeatTime?: string;
  ping_ms?: number;
  msg?: string;
  notification_ids?: number[];
  group_name?: string | null;
  order_index?: number;
  tls_info?: TlsInfo | null;
}

export interface CustomGroup {
  id: number;
  name: string;
  icon: string;
  order_index: number;
}

export interface Heartbeat {
  id: number;
  monitor_id: number;
  status: number;
  msg?: string;
  ping_ms?: number;
  important: boolean;
  duration_s?: number;
  time: string;
}

export interface MonitorStats {
  uptime24h: number;
  uptime7d: number;
  uptime30d: number;
  uptime365d: number;
  pingAvg: number;
  pingMin: number;
  pingMax: number;
}

export interface Incident {
  id: number;
  monitor_id: number;
  started_at: string;
  ended_at?: string | null;
  cause?: string;
  acknowledged: boolean;
}

export interface TlsInfo {
  monitor_id: number;
  valid_to?: string;
  issuer?: string;
  last_checked?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket | null = null;

  connected = signal<boolean>(false);
  monitors = signal<Monitor[]>([]);
  heartbeats = signal<Record<number, Heartbeat[]>>({});
  stats = signal<Record<number, MonitorStats>>({});
  incidents = signal<Incident[]>([]);
  certs = signal<TlsInfo[]>([]);
  customGroups = signal<CustomGroup[]>([]);

  constructor() {
    this.connect();
  }

  connect(): void {
    if (this.socket) return;

    const isDev = typeof window !== 'undefined' && window.location.port === '4200';
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    const baseHref = typeof document !== 'undefined' ? (document.querySelector('base')?.getAttribute('href') || '') : '';

    const isPm2 = pathname.includes('/pm2-manager') || baseHref.includes('/pm2-manager');
    const isDoce = pathname.includes('/doce-manager') || baseHref.includes('/doce-manager');

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
      this.connected.set(true);
      const transport = this.socket?.io?.engine?.transport?.name || 'unknown';
      console.log(`[SocketService] Conectado ao servidor via ${transport} (path: ${socketPath})`);
    });

    this.socket.io?.engine?.on('upgrade', (transport: any) => {
      console.log(`[SocketService] Conexão atualizada para ${transport.name}`);
    });

    this.socket.on('disconnect', (reason: string) => {
      this.connected.set(false);
      console.warn(`[SocketService] Desconectado: ${reason}`);
    });

    this.socket.on('connect_error', (err: any) => {
      this.connected.set(false);
      console.warn('[SocketService] Erro de conexão socket:', err.message || err);
    });

    this.socket.on('monitorList', (list: Monitor[]) => {
      this.monitors.set(list);
    });

    this.socket.on('monitorUpdated', (updated: Monitor) => {
      this.monitors.update(current => {
        const idx = current.findIndex(m => m.id === updated.id);
        if (idx >= 0) {
          const next = [...current];
          next[idx] = { ...next[idx], ...updated };
          return next;
        }
        return [...current, updated];
      });
    });

    this.socket.on('monitorDeleted', (deletedId: number) => {
      this.monitors.update(current => current.filter(m => m.id !== deletedId));
    });

    this.socket.on('heartbeatList', (map: Record<number, Heartbeat[]>) => {
      this.heartbeats.set(map);
    });

    this.socket.on('statsList', (map: Record<number, MonitorStats>) => {
      this.stats.set(map);
    });

    this.socket.on('incidentList', (list: Incident[]) => {
      this.incidents.set(list);
    });

    this.socket.on('certList', (list: TlsInfo[]) => {
      this.certs.set(list);
    });

    this.socket.on('customGroupList', (list: CustomGroup[]) => {
      this.customGroups.set(list);
    });

    this.socket.on('heartbeat', (beat: Heartbeat) => {
      this.heartbeats.update(current => {
        const list = current[beat.monitor_id] ? [...current[beat.monitor_id]] : [];
        list.push(beat);
        if (list.length > 60) list.shift();
        return { ...current, [beat.monitor_id]: list };
      });

      this.monitors.update(current =>
        current.map(m => m.id === beat.monitor_id
          ? { ...m, status: beat.status, lastBeatTime: beat.time, ping_ms: beat.ping_ms, msg: beat.msg }
          : m
        )
      );
    });

    this.socket.on('stats', (data: { monitorId: number, stats: MonitorStats }) => {
      this.stats.update(current => ({
        ...current,
        [data.monitorId]: data.stats
      }));
    });

    this.socket.on('incident', (incident: Incident) => {
      this.incidents.update(current => {
        const idx = current.findIndex(i => i.id === incident.id);
        if (idx >= 0) {
          const next = [...current];
          next[idx] = incident;
          return next.filter(i => !i.ended_at);
        }
        return [incident, ...current];
      });
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.connected.set(false);
    }
  }
}

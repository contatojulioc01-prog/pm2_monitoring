import { Injectable } from '@angular/core';
import { SocketService, Monitor, Incident } from '../services/socket.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(public socketService: SocketService) {}

  obterMonitores(): Monitor[] {
    return this.socketService.monitors();
  }

  obterIncidentes(): Incident[] {
    return this.socketService.incidents();
  }
}

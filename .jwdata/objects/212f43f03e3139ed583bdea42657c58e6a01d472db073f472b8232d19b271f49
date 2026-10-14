import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
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

  getGroups(serverId?: string): Observable<Group[]> {
    let params = new HttpParams();
    if (serverId) params = params.set('serverId', serverId);
    return this.http.get<Group[]>(`${this.API}/groups`, { params });
  }

  getGroup(id: string): Observable<Group> {
    return this.http.get<Group>(`${this.API}/groups/${id}`);
  }
}


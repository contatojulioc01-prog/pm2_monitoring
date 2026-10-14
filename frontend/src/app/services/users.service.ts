import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Permission } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
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

  getUsers(serverId?: string): Observable<User[]> {
    let params = new HttpParams();
    if (serverId) params = params.set('serverId', serverId);
    return this.http.get<User[]>(`${this.API}/users`, { params });
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.API}/users/${id}`);
  }

  getUserPermissions(id: string): Observable<Permission[]> {
    return this.http.get<Permission[]>(`${this.API}/users/${id}/permissions`);
  }
}


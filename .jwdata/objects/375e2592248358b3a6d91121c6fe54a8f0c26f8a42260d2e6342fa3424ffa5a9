import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Folder, FolderNode, Permission } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class FoldersService {
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

  getFolders(serverId?: string, parentPath?: string): Observable<{ folders: Folder[]; tree: FolderNode[] }> {
    let params = new HttpParams();
    if (serverId) params = params.set('serverId', serverId);
    if (parentPath !== undefined) params = params.set('parentPath', parentPath);
    return this.http.get<{ folders: Folder[]; tree: FolderNode[] }>(`${this.API}/folders`, { params });
  }

  getFlatFolders(serverId?: string): Observable<Folder[]> {
    let params = new HttpParams();
    if (serverId) params = params.set('serverId', serverId);
    return this.http.get<Folder[]>(`${this.API}/folders/flat`, { params });
  }

  getPermissions(serverId?: string): Observable<Permission[]> {
    let params = new HttpParams();
    if (serverId) params = params.set('serverId', serverId);
    return this.http.get<Permission[]>(`${this.API}/folders/permissions`, { params });
  }

  getFolderPermissions(path: string, serverId: string): Observable<Permission[]> {
    let params = new HttpParams()
      .set('path', path)
      .set('serverId', serverId);
    return this.http.get<Permission[]>(`${this.API}/folders/permissions/by-path`, { params });
  }
}


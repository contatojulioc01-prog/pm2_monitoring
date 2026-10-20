import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomGroup } from '../services/socket.service';

@Injectable({
  providedIn: 'root'
})
export class GroupFormService {
  private readonly apiUrl = '/api/monitors/custom-groups';

  constructor(private http: HttpClient) {}

  listarGrupos(): Observable<CustomGroup[]> {
    return this.http.get<CustomGroup[]>(this.apiUrl);
  }

  criarGrupo(dados: { name: string; icon: string }): Observable<CustomGroup> {
    return this.http.post<CustomGroup>(this.apiUrl, dados);
  }

  atualizarGrupo(id: number, dados: { name: string; icon: string }): Observable<CustomGroup> {
    return this.http.put<CustomGroup>(`${this.apiUrl}/${id}`, dados);
  }

  excluirGrupo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  reordenarGrupos(groups: { id: number; order_index: number }[]): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/reorder`, { groups });
  }

  moverMonitor(monitorId: number, group_name: string | null, order_index?: number): Observable<any> {
    return this.http.patch<any>('/api/monitors/move', { monitorId, group_name, order_index });
  }

  reordenarMonitores(items: { id: number; group_name: string | null; order_index: number }[]): Observable<any> {
    return this.http.patch<any>('/api/monitors/reorder', { items });
  }
}

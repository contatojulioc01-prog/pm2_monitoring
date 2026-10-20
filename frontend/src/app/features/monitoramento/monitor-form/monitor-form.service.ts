import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitorFormService {
  private readonly apiUrl = '/api/monitors';

  constructor(private http: HttpClient) {}

  obterPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  salvar(dados: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, dados);
  }

  atualizar(id: number, dados: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, dados);
  }

  listarNotificacoes(): Observable<any[]> {
    return this.http.get<any[]>('/api/notifications');
  }

  listarMonitores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  testarSonda(dados: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/test`, dados);
  }

  listarGruposPersonalizados(): Observable<any[]> {
    return this.http.get<any[]>('/api/monitors/custom-groups');
  }
}

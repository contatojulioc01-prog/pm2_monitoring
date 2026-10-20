import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private readonly apiUrl = '/api/notifications';

  constructor(private http: HttpClient) {}

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  obterPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  salvar(dados: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, dados);
  }

  atualizar(id: number, dados: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, dados);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  testar(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}/test`, {});
  }

  testarTemp(type: string, config: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/test-temp`, { type, config });
  }
}

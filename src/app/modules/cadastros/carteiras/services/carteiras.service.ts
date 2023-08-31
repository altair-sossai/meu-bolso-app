import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarteiraCommand } from '../commands/carteira-command';
import { Carteira, PaginationResult } from '../models/carteira';
import { CarteiraQueryCommand } from '../query-command/carteira-query-command';

@Injectable({
  providedIn: 'root'
})
export class CarteirasService {

  constructor(private http: HttpClient) {
  }

  get(query: CarteiraQueryCommand): Observable<PaginationResult<Carteira>> {
    return this.http.get<PaginationResult<Carteira>>(`${environment.apiUrl}/carteiras`, { params: query.params() });
  }

  find(id: string): Observable<Carteira> {
    return this.http.get<Carteira>(`${environment.apiUrl}/carteiras/${id}`);
  }

  post(command: CarteiraCommand): Observable<Carteira> {
    return this.http.post<Carteira>(`${environment.apiUrl}/carteiras`, command);
  }

  put(command: CarteiraCommand): Observable<Carteira> {
    return this.http.put<Carteira>(`${environment.apiUrl}/carteiras`, command);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/carteiras/${id}`);
  }
}

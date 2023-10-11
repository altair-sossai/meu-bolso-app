import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationCommand } from 'src/app/infrastructure/pagination/pagination-command';
import { PaginationResult } from 'src/app/infrastructure/pagination/pagination-result';
import { Categoria } from '../models/categoria';
import { CategoriaQueryCommand } from '../query-command/categoria-query-command';
import { environment } from 'src/environments/environment';
import { CategoriaCommand } from '../commands/categoria-command';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) {
   }

   get(query: PaginationCommand<CategoriaQueryCommand>): Observable<PaginationResult<Categoria>> {
    return this.http.get<PaginationResult<Categoria>>(`${environment.apiUrl}/categorias`, { params: query.params() });
   }

   find(id: string): Observable<Categoria> {
    return this.http.get<Categoria>(`${environment.apiUrl}/categorias/${id}`);
   }

   post(command: CategoriaCommand): Observable<Categoria> {
    return this.http.post<Categoria>(`${environment.apiUrl}/categorias`, command);
   }

   put(command: CategoriaCommand): Observable<Categoria> {
    return this.http.put<Categoria>(`${environment.apiUrl}/categorias`, command);
   }

   delete(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/categorias/${id}`);
   }
}

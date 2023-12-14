import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../interface/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private apiURL = 'http://localhost:3100';

  constructor(private http: HttpClient) { }

    getCategorias(): Observable<Categoria[]> {
      return this.http.get<Categoria[]>(this.apiURL + '/categorias');

    }

}
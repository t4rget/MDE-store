import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Categoria } from '../interface/categoria';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private apiURL = 'http://localhost:3100';

  public seleccionCategorias = ["01","03","04","05","07","08"];
  public categoriaSeleccionadas = [];

  constructor(private http: HttpClient) { }

    getCategorias(): Observable<Categoria[]> {
      return this.http.get<Categoria[]>(this.apiURL + '/categorias') // /Scategorias son las categorias seleccionadas, deberiamos generar un array nuevo
  /*      .pipe(
          map((categorias : Categoria[]) => {
            return categorias.filter(categoria => this.selectorCategorias.includes(categoria.COD_STA29));
    })
        );
*/  
    }

    getSelectorcategorias(): Observable<Categoria[]> {
      return this.http.get<Categoria[]>(this.apiURL + '/categorias') // /Scategorias son las categorias seleccionadas, deberiamos generar un array nuevo
       .pipe(
         map((categoriaSeleccionadas : Categoria[]) => {
           return categoriaSeleccionadas.filter(categoriaSeleccionadas => this.seleccionCategorias.includes(categoriaSeleccionadas.COD_STA29)); 
           
         })
         
        );
    }

}
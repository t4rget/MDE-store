import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Categoria } from '../interface/categoria';
import { __values } from 'tslib';
import { SubCategoria } from '../interface/subcategoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private apiURL = 'http://localhost:3100';

  public seleccionCategorias = ["01","03","04","05","07","08"];
  //public categoriaSeleccionadas = [];

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

    getSubcategorias(): Observable<SubCategoria[]> {
      return this.http.get<SubCategoria[]>(this.apiURL + '/categorias') // /Scategorias son las categorias seleccionadas, deberiamos generar un array nuevo
       .pipe(
         map((subcategoriaSeleccionadas : SubCategoria[]) => {
           return subcategoriaSeleccionadas.filter(subcategoriaSeleccionadas => this.seleccionCategorias.includes(subcategoriaSeleccionadas.COD_STA29)); 
           
         })
         
        );
    }

}
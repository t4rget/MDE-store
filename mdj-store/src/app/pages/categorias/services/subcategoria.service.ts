import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SubCategoria } from '../interface/subcategoria';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  private apiURL = 'http://localhost:3100';

  public seleccionCategorias = ["01","03","04","05","07","08"];
  private subcategoriaSeleccionada : any[] = []; 

  constructor(private http: HttpClient) { }

  getFetchSubcategorias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + '/categorias') // /Scategorias son las categorias seleccionadas, deberiamos generar un array nuevo
     /*.pipe(
       map((subcategoriaSeleccionadas : any[]) => {
         return subcategoriaSeleccionadas.filter(subcategoria => this.seleccionCategorias.includes(subcategoria.COD_STA29)); 
         
       })
       
      );*/
  }

  setSubcategorias(data: any[]): void {
    this.subcategoriaSeleccionada = data;
  }

  getSubcategorias(): any[] {
    return this.subcategoriaSeleccionada;
  }

}

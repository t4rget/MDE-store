import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Categorias } from '../interface/categorias';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private apiUrl = 'http://localhost:3100';

  public categoriaList: Categorias[] = [];
  private allDatos: Categorias[] = [];
  public categoriaSettings: string[] = []; //SE INTENTA TRAER DESDE LA API 

  constructor(private http: HttpClient) {}

  /*fetchCategorias(): Observable<Categorias[]> {      ////////////METODO OBSOLETO DE LLAMADA A LA API    //////////////////
    return this.http.get<Categorias[]>(`${this.apiUrl}/categorias`)
  } */

  fetchCategorias(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(`${this.apiUrl}/categorias`)
      .pipe(
        map((element: Categorias[]) => {
          this.allDatos = element;
          this.fetchCategoriaSettings(); //Lamma al metodo Settings
          this.filtrarCategorias();  // Llama al método de filtrado
          return element;
        })
      );
  }

  fetchCategoriaSettings(): any {  ///// LLAMAR DESDE ON INIT PARA GUARDAR categoriaSetting /////
    return this.http.get<any[]>(`${this.apiUrl}/categoriaSettings`)
      .pipe(
        map((codcat: any) => {
          this.categoriaSettings=codcat;
          //console.log(this.categoriaSettings);
          return codcat;
        })
      );
  }

  filtrarCategorias(): void {
    // Filtra los elementos de allDatos donde cod_id coincide con algún elemento de categoriaSelect
    this.categoriaList = this.allDatos.filter((element) =>
      this.categoriaSettings.includes(element.cod_id)
    );
  }

  getAllDatos(): Categorias[] {
    return this.allDatos;
  }

  setCategoria(categoria: Categorias): void {
    this.allDatos.push(categoria);
  }

  /*filtrarCategorias(): void {
    this.subCategoria = this.allDatos.filter((element) =>
      this.categoriaSelect.includes(element.cod_id)
    );
  }*/


}
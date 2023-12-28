import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../interface/producto';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = 'http://localhost:3100';
  private allProducts: Productos[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Productos[]> {    // OBTIENE TODOS LOS PRODUCTOS
    return this.http.get<Productos[]>(`${this.apiURL}/products`)
      // .pipe(
      //   map((product: Productos[]) => {
      //     this.allProducts = product;
      //     console.log(this.allProducts);
      //     return product;
      //   })
      // );
  }

  // FALTAN METODOS DE FILTRAR PRODUCTOS POR RUBRO Y SUBRUBROS

}

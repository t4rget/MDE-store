import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../interface/producto';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private apiURL = environment.apiUrl;
  private stockProducts: Productos[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Productos[]> {    // OBTIENE TODOS LOS PRODUCTOS
    return this.http.get<Productos[]>(`${this.apiURL}/products/all`)
      // .pipe(
      //   map((product: Productos[]) => {
      //     this.allProducts = product;
      //     console.log(this.allProducts);
      //     return product;
      //   })
      // );
  }

  // FALTAN METODOS DE FILTRAR PRODUCTOS POR RUBRO Y SUBRUBROS

  // FILTRADO DE PRODUCTOS CON STOCK

  getStockProducts(): Observable<Productos[]> {
    return this.http.get<Productos []>(`${this.apiURL}/products/all`)
      .pipe(
        tap((productos: Productos[]) => {
          this.stockProducts = productos.filter(product => product.stock_prod > 0);
          //console.log(productos);
          //console.log('stockProductsServices:', this.stockProducts);
          //return productos;
        })
      );
    }

    // Agrega este método para obtener los productos con stock filtrados
    getFilteredStockProducts(): Productos[] {
      return this.stockProducts;
    }

  getAPI(): any {
    return this.apiURL;
  }

}

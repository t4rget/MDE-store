import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../interface/producto';
import { Observable, Subject, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private apiURL = environment.apiUrl;
  private stockProducts: Productos[] = [];
  private stockProductsSubject = new Subject<Productos[]>();
  // Nueva propiedad observable para cambios en los productos con stock
  stockProductsChanged = this.stockProductsSubject.asObservable();

  constructor(private http: HttpClient) { }

  // Método para obtener productos con stock
  getStockProducts(): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${this.apiURL}/products/all`).pipe(
      tap((productos: Productos[]) => {
        this.stockProducts = productos.filter(product => product.stock_prod > 0);
        this.stockProductsSubject.next(this.stockProducts); // Notificar cambios
      })
    );
  }

  getProductById(id: number): Observable<Productos> {
    return this.http.get<Productos>(`${this.apiURL}/products/${id}`);
  }

  // Método para guardar productos
  saveProducts(products: Productos[]): Observable<string> {
    return this.http.post<string>(`${this.apiURL}/products/save`, products);
  }

  saveProduct(product: Productos): Observable<string> {
    // Puedes ajustar la URL según la estructura de tu API
    const saveProductURL = `${this.apiURL}/products/${product.idcodproducto}`;

    return this.http.post<string>(saveProductURL, product);
  }


}

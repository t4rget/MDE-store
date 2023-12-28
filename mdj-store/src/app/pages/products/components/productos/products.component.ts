import { Component, OnInit } from '@angular/core';
import { Productos } from '../../interface/producto';
import { ProductsService } from '../../services/products.service';
import { tap } from 'rxjs/operators';
//import { tap } from 'rxjs/operators';

//import { Product } from './interface/producto.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public allProducts!: Productos[];

  constructor(private productSVC : ProductsService) { }

    ngOnInit(): void {
         this.productSVC.getProducts()
          //  .pipe(
          //    tap((allProducts: Productos[]) => this.allProducts = allProducts)
          //  )
          .subscribe(
            {
              next: (data: Productos[]) => {
                this.allProducts = data;
                //console.table(this.allProducts);
              },
              error: (error: any) => {
                console.error('Error al obtener los productos', error);
              }
            }
          );
    }
 
 
  // ngOnInit(): void {
  //   this.productSVC.getProducts()
  //   .pipe(
  //     tap((allProducts: Producto[]) => this.allProducts = allProducts)
  //   )
  //   .subscribe();
  //   console.log(this.allProducts);
  // }

}

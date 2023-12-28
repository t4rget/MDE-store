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
  public stockProducts!: Productos[];

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

              /*  this.productSVC.getFilteredStockProducts()
                console.table(this.stockProducts);
                  /*.subscribe(
                    {
                      next: (produc: Productos[]) => {
                        this.stockProducts = produc;
                        console.table(this.stockProducts);
                      },
                      error: (error: any) => {
                        console.error(error);
                      }
                    }

                  )*/
                this.productSVC.getStockProducts()
                  .subscribe(
                    {
                      next: (stockProducts: Productos[]) => {
                        this.stockProducts = stockProducts.filter(stock => stock.stock > 0);
                        console.log('stockproductscomponent', this.stockProducts);
                      },
                      error: (error: any) => {
                        console.error('Error al obtener los productos con stock', error);
                      }
                    }
                  );
                },
              error: (error: any) => {
                console.error('Error al obtener los productos', error);
              }
            }
          );
          /*this.productSVC.getStockProducts().subscribe({
            next: (data: Productos[]) => {
              this.stockProducts = data;
              console.log('stockProducts:', this.stockProducts);
            },
            error: (error: any) => {
              console.error('Error al obtener los productos con stock', error);
            }
          });*/
          /*this.stockProducts = this.productSVC.getFilteredStockProducts()
            .subscribe(
              {
                next: (data : Productos) => {
                  this.stockProducts = data;
                  console.log('filtered', this.stockProducts);
                },
                error: (error: any) => {
                  console.error('Error getfilered', error)
                }
              }
            );*/

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

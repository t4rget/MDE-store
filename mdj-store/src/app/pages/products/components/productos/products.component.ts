import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Productos } from '../../interface/producto';
import { ProductsService } from '../../services/products.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public stockProducts!: Productos[];
  
  searchResultMessage: string = '';
  searchResultMatch: boolean = true;

  // BUSCADOR
  productsSearched: Productos[] = [];


  constructor(private productSVC : ProductsService, private searchSVC : SearchService) { }

  ngOnInit(): void {
    // Obtener los productos con stock
    this.productSVC.getStockProducts().subscribe((data: Productos[]) => {
      this.stockProducts = data;
      this.filterProducts();
      console.log("PRODSEARCH", this.productsSearched);
    });
  
    // Suscribirse a cambios en los términos de búsqueda
    this.searchSVC.inputDataChanged.subscribe(() => {
      this.filterProducts();
      console.log("PRODSEARCH", this.productsSearched);
    });
  }
  
  filterProducts(): void {
    // Filtrar productos con stock
    const stockProducts = this.stockProducts.filter(product => product.stock_prod > 0);
  
    // Filtrar productos cuando se recibe un cambio en el término de búsqueda
    const searchTerm = this.searchSVC.getInputData().toLowerCase();
  
    if (searchTerm) {
      this.productsSearched = stockProducts.filter(
        (product) =>
          product.desc_prod.toLowerCase().includes(searchTerm) ||
          product.desca_prod.toLowerCase().includes(searchTerm)
      );
  
      this.searchResultMatch = this.productsSearched.length > 0;
      this.searchResultMessage = this.searchResultMatch ? '' : 'No se encontraron resultados';
    } else {
      // Si no hay término de búsqueda, mostrar todos los productos con stock
      this.productsSearched = [...stockProducts];
      this.searchResultMatch = true;
      this.searchResultMessage = '';
    }
  }


}

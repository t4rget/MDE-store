import { Component } from '@angular/core';
import { Productos } from './pages/products/interface/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdj-store';

  currentSearchTerm: string = '';

  onSearchTermChanged(term: string): void {
    this.currentSearchTerm = term;
  }

  onFilteredProductsChanged(filteredProducts: Productos[]): void {
    // Manejar los productos filtrados aquí
    console.log('Filtered products:', filteredProducts);
  }


}

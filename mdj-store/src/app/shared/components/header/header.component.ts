import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Productos } from 'src/app/pages/products/interface/producto';
import { ProductsService } from 'src/app/pages/products/services/products.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  searchTerm: string = '';

  constructor(private searchSVC: SearchService) {}

  updateSharedData(): void {
    this.searchSVC.setInputData(this.searchTerm);
    console.log("header", this.searchTerm);
  }

}
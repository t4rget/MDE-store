import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/productos/products.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { SearchService } from 'src/app/shared/services/search.service';


@NgModule({
  declarations: [
    ProductsComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    ProductsComponent
  ],
  providers: [
    SearchService
  ]
})
export class ProductsModule { }
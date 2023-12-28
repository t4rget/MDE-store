import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/productos/products.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ProductsComponent

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }

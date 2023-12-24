import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    MaterialModule,
    
  ],
  exports: [
    CategoriasComponent
  ]
})
export class CategoriasModule { }

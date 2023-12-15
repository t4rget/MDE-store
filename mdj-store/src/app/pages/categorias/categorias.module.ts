import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    CategoriasComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    MaterialModule
  ],
  exports: [
    CategoriaComponent,
  ]
})
export class CategoriasModule { }

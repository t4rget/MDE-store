import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { CategoriaComponent } from './components/categoria.component';
import { MaterialModule } from 'src/app/material.module';
import { SubcategoriaComponent } from './components/subcategoria.component';
import { SubcategoriaService } from './services/subcategoria.service';


@NgModule({
  declarations: [
    CategoriasComponent,
    CategoriaComponent,
    SubcategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    MaterialModule,
    
  ],
  exports: [
    //CategoriaComponent,
    CategoriasComponent
  ]
})
export class CategoriasModule { }

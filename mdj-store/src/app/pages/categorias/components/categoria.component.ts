import { Component, Input, OnInit, Output } from '@angular/core';
import { Categoria } from '../interface/categoria';
import { SubCategoria } from '../interface/subcategoria';
import { CategoriasComponent } from '../categorias.component';
import { CategoriasService } from '../services/categorias.service';
import { SubcategoriaService } from '../services/subcategoria.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  @Input() categoria!: Categoria;

  @Input() subcategorias!: SubCategoria[]; // IMPORTACION DE COMPONENT SUBCATEGORIA

  //subcategorias!: SubCategoria[];

  constructor(public subcategoriaSvc : SubcategoriaService) {
  }
  
  ngOnInit(): void {
    /*this.subcategoriaSvc.getSubcategorias()
    .pipe(
      tap( res => console.log(res))
    )
  /*  .pipe(
      tap((subcategorias: SubCategoria[]) => this.subcategorias = subcategorias)
     )
    .subscribe();*/
  }
  

}

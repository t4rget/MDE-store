import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './services/categorias.service';
import { tap } from 'rxjs/operators';
import { Categoria } from './interface/categoria';
import { SubCategoria } from './interface/subcategoria';
import { SubcategoriaService } from './services/subcategoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categorias!: Categoria[];
  subcategorias!: SubCategoria[];
  

  constructor(private categoriaSvc: CategoriasService, private subcategoriaSvc: SubcategoriaService) {}

  /*ngOnInit(): void {
    this.categoriaSvc.getCategorias()
  //  .pipe(
  //    tap( res => console.log(res))
  //  )
    .pipe(
      tap((categorias: Categoria[]) => this.categorias = categorias)
     )
    .subscribe();
  }*/

  ngOnInit(): void {
   /* this.subcategoriaSvc.getSubcategorias()
  //  .pipe(
  //    tap( res => console.log(res))
  //  )
    .pipe(
      tap((subcategorias: SubCategoria[]) => this.subcategorias = subcategorias)
     )
    .subscribe();
    */  }

}

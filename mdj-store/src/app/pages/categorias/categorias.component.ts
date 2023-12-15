import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './services/categorias.service';
import { tap } from 'rxjs/operators';
import { Categoria } from './interface/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categorias!: Categoria[];

  constructor(private categoriaSvc: CategoriasService) {}

  ngOnInit(): void {
    this.categoriaSvc.getCategorias()
  //  .pipe(
  //    tap( res => console.log(res))
  //  )
    .pipe(
      tap((categorias: Categoria[]) => this.categorias = categorias)
     )
    .subscribe();
  }

}

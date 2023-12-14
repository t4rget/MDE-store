import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './services/categorias.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  constructor(private categoriaSvc: CategoriasService) {}

  ngOnInit(): void {
    this.categoriaSvc.getCategorias()
    .pipe(
      tap( res => console.log(res))
    )
    .subscribe();
  }

}

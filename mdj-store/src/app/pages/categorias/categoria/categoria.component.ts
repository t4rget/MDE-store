import { Component, Input, Output } from '@angular/core';
import { Categoria } from '../interface/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent {

  @Input() categoria!: Categoria;

  

}

import { Component, Input, Output } from '@angular/core';
import { Categoria } from '../interface/categoria';
import { SubCategoria } from '../interface/subcategoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent {

  @Input() categoria!: Categoria;

  @Input() subCategoria!: SubCategoria; // IMPORTACION DE COMPONENT SUBCATEGORIA

  

}

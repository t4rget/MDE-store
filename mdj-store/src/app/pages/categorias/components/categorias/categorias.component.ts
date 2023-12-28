import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { switchMap, tap } from 'rxjs/operators';
import { Categorias } from '../../interface/categorias';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  public allDatos: Categorias[] = [] ;
  public categoriaSettings: string[] = [] ;
  public categoriaList: Categorias[] = [];

  constructor(private categoriaSvc: CategoriasService) {}


  /*ngOnInit(): void {         ////IMPLEMENTACION OBSOLETA//////
    // Llamar al método fetchCategorias del servicio cuando el componente se inicializa
    /*this.categoriaSvc.fetchCategoriaSettings().subscribe(  //import settings //
      {
        next: (data : any) => {
          this.categoriaSettings = data;
          console.log(this.categoriaSettings);
        },
        error: (errors: any) => {
          console.error('Error fetching data:', errors);
        }
      }
    )-----
    this.categoriaSvc.fetchCategorias().subscribe(
      {
        next: (data: Categorias[]) => {
          this.allDatos = data;
          //this.categoriaList = this.categoriaSvc.categoriaList;
          console.log(this.allDatos);
          console.log(this.categoriaSettings);
          console.table(this.categoriaSvc.categoriaList);
        },
        error: (error) => {
         console.error('Error fetching data:', error);
        }
      }
    );
  } */

  ngOnInit(): void {
    this.categoriaSvc.fetchCategoriaSettings().pipe(
      switchMap(() => this.categoriaSvc.fetchCategorias())
    ).subscribe(
      {
        next: (data: Categorias[]) => {
          this.allDatos = data;
          this.categoriaList = this.categoriaSvc.categoriaList;
          //console.log(this.allDatos);
          //console.table(this.categoriaList);
        },
        error: (error: any) => {
          console.error('Error fetching data:', error);
        }
      }
    );
  }

}

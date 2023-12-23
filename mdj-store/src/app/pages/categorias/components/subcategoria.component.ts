import { Component, Input, OnInit } from '@angular/core';
import { SubCategoria } from '../interface/subcategoria';
import { CategoriasService } from '../services/categorias.service';
import { tap } from 'rxjs/operators';
import { SubcategoriaService } from '../services/subcategoria.service';

@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.component.html',
  styleUrls: ['./subcategoria.component.scss']
})
export class SubcategoriaComponent implements OnInit {

  subCategorias: SubCategoria[] = []; 
  dataFilter1: any[] = [];
  

  constructor(private subcategoriaSvc: SubcategoriaService) {
    //this.subCategorias = this.subcategoriaSvc.getSubcategorias(); 
   }

  ngOnInit(): void {/*
    this.subcategorias = this.subcategoriaSvc.getSubcategorias();
  //  .pipe(
  //    tap( res => console.log(res))
  //  )
    .pipe(
      tap((subcategorias: SubCategoria[]) => this.subcategorias = subcategorias)
     )
    .subscribe();
    console.log(this.subcategorias);*/

      this.subcategoriaSvc.getFetchSubcategorias().subscribe(data => {
        this.subcategoriaSvc.setSubcategorias(data);
        this.filterData();
      });

      }

 //     filterData(): void {
   ///     this.dataFilter1 = this.subcategoriaSvc.getSubcategorias().filter(item =>this.subCategorias.includes(item))
   //   }
      
      filterData(): void {
        const subcategoriasData = this.subcategoriaSvc.getSubcategorias();
        console.log('Todos los datos de subcategorias:', subcategoriasData);
      
        this.dataFilter1 = subcategoriasData.filter(item => this.subCategorias.includes(item));
        console.log('Datos filtrados por subCategorias:', this.dataFilter1);
      }




  }





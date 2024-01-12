import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NewsComponent } from './shared/components/news/news.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { CategoriasModule } from './pages/categorias/categorias.module';
import { ProductsModule } from './pages/products/products.module';
import { CategoriasService } from './pages/categorias/services/categorias.service';
import { ProductsService } from './pages/products/services/products.service';
import { SearchService } from './shared/services/search.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    FooterComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    CategoriasModule,
    ProductsModule
  ],
  providers: [CategoriasService, ProductsService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

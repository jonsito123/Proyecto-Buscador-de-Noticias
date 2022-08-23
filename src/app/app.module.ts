import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListadoNoticiasComponent } from './componentes/listado-noticias/listado-noticias.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SnniperComponent } from './shared/snniper/snniper.component';
///para hacer petiicones
import {  HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoNoticiasComponent,
    NavbarComponent,
    SnniperComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

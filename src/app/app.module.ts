import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { PieComponent } from './components/pie/pie.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { FormsModule } from '@angular/forms';
import { CursosComponent } from './components/cursos/cursos.component';
import { ForminterfaceComponent } from './components/forminterface/forminterface.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EncabezadoComponent,
    CuerpoComponent,
    PieComponent,
    HomeComponent,
    ContactoComponent,
    ContenidoComponent,
    CursosComponent,
    ForminterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

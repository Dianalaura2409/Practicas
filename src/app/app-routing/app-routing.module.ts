import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { ContenidoComponent } from '../components/contenido/contenido.component';
import { ContactoComponent } from '../components/contacto/contacto.component';
import { CursosComponent } from '../components/cursos/cursos.component';
import { ForminterfaceComponent } from '../components/forminterface/forminterface.component';
const routes:Routes =[
  {
    path:'contacto',
    component:ContactoComponent
  }
,
  {
    path:'contenido',
  component:ContenidoComponent}
  ,
  {
    path:'home',
  component:HomeComponent}
,{
  path:'cursos',
  component:CursosComponent}
  ,
{
  path:'hobys',
  component:ForminterfaceComponent
}
]


@NgModule({
   imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule] 
  
})
export class AppRoutingModule { }

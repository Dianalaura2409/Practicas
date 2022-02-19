import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { ContactoComponent } from '../components/contacto/contacto.component';
const routes:Routes =[
  {
    path:'contacto',
    component:ContactoComponent
  }
,
  {
    path:'Actitudes',
  component:HomeComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule] 
  
})
export class AppRoutingModule { }

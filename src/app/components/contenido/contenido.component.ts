import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent  {

   formulario = this.nuevoFormulario.group({
      nombre:'',
      apellido:'',
      email:'',
      telefono:''
    });

    usuarios:any=[];
    user={
      nombre:'',
      apellido:'',
      email:'',
      telefono:''
    }

    constructor(private nuevoFormulario:FormBuilder){}

    CHILLSAVE(){
      this.user.nombre= this.formulario.get('nombre')?.value;
      this.user.apellido= this.formulario.get('apellido')?.value;
      this.user.email= this.formulario.get('email')?.value;
      this.user.telefono= this.formulario.get('telefono')?.value;
      
      console.log(this.user); 
      this.usuarios.push(this.user);
       console.log(this.usuarios);
       this.limpiarForm();//Manda a llamar la funcion limpiarformulario
       this.limpiarUsuario();
      
       
    }
    limpiarUsuario(){
      this.user.nombre=''
      this.user.apellido=''
      this.user.email=''
      this.user.telefono=''
    }
      
    limpiarForm(){
      this.formulario.reset()
    }
  }

  

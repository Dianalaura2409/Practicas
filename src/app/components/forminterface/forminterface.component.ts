import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { hoby } from 'src/app/interface/hoby.interface';

@Component({
  selector: 'hobys',
  templateUrl: './forminterface.component.html',
  styleUrls: ['./forminterface.component.css']
})
export class ForminterfaceComponent {
  formulario = this.nuevoFormulario.group({
    nombre:'',
    inicio:'',
    descripcion:''
  
});
hobys:hoby[]=[];
  constructor(private nuevoFormulario:FormBuilder){
  }
  GUARDAR(){
    let nuevoHoby : hoby = {
        nombre :this.formulario.get('nombre')?.value,
        inicio:this.formulario.get('inicio')?.value,
        descripcion:this.formulario.get('descripcion')?.value, 
    }


    this.hobys.push(nuevoHoby);//PONER EN ARRAY

    console.log(this.hobys);
    this.limpiarForm();
}


limpiarForm(){
    this.formulario.reset()
}



}

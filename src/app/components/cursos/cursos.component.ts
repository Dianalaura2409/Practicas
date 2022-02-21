import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { curso } from 'src/app/interface/curso.interface';


@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent{
  formulario = this.nuevoFormulario.group({
    nombre:'',
    fecha:'',
    instructor:'',
    descripcion:''
});
cursos:curso[]=[];
    constructor(private nuevoFormulario:FormBuilder){
    }
    CHILLSAVE(){
      let nuevoCurso : curso = {
          nombre :this.formulario.get('nombre')?.value,
          fecha:this.formulario.get('fecha')?.value,
          instructor:this.formulario.get('instructor')?.value,
          descripcion:this.formulario.get('descripcion')?.value, 
      }
  

      this.cursos.push(nuevoCurso);//PONER EN ARRAY

      console.log(this.cursos);
      this.limpiarForm();
}


limpiarForm(){
      this.formulario.reset()
  }

}

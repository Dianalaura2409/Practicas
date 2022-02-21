import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
form =this.formBuilder.group({ //creamor una variable y rpopiedad group que agrupa los campos
  name:'',
  email:'',
  asunto:'',
  descripcion:'',
});

nombre='';
status = false;
  constructor(private formBuilder: FormBuilder,) {
  } 
    
  ngOnInit(): void {
  }
  
 onSubmit(){
   this.status =true
   this.nombre =this.form.get('name')?.value
 }

}

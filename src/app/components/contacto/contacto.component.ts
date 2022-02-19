import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
checkoutForm=this.formBuilder.group({ //creamor una variable y rpopiedad group que agrupa los campos
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
   this.nombre =this.checkoutForm.get('name')?.value
 }

}

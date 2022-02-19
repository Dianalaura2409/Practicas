import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
     escuela: string;
     carrera: String;

  constructor() {
    this.escuela="Tecnologico de estudios superiores de Chimalhuacan";
    this.carrera="Sistemas Computacionales";
   }



  ngOnInit(): void {
  }

}

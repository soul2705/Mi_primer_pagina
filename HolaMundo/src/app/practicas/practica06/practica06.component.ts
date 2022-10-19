import { Component } from '@angular/core';

@Component({
  selector: 'app-practica06',
  templateUrl: './practica06.component.html',
  styleUrls: ['./practica06.component.css']
})
export class Practica06Component {

  texto = 'Esta es la practica 6 de Event Binding';

  cambiarTexto():void
  {
    this.texto = 'Practica de sincronización eventos'
  }
  constructor() { }


}

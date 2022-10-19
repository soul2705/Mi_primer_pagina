import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Ivett'
  textoPlaceholder = 'Escriba algo aqui';
  deshabiliado = true;
  texto = '';
  title: any;

  constructor() {
    setInterval( ()=> this.nombre = 'Arenas', 3000);
    setInterval( ()=> this.deshabiliado = false, 5000);
  }

  getSuma(numero1: number, numero2: number){
    return numero1 + numero2;
  }
}

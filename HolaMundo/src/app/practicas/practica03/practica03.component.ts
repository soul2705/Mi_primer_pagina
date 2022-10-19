import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica03',
  templateUrl: './practica03.component.html',
  styleUrls: ['./practica03.component.css']
})
export class Practica03Component implements OnInit {

  nombre = 'Anahi'
  textoPlaceholder = 'Escriba algo aqui';
  deshabiliado = true;
  texto = '';
  title: any;

  constructor() {
    setInterval( ()=> this.nombre = 'Erika', 3000);
    setInterval( ()=> this.deshabiliado = false, 5000);
   }
   getSuma(numero1: number, numero2: number){
    return numero1 + numero2;
  }
  ngOnInit(): void {
  }

}

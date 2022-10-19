import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica04',
  templateUrl: './practica04.component.html',
  styleUrls: ['./practica04.component.css']
})
export class Practica04Component implements OnInit {
  nombre = 'Eme'
  textoPlaceholder = 'Escriba algo aqui';
  deshabiliado = true;
  texto = '';
  title: any;
  constructor() { 
    setInterval( ()=> this.deshabiliado = false, 3000);
  }

  getSuma(numero1: number, numero2: number){
    return numero1 + numero2;
  }
  ngOnInit(): void {
  }

}

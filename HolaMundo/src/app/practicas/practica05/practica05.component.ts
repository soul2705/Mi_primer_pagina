import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica05',
  templateUrl: './practica05.component.html',
  styleUrls: ['./practica05.component.css']
})
export class Practica05Component implements OnInit {

  nombre = 'Eme'
  textoPlaceholder = 'Escriba algo aqui';
  deshabiliado = true;
  texto = '';
  title: any;

  constructor() { }

  ngOnInit(): void {
  }

}

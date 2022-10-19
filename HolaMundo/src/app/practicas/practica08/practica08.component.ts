import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-practica08',
  templateUrl: './practica08.component.html',
  styleUrls: ['./practica08.component.css']
})
export class Practica08Component implements OnInit {
  listEstudiantes: any[] =[
    {nombre: 'Ivett Arenas', estado: 'Aprobado'},
    {nombre: 'Dulce Maria Cazarez', estado: 'Aprobado'},
    {nombre: 'Erika Martinez', estado: 'Aprobado'},
    {nombre: 'Luis Ontiveros', estado: 'Aprobado'},
    {nombre: 'Esteban Perez', estado: 'Aprobado'},
    {nombre: 'Emerson Salas', estado: 'Aprobado'},
    {nombre: 'Luis Heras', estado: 'Aprobado'},
    {nombre: 'Yatzeni Cruz', estado: 'Aprobado'},
    {nombre: 'Anahi Martinez', estado: 'Aprobado'},
    {nombre: 'Dalia Gomez', estado: 'Aprobado'}
    ]
    mostrar = false;
    mostrarEstudiantes() : void
    {
      this.mostrar = !this.mostrar;
    }
  constructor() { }

  ngOnInit(): void{

  }


}

import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-practica09',
  templateUrl: './practica09.component.html',
  styleUrls: ['./practica09.component.css']
})
export class Practica09Component implements OnInit {
  listEstudiantes: any[] =[
    {nombre: 'Ivett Arenas', estado: 'Reprobada'},
    {nombre: 'Dulce Maria Cazarez', estado: 'Reprobado'},
    {nombre: 'Erika Martinez', estado: 'Reprobado'},
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

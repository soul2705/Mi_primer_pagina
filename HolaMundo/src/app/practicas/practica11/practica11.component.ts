import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-practica11',
  templateUrl: './practica11.component.html',
  styleUrls: ['./practica11.component.css']
})
export class Practica11Component implements OnInit {
  listEstudiantes: any[] =[
    {nombre: 'Ivett Arenas', estado: 'Reprobada'},
    {nombre: 'Dulce Maria Cazarez', estado: 'Aprobada'},
    {nombre: 'Erika Martinez', estado: 'Reprobado'},
    {nombre: 'Luis Ontiveros', estado: 'Aprobado'},
    {nombre: 'Esteban Perez', estado: 'Aprobado'},
    {nombre: 'Emerson Salas', estado: 'Aprobado'},
    {nombre: 'Luis Heras', estado: 'Aspirante'},
    {nombre: 'Yatzeni Cruz', estado: 'Aprobado'},
    {nombre: 'Anahi Martinez', estado: 'Aprobado'},
    {nombre: 'Dalia Gomez', estado: 'Nuevo ingreso'},
    {nombre: 'Karen Vaquez', estado: 'Reinscripcion'},
    {nombre: 'David Días', estado: 'Reprobado'},
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


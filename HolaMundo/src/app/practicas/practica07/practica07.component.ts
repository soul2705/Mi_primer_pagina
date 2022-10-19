import { Component, } from '@angular/core';

@Component({
  selector: 'app-practica07',
  templateUrl: './practica07.component.html',
  styleUrls: ['./practica07.component.css']
})
export class Practica07Component  {
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
  constructor() { }

  ngOnInit(): void {
  }

}

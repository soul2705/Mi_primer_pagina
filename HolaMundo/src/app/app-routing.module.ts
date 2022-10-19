import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Practica01Component } from './practicas/practica01/practica01.component';
import { Practica02Component } from './practicas/practica02/practica02.component';
import { Practica03Component } from './practicas/practica03/practica03.component';
import { Practica04Component } from './practicas/practica04/practica04.component';
import { Practica05Component } from './practicas/practica05/practica05.component';
import { Practica06Component } from './practicas/practica06/practica06.component';
import { Practica07Component } from './practicas/practica07/practica07.component';
import { Practica08Component } from './practicas/practica08/practica08.component';
import { Practica09Component } from './practicas/practica09/practica09.component';
import { Practica10Component } from './practicas/practica10/practica10.component';
import { Practica11Component } from './practicas/practica11/practica11.component';
import { Practica12Component } from './practicas/practica12/practica12.component';

const routes: Routes = [
  { path: 'practica01', component: Practica01Component},
  { path: 'practica02', component: Practica02Component},
  { path: 'practica03', component: Practica03Component},
  { path: 'practica04', component: Practica04Component},
  { path: 'practica05', component: Practica05Component},
  { path: 'practica06', component: Practica06Component},
  { path: 'practica07', component: Practica07Component},
  { path: 'practica08', component: Practica08Component},
  { path: 'practica09', component: Practica09Component},
  { path: 'practica10', component: Practica10Component},
  { path: 'practica11', component: Practica11Component},
  { path: 'practica12', component: Practica12Component},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

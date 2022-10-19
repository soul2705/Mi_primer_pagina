import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Practica01Component } from './practicas/practica01/practica01.component';
import { Practica02Component } from './practicas/practica02/practica02.component';
import { Practica03Component } from './practicas/practica03/practica03.component';
import { Practica04Component } from './practicas/practica04/practica04.component';
import { Practica05Component } from './practicas/practica05/practica05.component';
import { Practica06Component } from './practicas/practica06/practica06.component';
import { AppRoutingModule } from './app-routing.module';
import { Practica07Component } from './practicas/practica07/practica07.component';
import { Practica08Component } from './practicas/practica08/practica08.component';
import { Practica09Component } from './practicas/practica09/practica09.component';
import { Practica10Component } from './practicas/practica10/practica10.component';
import { Practica11Component } from './practicas/practica11/practica11.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Practica12Component } from './practicas/practica12/practica12.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Practica01Component,
    Practica02Component,
    Practica03Component,
    Practica04Component,
    Practica05Component,
    Practica06Component,
    Practica07Component,
    Practica08Component,
    Practica09Component,
    Practica10Component,
    Practica11Component,
    FooterComponent,
    SidebarComponent,
    Practica12Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavBarComponent]
})
export class AppModule { }

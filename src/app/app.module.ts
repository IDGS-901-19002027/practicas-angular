import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciaModule } from './distancia/distancia.module';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app.routing.module';
import { CineComponent } from './cine/cine.component';

@NgModule({
  declarations: [
    AppComponent,
    ResistenciasComponent,
    PizzeriaComponent,
    MenuComponent,
    CineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DistanciaModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

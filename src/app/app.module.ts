import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciaModule } from './distancia/distancia.module';
import { ResistenciasComponent } from './resistencias/resistencias.component';

@NgModule({
  declarations: [
    AppComponent,
    ResistenciasComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DistanciaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { DistanciaComponent } from './distancia/distancia.component';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { CineComponent } from './cine/cine.component';

const routes:Routes=[
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'resistencias', component: ResistenciasComponent },
{path: 'distancia', component: DistanciaComponent },
{path: 'pizzas', component: PizzeriaComponent},
{path: 'cine', component: CineComponent}

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}

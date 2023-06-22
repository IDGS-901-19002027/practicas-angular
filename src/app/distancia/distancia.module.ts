import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DistanciaComponent } from '../distancia/distancia.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DistanciaComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatRadioModule,
    FormsModule
  ],
  exports: [
    DistanciaComponent
  ]
})
export class DistanciaModule { }

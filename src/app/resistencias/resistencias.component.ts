import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})

export class ResistenciasComponent {
  banda1!:number;
  banda2!:number;
  banda3!:number;
  tolerancia!:number;

  valor!:number;
  valorMinimo!:number;
  valorMaximo!:number;

  resultado:any = {};

  calcularResistencia() {
    this.valor = (parseInt(`${this.banda1}${this.banda2}`) * this.banda3);
    this.valorMinimo = this.valor - (this.valor * this.tolerancia);
    this.valorMaximo = this.valor + (this.valor * this.tolerancia);

    this.resultado = {
      valor: this.valor,
      valorMinimo: this.valorMinimo,
      valorMaximo: this.valorMaximo
    };
  }
}

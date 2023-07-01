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
  tolerancia:number = 0.1;

  valor!:number;
  valorMinimo!:number;
  valorMaximo!:number;

  resultado:any = {};

  colores = [
    // Valores para la primera y segunda banda
    { valor: 0, nombre: 'Negro', color: '#000000' },
    { valor: 1, nombre: 'Cafe', color: '#8B4513' },
    { valor: 2, nombre: 'Rojo', color: '#FF0000' },
    { valor: 3, nombre: 'Naranja', color: '#FFA500' },
    { valor: 4, nombre: 'Amarillo', color: '#FFFF00' },
    { valor: 5, nombre: 'Verde', color: '#008000' },
    { valor: 6, nombre: 'Azul', color: '#0000FF' },
    { valor: 7, nombre: 'Violeta', color: '#EE82EE' },
    { valor: 8, nombre: 'Gris', color: '#808080' },
    { valor: 9, nombre: 'Blanco', color: '#FFFFFF' },
  ];

  terceraBanda = [
    // Valores especificamente para la tercera banda
    { valor: 1, nombre: 'Negro', color: '#000000' },
    { valor: 10, nombre: 'Cafe', color: '#8B4513' },
    { valor: 100, nombre: 'Rojo', color: '#FF0000' },
    { valor: 1000, nombre: 'Naranja', color: '#FFA500' },
    { valor: 10000, nombre: 'Amarillo', color: '#FFFF00' },
    { valor: 100000, nombre: 'Verde', color: '#008000' },
    { valor: 1000000, nombre: 'Azul', color: '#0000FF' },
    { valor: 10000000, nombre: 'Violeta', color: '#EE82EE' },
    { valor: 100000000, nombre: 'Gris', color: '#808080' },
    { valor: 1000000000, nombre: 'Blanco', color: '#FFFFFF' },
  ];

  // Función para el cálculo de la resistencia
  calcularResistencia() {
    //console.log(this.tolerancia);
    this.valor = (parseInt(`${this.banda1}${this.banda2}`) * this.banda3);
    this.valorMinimo = this.valor - (this.valor * this.tolerancia);
    this.valorMaximo = this.valor + (this.valor * this.tolerancia);

    this.resultado = {
      valor: this.valor,
      valorMinimo: this.valorMinimo,
      valorMaximo: this.valorMaximo
    };
  }
  
  // Función para pintar la tolerancia en la tabla con el operador ternario: Oro o plata
  obtenerTolerancia(): string {
    return parseFloat(this.tolerancia.toString()) === 0.1 ? '#EFB810' : '#BEBEBE';
  }  

  // Función para obtener el valor de la tercera banda
  obtenerColor(valor: number): string {
    const banda = this.terceraBanda.find(item => item.valor === Number(valor));
    // Si encuentra un valor igual en la terceraBanda con banda3 regresa el objeto, si no una cadena vacía
    return banda ? banda.color : '';
  }  
  
}

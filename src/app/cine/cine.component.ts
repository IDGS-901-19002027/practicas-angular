import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {
  // Modelo
  nombre!: string;
  numPersonas!: number;
  numBoletos!: number;
  tarjeta!: string;
  total: number = 0;
  respuesta: string = '';
  // Forms
  cineForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.cineForm = this.initForm();
  }

  // Método para inicializar el formulario y validar que cuente con la información antes de enviarlo
  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      numPersonas: ['', [Validators.required, Validators.min(1)]],
      numBoletos: ['', [Validators.required, Validators.min(1)]],
      tarjeta: ['', [Validators.required]],
    });

  }

  // Función para validar que se está recuperando la información del formulario
  onSubmit(): void {
    console.log('Form ->', this.cineForm.value)
  }

  // Método para calcular el total de los boletos a comprar
  obtenerDatos(): void {
    this.nombre = this.cineForm.get('nombre')?.value;
    this.numBoletos = this.cineForm.get('numBoletos')?.value;
    this.numPersonas = this.cineForm.get('numPersonas')?.value;
    this.tarjeta = this.cineForm.get('tarjeta')?.value;

    if(this.numBoletos > (this.numPersonas * 7)){
      this.respuesta = "Solo se venden 7 boletos por cada persona";
    } else {
      if (this.tarjeta === 'true') {
        if (this.numBoletos <= 2) {
          // El total se calcula mutiplicando el (numBoletos x precio) * .90 ya que
          // Sí tiene tarjeta se le descuenta el 10%
          this.total = ((this.numBoletos * 12) * .90);
        } 
        else if (this.numBoletos > 2 && this.numBoletos < 5) {
          // Sí tiene tarjeta se le descuenta el 10% y si es mayor que 2 pero menor que 5 
          // Se le hace un descuento del 10% al total de boletos que se compran
          this.total = ((this.numBoletos * 12 * 0.9) * 0.90);
        } 
        else if (this.numBoletos > 5) {
          this.total = ((this.numBoletos * 12 * 0.85) * .90);
        }
      } else { // Si no cuenta con tarjeta solo se hace descuento si compra más de dos boletos
        if (this.numBoletos <= 2) {
          this.total = (this.numBoletos * 12);
        }
        else if (this.numBoletos > 2 && this.numBoletos < 5) {
          this.total = ((this.numBoletos * 12) * .9);
        } 
        else if (this.numBoletos > 5) {
          this.total = ((this.numBoletos * 12) * .85);
        }
      }
    }
  }
  
}

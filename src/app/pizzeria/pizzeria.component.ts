import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPizzas } from './pizzas';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css']
})
export class PizzeriaComponent {
  pizzasForm!: FormGroup;
  pedido: IPizzas[] = [];
  resultado!:number;
  ingredientes!:string;
  total:number = 0;
  bandera:boolean=false;

  constructor(private readonly fb: FormBuilder) {
    this.pizzasForm = this.initForm();
  }

  onSubmit():void {
    console.log('Form ->', this.pizzasForm.value)
  }

  obtenerDatos(): void {
      this.resultado = 0;
      this.ingredientes = '';
  
      const pizza: IPizzas = {
        nombre: this.pizzasForm.get('nombre')?.value,
        direccion: this.pizzasForm.get('direccion')?.value,
        telefono: this.pizzasForm.get('telefono')?.value,
        tamanio: this.pizzasForm.get('tamanio')?.value,
        ingredientes: this.pizzasForm.get('tamanio')?.value,
        cantidad: this.pizzasForm.get('numPizzas')?.value,
        subtotal: 0,
      };

      //console.log(pizza);
      if(this.pizzasForm.get('jamon')?.value === true) {
        this.resultado +=1;
        this.ingredientes+= 'Jamón, ';
      }

      if(this.pizzasForm.get('pina')?.value === true) {
        this.resultado +=1;
        this.ingredientes+= 'Piña, ';

      }

      if(this.pizzasForm.get('champi')?.value === true) {
        this.resultado +=1;
        this.ingredientes+= 'Champiñon, ';

      }

      pizza.subtotal = this.calcularSub(pizza.tamanio, this.resultado, pizza.cantidad);
      pizza.ingredientes = this.ingredientes
      // Agregar la pizza que el usuario agregó a mi variable pedido
      this.pedido.push(pizza);

      // Reiniciar el formulario
      this.pizzasForm.reset();
    
  }

  calcularSub(tamanio: string, resultado: number, cantidad: number): number {
    let precioBase = 0;
    if (tamanio === 'Chica') {
      precioBase = 40;
    } else if (tamanio === 'Mediana') {
      precioBase = 80;
    } else if (tamanio === 'Grande') {
      precioBase = 120;
    }

    const subtotal = (precioBase + 10 * resultado) * cantidad;
    this.total += subtotal;
    return subtotal;
  }

  calcularTotal(): void {
    this.bandera=true;
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      tamanio: ['', [Validators.required]],
      jamon: ['', [Validators.required]],
      champi: ['', [Validators.required]],
      pina: ['', [Validators.required]],
      numPizzas: ['', [Validators.required]],
    });
  }

  
}
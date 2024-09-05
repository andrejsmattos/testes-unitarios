import { Component } from '@angular/core';
import { CalculadoraService } from '../calculadora.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  constructor(private calculatorService: CalculadoraService) {}

  somar() {
    this.resultado = this.calculatorService.somar(this.num1, this.num2);
    this.num1 = 0;
    this.num2 = 0;
   }

  subtrair() {
    this.resultado = this.calculatorService.subtrair(this.num1, this.num2);
    this.num1 = 0;
    this.num2 = 0;
  } 

  multiplicar() {
    this.resultado = this.calculatorService.multiplicar(this.num1, this.num2);
    this.num1 = 0;
    this.num2 = 0;
  }

  dividir() {
    this.resultado = this.calculatorService.dividir(this.num1, this.num2);
    this.num1 = 0;
    this.num2 = 0;
  }
}

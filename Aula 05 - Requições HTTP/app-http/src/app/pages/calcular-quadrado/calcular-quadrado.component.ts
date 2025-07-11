import { Component } from '@angular/core';
import { QuadradoService } from '../../services/quadrado.service';
import { FormBuilder, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-calcular-quadrado',
  imports: [FormsModule, CommonModule],
  templateUrl: './calcular-quadrado.component.html',
  styleUrl: './calcular-quadrado.component.scss'
})
export class CalcularQuadradoComponent {

  altura: number = 0
  base: number = 0

  resultado:number = 0
  formCalc: any;

  constructor(public quadradoService: QuadradoService, private formBuilder: FormBuilder) {
    this.formBuilder.group({
      num: ['']
    })
  }

  calculo() {
    this.resultado = this.quadradoService.getQuadrado(this.base, this.altura)
  }
}

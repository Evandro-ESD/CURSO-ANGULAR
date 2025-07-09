import { Component } from '@angular/core';
import { ServiceImcService } from '../../services/service-imc.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-imc',
  imports: [FormsModule, CommonModule],
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class ImcComponent {

  
  peso:number = 0
  altura:number = 0
  resultado:number = 0
  
  constructor(private serviceImcService:ServiceImcService){ }

  calcular(){
    this.resultado = this.serviceImcService.calcularImc(this.peso, this.altura)
  }

}

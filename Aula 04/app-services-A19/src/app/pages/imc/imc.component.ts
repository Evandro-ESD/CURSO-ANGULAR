import { Component } from '@angular/core';
import { ServiceImcService } from '../../services/service-imc.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../components/button/button.component";



@Component({
  selector: 'app-imc',
  imports: [FormsModule, CommonModule, ButtonComponent],
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
    this.peso = 0
    this.altura = 0
  }

}

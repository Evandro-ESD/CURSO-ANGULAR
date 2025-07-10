import { Component } from '@angular/core';
import { ServiceQuadradoService } from '../../services/service-quadrado.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CunsultaCPFService } from '../../services/cunsulta-cpf.service';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-quadrado',
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './quadrado.component.html',
  styleUrl: './quadrado.component.css'
})
export class QuadradoComponent {

  n:number =0
  resultado:number = 0
  lista:any[] = []

  constructor(private serviceQuadradoService:ServiceQuadradoService,
  ){}

  calcular(){
    this.resultado = this.serviceQuadradoService.calcularQuadrado(this.n)
    this.n = 0
  }

}

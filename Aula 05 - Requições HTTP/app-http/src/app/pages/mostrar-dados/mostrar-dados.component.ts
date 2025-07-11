import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuadradoService } from '../../services/quadrado.service';



@Component({
  selector: 'app-mostrar-dados',
  imports: [CommonModule],
  templateUrl: './mostrar-dados.component.html',
  styleUrl: './mostrar-dados.component.scss'
})
export class MostrarDadosComponent{

  meuForm:any;

  

  constructor(public quadrado:QuadradoService,
    public form:FormBuilder
  ){
    this.meuForm = form.group({
      altura: [''],
      base: ['']
    })
  }

  calcular(){
    console.log(this.meuForm.value)
    // this.quadrado.getQuadrado(this.meuForm.value)
  }

}

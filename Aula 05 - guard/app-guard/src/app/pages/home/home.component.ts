import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DadosComponent } from '../../dados/dados/dados.component';
import { DadosComServiceComponent } from '../../dados/dados-com-service/dados-com-service.component';
import { Router } from '@angular/router';
CommonModule

const MATERIAL = [MatButtonModule]

@Component({
  selector: 'app-home',
  imports: [CommonModule, ...MATERIAL],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public router:Router){}

  opcoes = [
    {title: 'Dados', component: DadosComponent, rota: 'dados'},
    {title: 'dados2', component: DadosComServiceComponent, rota: 'dados2'},
  ]

  chamarRotas(rota:string){
    this.router.navigate(['rota'])
  }

}

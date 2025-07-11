import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
constructor(public router:Router){}

  cards = [
    {rota: 'quadrado', title: 'Calculo Quadrado'},
    {rota: 'requisicao', title: 'Requisição HTTP'}
  ]

chamarRota(rota:string){
    this.router.navigate([rota])
  }
 
}

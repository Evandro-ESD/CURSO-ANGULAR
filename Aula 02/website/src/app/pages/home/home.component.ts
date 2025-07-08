import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // fotos: string[] = ['🌍']
  fotos = 
  [
    {
      nome: 'J.R.R. Tokien',
      imagem: 'img/jrr tokien.jpg'
    },
    {
      nome: 'Jonas Riberio',
      imagem: 'img/Belchior.png'
    },
    {
      nome: 'Ronaldinho Gaucho',
      imagem: 'img/pele.png'
    },
    {
      nome: 'Maria da Penha',
      imagem: 'img/princesa-isabel.png'
    },
    {
      nome: 'From Arrascaeta',
      imagem: 'img/zico.png'
    },
  ]
}

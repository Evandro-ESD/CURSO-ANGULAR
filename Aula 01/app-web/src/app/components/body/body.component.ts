import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-body',
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  title = "Testando"

  // cards:string[] = [
  //   'card 1', 'card 2', 'card 5',
  //   'card 4', 'card 5', 'card 6',
  //   'card 7', 'card 8', 'card 9',
  // ]

  cards = [
    {
      nome: 'Tênis de Corrida',
      // imagem: 'assets/img/tenis.jpg',
      imagem: './img/tenis.png',
      descricao: 'Confortável e resistente.'
    },
    {
      nome: 'Chinelo de Praia',
      // imagem: 'assets/img/chinelo.jpg',
      imagem: './img/chinelo.png',
      descricao: 'Ideal para dias quentes.'
    },
    {
      nome: 'Bota de Couro',
      // imagem: 'assets/img/bota.jpg',
      imagem: './img/Bota de Couro.png',
      descricao: 'Estilo e durabilidade.'
    }
  ];



}

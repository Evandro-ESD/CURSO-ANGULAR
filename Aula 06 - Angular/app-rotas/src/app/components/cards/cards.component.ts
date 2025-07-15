import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {

  cards: any[] = []

  constructor(private produtos: ProdutoService) { }

  ngOnInit(): void {
    this.getPrudutos()
  }
  getPrudutos() {
    this.produtos.cards.forEach((card) => {
      this.cards.push(card)
      console.log("Lista Cards:", card)
    });
  }


}

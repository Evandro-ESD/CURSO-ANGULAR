import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  cards = [
    { imagem: "./img/images-xadrex.png", titulo: "Jogo de Xadrex", descritivo: "32 Peças De Xadrez Luxo Tema Exclusivo Vitoriano" },
    { imagem: "./img/pecas32.png", titulo: "32 peças de Xadrez", descritivo: "Tabuleiro de Xadrez Luxo Profissional Peças e Tabuleiro em Madeira Acabamento em Verniz" },
    { imagem: "./img/tabuleiro_generio.png", titulo: "Jogo de Xadrex", descritivo: "Jogo Xadrez Clássico Profissional Grande 40x40" },
    { imagem: "./img/tapete xadrex.png", titulo: "Jogo de Xadrex", descritivo: "Dicá Tapete Jogo de Xadrez Luxo" },
    { imagem: "./img/xadrezCavaleiros.png", titulo: "Xadrex Cavaleiros", descritivo: "Tabuleiro de Xadrez Luxo Cavaleiros Medievais 3D Verito" },
    { imagem: "./img/xadrezRei.png", titulo: "Jogo de Xadrex Rei", descritivo: "Tabuleiro Estojo Madeira Luxo 43x43cm Rei 10cm" }
  ]

}







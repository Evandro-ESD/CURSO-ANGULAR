import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent implements OnInit {

  slideAtual: number = 0

  slides = [
    { src: "/instiucional/campeonato.png", alt: "", descricao: "Divulgação do próximo torneio oficial promovido pela Arena Chess Store." },
    { src: "/instiucional/fundo.png", alt: "", descricao: "Foto da loja Arena Chess Store, especializada em artigos de xadrez." },
    { src: "/instiucional/julia.png", alt: "", descricao: "A Grande Mestre dará uma palestra exclusiva na loja." },
  ]

  ngOnInit(): void {
    setInterval(() => {
      this.proxima()
    }, 3000)
  }

  proxima() {
    this.slideAtual = (this.slideAtual + 1) % this.slides.length
  }
  anterior() {
    this.slideAtual = (this.slideAtual - 1 + this.slides.length) % this.slides.length
  }

}

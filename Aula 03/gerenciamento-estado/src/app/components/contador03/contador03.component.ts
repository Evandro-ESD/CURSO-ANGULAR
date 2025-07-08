import { Component, OnInit } from '@angular/core';
import { ContadorServicesService } from '../../services/contador-services.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-contador03',
  imports: [MatButton],
  templateUrl: './contador03.component.html',
  styleUrl: './contador03.component.scss'
})
export class Contador03Component implements OnInit{

  valor = 0

  constructor(private contadorService:ContadorServicesService){}
  ngOnInit() {
    this.contadorService.contador.subscribe(valor => this.valor = valor)
  }
  incrementar(){
    this.contadorService.incrementar()
  }

  decrementar(){
    this.contadorService.decrementar()
  }

  zerarContador() {
    this.valor = 0
  }


}

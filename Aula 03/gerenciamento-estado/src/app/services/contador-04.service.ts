import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Contador04Service {

  constructor() { }

  private valor = 0

  getValor(): number {
    return this.valor
  }

  incrementar() { this.valor++ }

  decrementar() { this.valor-- }
  
  zerar() { this.valor = 0 }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Imc {

  constructor() { }

  calcularImc(peso:number, altura :number){
    return peso / (altura * altura)
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceImcService {

  constructor() { }

  calcularImc(peso:number, altura:number){
    return peso * altura
  }
}

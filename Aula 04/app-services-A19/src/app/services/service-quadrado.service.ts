import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceQuadradoService {

  constructor() { }

  calcularQuadrado(n:number){
    return Math.pow(n, 2)
  }
}

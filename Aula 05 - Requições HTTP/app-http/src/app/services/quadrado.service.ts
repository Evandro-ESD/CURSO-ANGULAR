import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuadradoService {

  constructor() { }

  getQuadrado(base: number, altura:number): number {
    return  base * altura
    }
}

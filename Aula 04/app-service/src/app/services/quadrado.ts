import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Quadrado {

  constructor() { }

  quadrado(n1:number){
    return Math.pow(n1, 2)
  }
}

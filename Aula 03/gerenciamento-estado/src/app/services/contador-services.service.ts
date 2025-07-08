import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorServicesService {

  private contadorSubject = new BehaviorSubject<number>(0)

  constructor() { }

  contador = this.contadorSubject.asObservable()

  incrementar(){
    const novoValor = this.contadorSubject.value + 1
    this.contadorSubject.next(novoValor)
  }
  
  decrementar(){
    const novoValor = this.contadorSubject.value - 1
    this.contadorSubject.next(novoValor)
  }

}

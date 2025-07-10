import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CunsultaCPFService {

  constructor(private httpClient: HttpClient) { }

  lista: any[] = []

  ngOnInit() {
    this.httpClient.get<any[]>('https://viacep.com.br/ws/01001000/json/')
      .subscribe(dados => {
        this.lista = dados
      })
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private autenticado = false

  constructor() { }

  login(user:string, password:string){
    if(user === 'admin' && password === '123'){
      this.autenticado = true
      return true
    }
    return false

  }
  isAutenticado():boolean{
    return this.autenticado
  }
}

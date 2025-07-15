import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private loginValido = {
    user: 'adm',
    pass: '123'
  }
  private autentidado:boolean = false
  
  constructor() { }

  login(dados: {user: string, pass:string}):boolean{
    if(dados.user === this.loginValido.user && 
      dados.pass === this.loginValido.pass){
      this.autentidado = true
      console.log(this.autentidado)
      return true
    }
    console.log('Não autorizado"!!!!!!')
    return false
  }

  isAutenticado():boolean{
    return this.autentidado
  }
}

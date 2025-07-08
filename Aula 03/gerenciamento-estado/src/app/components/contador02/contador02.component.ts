import { Component } from '@angular/core';

@Component({
  selector: 'app-contador02',
  imports: [],
  // templateUrl: './contador02.component.html',
  template: `
              <hr>
              <hr style="border-top: 10px solid #ccc; border-radius: 50px 50px 0px 0px ">
              <h1> Contador 2</h1>
              <h2> Contador imutável e mutável</h2>
              <div id="valor" style="text-align: center;">
                <p>Valor: {{contador}} </p>
              </div>
              <div id="content" style="background-color: antiquewhite;padding: 5px ;display: flex; flex-direction: column; width: 500px; gap: 10px;" >
              <button (click)="incrementar()" style=" cursor: pointer; border-radius: 10px;border: none; background-color: cadetblue; height: 2rem;" >Incremetar!!!</button> 
              <button (click)="decrementar()" style=" cursor: pointer; border-radius: 10px;border: none; background-color: cadetblue; height: 2rem;" >Decrementar!!!</button> 
              <button (click)="zerarContador()" style=" cursor: pointer; border-radius: 10px;border: none; background-color: tomato; height: 2rem;" >ZERAR!!!</button> 
              </div>
  `,
  styleUrl: './contador02.component.scss'
})
export class Contador02Component {

  contador = 0

  incrementar() {
    // maneira Imutável
    this.contador = this.contador + 1
    // this.contador += 1
    // maneira Mutável
    // console.log(this.contador++)
    // console.log(this.contador = this.contador + 1)
    console.log(this.contador += 1)
  }

  decrementar() {
    this.contador = this.contador - 1
    // console.log(this.contador--)
  }

  zerarContador() {
    this.contador = 0
  }

}

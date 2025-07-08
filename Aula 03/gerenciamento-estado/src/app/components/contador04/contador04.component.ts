import { Component } from '@angular/core';
import { Contador04Service } from '../../services/contador-04.service';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-contador04',
  imports: [MatButton],
  templateUrl: './contador04.component.html',
  styleUrl: './contador04.component.scss'
})
export class Contador04Component {

  constructor(private count:Contador04Service){}
  //exibie valor atual
  getValor():number{
    return this.count.getValor()
  }
  incrementar(){
    this.count.incrementar()
  }
  decrementar(){
   this.count.decrementar()
  }
  zerar(){
    this.count.zerar()
  }

}

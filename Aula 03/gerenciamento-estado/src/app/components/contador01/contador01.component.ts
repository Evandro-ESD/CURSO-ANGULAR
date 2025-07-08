import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatDividerModule, MatDivider } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-contador01',
  imports: [MatDivider],
  templateUrl: './contador01.component.html',
  styleUrl: './contador01.component.scss'
})
export class Contador01Component {
  
  contador = 0

  addContador() {
    this.contador += 1
    console.log(this.contador)
  }

  zerarContador(){
    this.contador = 0
  }
}

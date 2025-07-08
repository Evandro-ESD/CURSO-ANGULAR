import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador01Component } from "./components/contador01/contador01.component";
import { Contador02Component } from "./components/contador02/contador02.component";
import { Contador03Component } from './components/contador03/contador03.component';
import { Contador04Component } from './components/contador04/contador04.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contador01Component, 
                          Contador02Component, 
                          Contador03Component, 
                          Contador04Component], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gerenciamento-estado';
}

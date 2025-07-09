import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Imc } from "./app/imc/imc";
import { Quadrado } from "./app/quadrado/quadrado";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Imc, Quadrado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'app-service';
}

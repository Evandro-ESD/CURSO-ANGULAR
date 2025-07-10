import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadosComponent } from "./dados/dados/dados.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-guard';
}

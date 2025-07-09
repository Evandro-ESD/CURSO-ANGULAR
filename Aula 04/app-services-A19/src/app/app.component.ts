import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImcComponent } from "./pages/imc/imc.component";
import { QuadradoComponent } from "./pages/quadrado/quadrado.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImcComponent, QuadradoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-services-A19';
}

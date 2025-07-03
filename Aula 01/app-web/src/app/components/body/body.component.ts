import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-body',
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  title = "Testando"

  cards:string[] = [
    'card 1', 'card 2', 'card 5',
    'card 4', 'card 5', 'card 6',
    'card 7', 'card 8', 'card 9',
  ]

  

}

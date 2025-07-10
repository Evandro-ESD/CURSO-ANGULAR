import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL = [MatButtonModule]

@Component({
  selector: 'app-home',
  imports: [CommonModule, ...MATERIAL],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

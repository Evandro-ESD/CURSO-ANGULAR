import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalComponent } from '../../model/modal/model.component';
import { CardsComponent } from "../../components/cards/cards.component";
import { Router } from '@angular/router';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-home',
  imports: [MatFormFieldModule, CommonModule, FormsModule, CardsComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dialog: MatDialog, private router:Router) { }

  // O componente HomeComponent deve o Injetar o service e obter 
  // os dados:
  // Explicação: Injeção feita mo componte card que contem toda lógica pedida
  // <app-cards></app-cards>

  abirLogin() { 
    this.router.navigate(['login'])
  }

  abirModal() {
    const dialogRef = this.dialog.open(ModalComponent,
      {
        width: '600px',
        height: '200px'
      })

  }
}

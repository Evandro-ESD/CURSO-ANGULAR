import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModelComponent } from '../../model/model/model.component';




@Component({
  selector: 'app-home',
  imports: [MatFormFieldModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dialog: MatDialog) { }

  abirModal() {
    const dialogRef = this.dialog.open(ModelComponent,
      {
        width: '600px',
        height: '200px'
      })
  }
}

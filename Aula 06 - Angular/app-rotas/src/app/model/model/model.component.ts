import { Component } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
MatIconModule



@Component({
  selector: 'app-model',
  imports: [MatIcon , MatDialogActions, MatButtonModule],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css'
})
export class ModelComponent {
  constructor(public dialogRef: MatDialogRef<ModelComponent>) { }

  fecharSemNada(){
    this.dialogRef.close()
  }
}

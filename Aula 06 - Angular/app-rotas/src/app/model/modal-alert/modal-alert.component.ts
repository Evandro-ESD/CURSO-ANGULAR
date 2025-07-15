import { Component, inject, Input } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-alert',
  imports: [MatButtonModule, MatButton],
  templateUrl: './modal-alert.component.html',
  styleUrl: './modal-alert.component.css'
})
export class ModalAlertComponent {
 
@Input() text: string = ''

  dialogRef = inject(MatDialogRef)

  fechar(){
    this.dialogRef.close()
  }
}

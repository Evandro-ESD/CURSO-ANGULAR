import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalAlertComponent } from '../../model/modal-alert/modal-alert.component';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  meuForm: FormGroup

  constructor(public authService: AuthService, 
              private router: Router, 
              private formBuilder: FormBuilder,
              private dialog:MatDialog
            ) {
    this.meuForm = this.formBuilder.group({
      user: [''],
      pass: ['']
    })
  }

  logar() {
    if (this.authService.login(this.meuForm.value)) {
      this.router.navigate(['painelcontrole'])
      console.log('login')
    }
    else {
      // alert('Usúario ou senha inválidos')
      this.abrirModal()
    }
  }

  abrirModal(){
    this.dialog.open(ModalAlertComponent, {
      height: '100px',
      width: '200px', 
      autoFocus: 'user'
    }).afterClosed().subscribe(res=>{
      console.log("Fechou modal", res)
    })

  }
}

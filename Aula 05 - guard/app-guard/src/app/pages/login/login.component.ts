import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = ''
  senha = ''
  erro = false

  constructor(private auth:AuthService, private router:Router){}

  entrar(){
    if(this.auth.login(this.usuario, this.senha)){
      this.router.navigate(['/home'])
    }else{
      this.erro = true
    }
  }
}

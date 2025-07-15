import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  cadastro: FormGroup


  constructor(private fb: FormBuilder, public http: HttpClient) {
    this.cadastro = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required,]],
      nascimento: ['', [Validators.required, Validators.minLength(8)]],
      telefone: ['', [Validators.required]],
    })
  }

  enviar() {
    if (this.cadastro.invalid) {
      alert(`Preencha todos os campos!!`)
      return
    }
    else {
      console.log("Valores: ", this.cadastro.value)
      localStorage.setItem("dados", JSON.stringify(this.cadastro.value))

      alert(`Dados enviados com sucesso!!`)
      this.cadastro.reset()
    }
  }


  pesquisa(): void {
    const result = this.http.get<any[]>('https://pokeapi.co/api/v2/ability/1/').subscribe({
      next:
        res => { console.log(res) },
      error: erro => console.log("Erroo: ", erro.status)
    })
}
}

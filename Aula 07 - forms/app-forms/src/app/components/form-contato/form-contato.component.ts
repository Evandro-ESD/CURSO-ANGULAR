import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contato',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-contato.component.html',
  styleUrl: './form-contato.component.css'
})
export class FormContatoComponent {
  contatoForm: FormGroup //controlar os campos 

  constructor(private fb: FormBuilder) {
    this.contatoForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      assunto: ['', [Validators.required, Validators.minLength(5)]]
    })
  }
  enviarForm() {
    if (this.contatoForm.invalid) {
      alert(`Preencha todos os campos corretamente!!!`)
      return
    }
    alert(`Dados enviados com sucesso!`)
    this.contatoForm.reset()
  }

}



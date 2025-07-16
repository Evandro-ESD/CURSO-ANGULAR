import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule,],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  formContato: FormGroup // para guardar dados do form

  constructor(private fb: FormBuilder) { // melhorar o FormGrop
    this.formContato = this.fb.group({
      nome: ['', [Validators.required]], // Validadores dos campos
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  enviarForm() { // função para submeter formulário
    if (this.formContato.valid) {
      // console.log("Formulário: ", this.formContato.value) // debug para verificar dados do formuário
      this.formContato.reset() // limpa os campos do formulário
      confirm("Confirma o envio dos dados") // mensagem para confirmar o envio dos dados
    } else {
      alert(`Preencha todos os campos`) // mensagem para avisar erro em algum preenchimento
      // console.log("Erro: ....")
    }
  }

}

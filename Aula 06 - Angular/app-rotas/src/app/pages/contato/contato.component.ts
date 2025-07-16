import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule,],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  formContato: FormGroup

  constructor(private fb: FormBuilder) {
    this.formContato = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  enviarForm() {
    if(this.formContato.valid){
      console.log("Formulário: ", this.formContato.value)
      this.formContato.reset()
    }else 
      {
        alert(`Preencha todos os campos`)
        console.log("Erro: ....")}
        
  }

}

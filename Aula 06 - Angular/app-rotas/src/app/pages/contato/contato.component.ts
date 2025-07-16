import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule,],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  formContato:FormGroup

  constructor(private fb:FormBuilder){
    this.formContato = this.fb.group({
      nome:[],
      email:[],
      menssagem:[]
    })
  }

  enviarForm(){
    console.log(this.formContato)
  }

}

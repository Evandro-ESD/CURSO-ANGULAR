import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DadosService } from '../../services/dados.service';
import { MatTableModule } from '@angular/material/table';



@Component({
  selector: 'app-dados',
  imports: [CommonModule, MatTableModule],
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.css'
})
export class DadosComponent implements OnInit {

  arrayDeColunas: string[] = ['id', 'name', 'email',]; /* Array para colunas */

  Url = `https://jsonplaceholder.typicode.com/users`
  dados:any

  constructor(public service: DadosService, public http: HttpClient) { }

  ngOnInit() {
    this._getDados()
  }

  getDados() {
    this.service.getDados()
  }

  mostrarDados() { }


  _getDados() {
    this.http.get(this.Url).subscribe(response => {
      console.log(response)
      this.dados = response
    })
  }


}

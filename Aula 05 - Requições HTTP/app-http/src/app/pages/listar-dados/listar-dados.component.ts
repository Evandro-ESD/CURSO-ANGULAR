import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '../../services/auth-api.service';


@Component({
  selector: 'app-listar-dados',
  imports: [],
  templateUrl: './listar-dados.component.html',
  styleUrl: './listar-dados.component.scss'
})
export class ListarDadosComponent implements OnInit {
  dados: any[] = []

  constructor(public api: AuthApiService) { }

  ngOnInit() {
    this.getDados()
  }

  getDados() {
    this.api.getDados().subscribe((dados:any[]) => {
      // console.log(dados)
      this.dados = dados
      console.log(this.dados)

    })
  }

}

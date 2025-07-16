import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';



@Component({
  selector: 'app-servicos',
  imports: [],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent implements OnInit {

  constructor(private http: HttpClient, public clientesService: ClientesService) { }

  PATH_clientes = 'clientes'
  PATH_cards = 'cards'

  ngOnInit() {

  }

  getCliente() {
    this.clientesService.getData(this.PATH_cards).subscribe({
      next: (res => {
        console.log("Dados dos cards:", res)
      }), error: (e => console.error("Erro na requisição: ", e))
      , complete() {
    },
  })

}
}

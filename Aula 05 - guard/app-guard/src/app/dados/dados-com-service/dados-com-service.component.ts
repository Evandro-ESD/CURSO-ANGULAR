import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-dados-com-service',
  imports: [CommonModule, MatPaginator,
  MatPaginatorModule, MatTableModule, ],
  templateUrl: './dados-com-service.component.html',
  styleUrl: './dados-com-service.component.css'
})
export class DadosComServiceComponent implements OnInit {
  colunas:string[] = ['email']
  nomes: string[] = []

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getCarregar()

  }

  getCarregar() {
    this.api.getUsuarios().subscribe(dados => {
      console.log(dados)
      this.nomes = dados.map(usuarios => usuarios.email).sort((a, b) => a.localeCompare(b))
      console.log("Dados 2 - service", this.nomes)
    })
  }



}

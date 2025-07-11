import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalcularQuadradoComponent } from './pages/calcular-quadrado/calcular-quadrado.component';
import { ListarDadosComponent } from './pages/listar-dados/listar-dados.component';
import { MostrarDadosComponent } from './pages/mostrar-dados/mostrar-dados.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: '– Desenvolvimento Web com Angular 19'},
    {path: 'quadrado', component: CalcularQuadradoComponent, title: 'Calculo do Quadrado'},
    {path: 'requisicao', component: ListarDadosComponent, title: 'Requisição HTTP'},
    {path: 'quadrado-formbuilder', component: MostrarDadosComponent, title: 'Quadrado-formbuilder'},
];

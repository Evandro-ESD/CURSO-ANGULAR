import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { PainelComponent } from './components/adm/painel/painel.component';
import { controleGuard } from './guards/controle.guard';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path: '', component: HomeComponent,},
    {path: 'sobre', component: SobreComponent, data:  {title: 'Sobre'}},
    {path: 'servicos', component: ServicosComponent, data: {title: 'Serviços'}},
    {path: 'contatos', component: ContatoComponent,  data: {title: 'Contatos'}},
    {path: 'painelcontrole', component: PainelComponent,  data: {title: 'Painel de Controle'}, canActivate: [controleGuard]},
    {path: 'login', component: LoginComponent, data: {title: 'Área de funcionários'},},
];

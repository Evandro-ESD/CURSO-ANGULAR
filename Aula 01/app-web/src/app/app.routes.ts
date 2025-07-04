import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

export const routes: Routes = [
    {path:'', component: HomeComponent, title: '🏡 Home'},
    {path:'sobre', component: SobreComponent, title: '📚 Sobre'},
    {path:'contato', component: ContatoComponent, title: '📲 Contato'},
    {path:'produtos', component: ProdutosComponent, title: ' 🧮 Produtos'},
];

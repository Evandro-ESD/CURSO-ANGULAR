import { Routes } from '@angular/router';
import { FormContatoComponent } from './components/form-contato/form-contato.component';
import { CadastroComponent } from './cadastro/cadastro/cadastro.component';

export const routes: Routes = [
    {path: 'forms', component: FormContatoComponent},
    {path: 'cadastro', component: CadastroComponent},
];

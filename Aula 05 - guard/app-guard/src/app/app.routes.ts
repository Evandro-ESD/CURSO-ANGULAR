import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { DadosComponent } from './dados/dados/dados.component';

export const routes: Routes = [
   
    {path: '', redirectTo: '/login', pathMatch: 'full'}, /*  */
    {path: 'login', component: LoginComponent},
    {path: 'dados', component: DadosComponent},
    {path: 'home', component: HomeComponent, canActivate: [authGuard]},
];

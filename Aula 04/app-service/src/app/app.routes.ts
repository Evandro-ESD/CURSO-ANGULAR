import { Routes } from '@angular/router';
import { Imc } from './app/imc/imc';
import { Quadrado } from './app/quadrado/quadrado';

export const routes: Routes = [
    {path: 'imc', component: Imc},
    {path: 'quadrado', component: Quadrado},
];

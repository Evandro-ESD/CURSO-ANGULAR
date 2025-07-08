import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'pedidos', component: OrdersComponent, title: 'Pedidos' },
    { path: 'sobre', component: AboutComponent, title: 'Sobre' },
    { path: 'contatos', component: ContactsComponent, title: 'Contatos' },
    { path: 'menu', component: MenuComponent, title: 'Menu' },
];

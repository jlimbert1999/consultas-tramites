import { Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { QueriesComponent } from './queries/queries.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

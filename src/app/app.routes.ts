import { Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { QueriesComponent } from './queries/queries.component';
import { HomeComponent } from './pages/home/home.component';
import { InformationComponent } from './presentation/pages/information/information.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'consultas',
    component: InformationComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

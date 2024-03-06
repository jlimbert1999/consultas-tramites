import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimengModule } from './primeng/primeng.module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PrimengModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'consultas';
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: 'home',
      },
      {
        label: 'Ingresar',
        icon: 'pi pi-fw pi-user',
        routerLink: 'login',
      },
    ];
  }
}

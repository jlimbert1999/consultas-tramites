import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../primeng/primeng.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PrimengModule
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 }

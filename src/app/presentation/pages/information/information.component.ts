import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent { }

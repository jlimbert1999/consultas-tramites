import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphComponent {
  workflow = input.required();
}

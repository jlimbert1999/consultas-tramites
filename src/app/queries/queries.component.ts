import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';

@Component({
  selector: 'app-queries',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  templateUrl: './queries.component.html',
  styles: ` `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueriesComponent {}

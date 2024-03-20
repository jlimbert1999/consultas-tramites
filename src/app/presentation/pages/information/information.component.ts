import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimengModule } from '../../../primeng/primeng.module';
import { QueryService } from '../../../services/query.service';
import { procedureResponse } from '../../../infrastructure/interfaces/procedure-response.interface';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PrimengModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent {
  private fb = inject(FormBuilder);
  queryService = inject(QueryService);
  data = signal<procedureResponse | null>(null);
  workflow: any;

  QueryForm = this.fb.nonNullable.group({
    dni: ['', Validators.required],
    pin: ['', Validators.required],
  });

  search() {
    if (this.QueryForm.invalid) return;
    this.queryService
      .getData(
        this.QueryForm.get('dni')?.value!,
        +this.QueryForm.get('pin')?.value!
      )
      .subscribe((data) => {
        console.log(data);
        this.data.set(data.procedure);
      });
  }

  get procedure() {
    return this.data()!;
  }
}

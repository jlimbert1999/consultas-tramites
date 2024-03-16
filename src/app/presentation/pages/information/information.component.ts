import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
  fb = inject(FormBuilder);
  queryService = inject(QueryService);
  data = signal<procedureResponse | null>(null);
  workflow: any;

  messages: any = [
    { severity: 'success', summary: 'Success', detail: 'Message Content' },
    { severity: 'success', summary: 'Success', detail: 'Message Content' },
  ];

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
        this.data.set(data.procedure)
        console.log(data.workflow);
      });
  }

  get procedure() {
    return this.data!;
  }
}

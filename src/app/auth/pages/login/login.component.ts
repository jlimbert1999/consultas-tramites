import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimengModule } from '../../../primeng/primeng.module';
import { QueryService } from '../../../services/query.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, PrimengModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  fb = inject(FormBuilder);
  queryService = inject(QueryService);

  LoginForm = this.fb.nonNullable.group({
    dni: ['', Validators.required],
    code: ['', Validators.required],
  });

  login() {
    
  }
}

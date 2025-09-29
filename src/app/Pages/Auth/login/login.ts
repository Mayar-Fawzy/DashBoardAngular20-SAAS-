import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../Core/services/login';
import { IloginReseltRoot } from '../Core/Interface/ilogin';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink, CommonModule],

  templateUrl: './login.html',
  styleUrl: './login.scss'
})

export class LoginComponent {
// Email : mayar2878@gmail.com
// Password: 12121212
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private loginService = inject(LoginService);

  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill in all fields correctly.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const { email, password } = this.loginForm.value;

    this.loginService.Login(email, password).subscribe({
      next: (response: IloginReseltRoot) => {
        // Store token (e.g., in localStorage or a state management service)
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userRole', response.user.role);

        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || 'Login failed. Please try again.';
      }
    });
  }
}
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authpage',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatFormField, MatIconModule, MatInputModule, MatButtonModule, MatDividerModule, CommonModule],
  templateUrl: './authpage.component.html',
  styleUrl: './authpage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthpageComponent {
  public hide = signal(true);
  public isLogin: Boolean = true;
  private auth = inject(AuthService);
  private router = inject(Router);

  constructor() {
  }

  registration = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  };

  public userLogin() {
    if (this.login.valid) {
      const { email, password } = this.login.value;
      this.auth.login(email!, password!)
        .then((res) => { this.router.navigate(['profile']) })
        .catch(err => alert('Erro: ' + err))
    }
  }

  public registerNewUser(): void {
    const email = this.registration.get('email')?.value;
    const password = this.registration.get('password')?.value;

    if (email && password) {
      this.auth.registerUser(email.trim(), password?.trim())
        .then(message => {
          alert("registrado!");
        })
        .catch(error => {
          alert(error);
        })
    }
  }

  public changeStateLogin(): void {
    this.isLogin = !this.isLogin;
  }



}

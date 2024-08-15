import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { InputErrorComponent } from '../../components/input-error/input-error.component';

@Component({
  selector: 'app-authpage',
  standalone: true,
  imports: [InputErrorComponent, MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatFormField, MatIconModule, MatInputModule, MatButtonModule, MatDividerModule, CommonModule],
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
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
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
    const { email, password } = this.registration.value;

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

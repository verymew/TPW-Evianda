import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';





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
  public isLogin:Boolean = true;
  private auth = inject(AuthService);

  constructor()
  {
  }

  registration = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  });

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  public registerNewUser(): void
  {
    const email = this.registration.get('email')?.value;
    const password = this.registration.get('password')?.value;

    if(email && password)
    {
      this.auth.registerUser(email.trim(), password?.trim());
      return alert('Registrado');
    }

  }

  public changeStateLogin()
  {
    this.isLogin = !this.isLogin;
  }



}

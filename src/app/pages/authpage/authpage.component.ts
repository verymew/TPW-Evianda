import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';





@Component({
  selector: 'app-authpage',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatFormField, MatIconModule, MatInputModule, MatButtonModule, MatDividerModule],
  templateUrl: './authpage.component.html',
  styleUrl: './authpage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthpageComponent {
  hide = signal(true);

  constructor(){}

  registration = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  });

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }



}

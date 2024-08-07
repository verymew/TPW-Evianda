import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-authpage',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './authpage.component.html',
  styleUrl: './authpage.component.css'
})
export class AuthpageComponent {
  registration = new FormGroup({
    name : new FormControl(),
    password : new FormControl(),
    gender : new FormControl()
  });



}

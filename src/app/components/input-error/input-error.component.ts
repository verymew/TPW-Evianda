import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input-error',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule],
  templateUrl: './input-error.component.html',
  styleUrl: './input-error.component.css'
})
export class InputErrorComponent implements OnInit {
  @Input()
  label = '';
  @Input()
  type = 'text';
  @Input()
  placeholder = '';
  @Input()
  control = new FormControl();
  @Input()
  chaveErro = '';
  @Input()
  msgErro = '';

  erros = new Map();

  constructor() {
    this.erros.set('required', 'Campo obrigatório!');
    this.erros.set('email', 'Formato de e-mail inválido');
    this.erros.set('minlength', 'Mínimo de 6 caracteres');
  }

  ngOnInit() {
    console.log('ngInit');
    this.erros.set(this.chaveErro, this.msgErro);
  }


}

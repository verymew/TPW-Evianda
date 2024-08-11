import { Component } from '@angular/core';
import { Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { Input, Output, EventEmitter } from '@angular/core';
import { InputErrorComponent } from '../input-error/input-error.component';

@Component({
  selector: 'app-vianda-crud',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatStepperModule, MatButtonModule, InputErrorComponent],
  templateUrl: './vianda-crud.component.html',
  styleUrl: './vianda-crud.component.css'
})
export class ViandaCrudComponent {
  @Input() initialData: any;
  @Output() save = new EventEmitter<any>();
  @Output() error = new EventEmitter<any>();

  form = new FormGroup({
    nomevianda: new FormControl('', Validators.required),
    bairro: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    cidade: new FormControl('', Validators.required),
    cardapio: new FormControl('', Validators.required),
    whatsapp: new FormControl(''),
    id: new FormControl(''),
  });

  isLinear = true;

  onSave() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      console.log('erro');
    }
    this.save.emit(this.form.value);
  }

  ngOnInit() {
    if (this.initialData) {
      this.form.patchValue(this.initialData);
    }
  }
}

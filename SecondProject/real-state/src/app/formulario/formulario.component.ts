import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  template: `
  <h2 class="section-heading">Inicio Sesion</h2>
        <form [formGroup]="logInForm" (ngSubmit)="submitLogIn()">
          <label for="user-name">Nombre</label>
          <input id="user-name" type="text" formControlName="userName">

          <label for="last-name">Apellido</label>
          <input id="last-name" type="text" formControlName="lastName">

          <label for="age">Edad</label>
          <input id="age" type="number" formControlName="age">

          <label for="email">EMAIL</label>
          <input id="email" type="email" formControlName="email">

          <div class="checkbox-container">
            <label for="check">Aceptar Condiciones</label>
            <input id="check" type="checkbox" class="primary" formControlName="conditions">
          </div>

          <button type="submit" class="primary" [disabled]="!logInForm.valid">Iniciar Sesion</button>
        </form>
  `,
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  logInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.logInForm = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]*$")]], 
      lastName: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]*$")]], 
      age: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(17)]],
      email: ['', [Validators.required, Validators.email]],
      conditions: [false, Validators.required]
    });
  }

  submitLogIn() {
    if (this.logInForm.get('conditions')?.value == false) {
      window.alert("Para iniciar sesion acepte las condiciones")
    } else {
      window.alert("Bienvenido " + this.logInForm.get('userName')?.value);
    }
  }
  
}


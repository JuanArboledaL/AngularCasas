import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  imports: [],
  template: `
  <form>
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" placeholder="Ingrese su nombre:" #nombre required/>
    <label for="apellido">apellido</label>
    <input type="text" id="apellido" placeholder="Ingrese su apellido" #apellido required/>
    <label for="edad">Edad</label>
    <input type="number" id="edad" placeholder="Ingrese su edad" #edad required />
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="E-mail" #email required/>
    <input type="checkbox" id="che" value="Acepto terminos y condiciones" #condiciones required/>
  </form>
  <button id="botonRegistro" type="button" #btnRegistro disabled>Registrarse</button>
  `,
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  constructor(){


  }

  
  
}


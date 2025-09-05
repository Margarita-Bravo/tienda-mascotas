import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Chat } from '../chat/chat';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  email: string = '';
  nombre: string = '';
  telefono: string = '';
  mensaje:string='';
  mensajeEnviado=false;

   constructor(private router: Router) {}

  contacto = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje:'',
  };

   onSubmitContacto(form:any){
    if (form.valid) {
    
      console.log("Datos enviados:", this.contacto);
      this.mensajeEnviado=true;
      form.resetForm();
   }
  }

   cerrarModal() {
    this.mensajeEnviado = false;
}
}

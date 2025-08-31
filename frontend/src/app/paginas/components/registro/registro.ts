import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  nombre: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  registrar() {
    console.log('Registrando usuario:', this.nombre, this.email, this.password);
   
    alert('Usuario registrado correctamente');
    this.router.navigate(['/login']); 
  }
}

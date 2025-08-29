import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
   email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    console.log('Intentando login con:', this.email, this.password);
   
    alert('Login exitoso');
    this.router.navigate(['/']); 
  }
}

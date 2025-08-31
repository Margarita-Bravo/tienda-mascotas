import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CarritoService } from '../../../servicios/carrito.service';
import { AuthService } from '../../../servicios/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Carrito } from '../../../paginas/components/carrito/carrito';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,Carrito],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isOpen = false;
  // isLoggedIn = true;
  carritoCantidad = 0;
  perfilMenuOpen = false;
  carritoMenuOpen = false;

  constructor(private carritoService: CarritoService,public authService: AuthService,private router: Router) {
    this.carritoService.cantidad$.subscribe(cant=>this.carritoCantidad=cant);
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  // loginToggle() {
  //    this.isLoggedIn = !this.isLoggedIn;
  // }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.perfilMenuOpen = false; 
  }

  togglePerfilMenu() {
  this.perfilMenuOpen = !this.perfilMenuOpen;
}

 isLoggedIn = computed(() => this.authService.isLoggedIn());

 toggleCarritoMenu() {
  this.carritoMenuOpen = !this.carritoMenuOpen;
}

}

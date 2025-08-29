import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Carrito } from '../carrito/carrito';
import { CarritoService } from '../../../servicios/carrito.service';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './pago.html',
  styleUrl: './pago.css'
})
export class Pago {
  metodo: 'tarjeta' | 'transferencia' | null = null;
  pagoProcesado = false;
procesando = false;

  
  numeroTarjeta = '';
  titular = '';
  vencimiento = '';
  cvv = '';

  constructor(public carritoService: CarritoService,private router: Router) {}

  get totalCompra(): number {
    return this.carritoService.obtenerItems()
      .reduce((sum, item) => sum + Number(item.producto.precio) * item.cantidad, 0);
  }

  seleccionarMetodo(metodo: 'tarjeta' | 'transferencia') {
    this.metodo = metodo;
  }

  procesarPago() {
    if (this.metodo === 'tarjeta') {
      if (!this.numeroTarjeta || !this.titular || !this.vencimiento || !this.cvv) {
        alert('Por favor completa todos los campos de la tarjeta');
        return;
      }
    }

    this.procesando = true;

    setTimeout(() => {
      this.pagoProcesado = true;
      this.procesando = false;
      this.carritoService.limpiarCarrito();
    }, 1500);
  }

  reiniciarPago() {
    this.metodo = null;
    this.pagoProcesado = false;
    this.numeroTarjeta = '';
    this.titular = '';
    this.vencimiento = '';
    this.cvv = '';
    this.router.navigate(['']);
  }
}

import { Component } from '@angular/core';
import { ProductoModelo } from '../../../modelos/productoModelo';
import { CarritoService } from '../../../servicios/carrito.service';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule,FormsModule],
    standalone: true,
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {
  items: { producto: ProductoModelo, cantidad: number }[] = [];

   constructor(public carritoService: CarritoService,private router: Router, private viewportScroller: ViewportScroller) {
    this.items = this.carritoService.obtenerItems();
  }

    eliminar(item: { producto: ProductoModelo, cantidad: number }) {
      this.items = this.items.filter(i => i.producto.productoId !== item.producto.productoId);
      this.carritoService.limpiarCarrito(); 
      this.items.forEach(i => this.carritoService.agregarAlCarrito(i.producto, i.cantidad));
  }

  limpiar() {
    this.items = [];
    this.carritoService.limpiarCarrito();
  }

  seguirComprando() {
    
  if (this.router.url === '/') {
    
    this.viewportScroller.scrollToAnchor('productos');
  } else {
   
    this.router.navigate(['/'], { fragment: 'productos' }).then(() => {
      this.viewportScroller.scrollToAnchor('productos');
    });
  }

  }

  abonar() {
    this.router.navigate(['/pago']);
    console.log("Procesar pago de:", this.items);
  }
}

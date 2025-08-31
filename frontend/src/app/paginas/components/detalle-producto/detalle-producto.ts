import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductoModelo } from '../../../modelos/productoModelo';
import { ProductosService } from '../../../servicios/productos.service';
import { CarritoService } from '../../../servicios/carrito.service';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css'
})
export class DetalleProducto {
  producto!: ProductoModelo;
  cantidad: number = 1;

  constructor(private route: ActivatedRoute,private productosService: ProductosService, private carritoService: CarritoService) {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    const encontrado = this.productosService.obtenerProductoPorId(id);
    if (encontrado) this.producto = encontrado;
  }

  aumentarCantidad() {
     this.cantidad++; 
    }

  disminuirCantidad() {
     if (this.cantidad > 1) 
      this.cantidad--; 
    }
    
  agregarAlCarrito() { 
    this.carritoService.agregarAlCarrito(this.producto, this.cantidad);
    console.log('Producto agregado:', this.producto, 'Cantidad:', this.cantidad); 
  }
}



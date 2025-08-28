import { Component } from '@angular/core';
import { ProductoModelo } from '../../../modelos/productoModelo';
import { CommonModule,Location  } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../../servicios/productos.service';

@Component({
  selector: 'app-alimentos',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './alimentos.html',
  styleUrl: './alimentos.css'
})
export class Alimentos {
  
   productos: ProductoModelo[] = [];

   constructor(private productosService: ProductosService,private location: Location) {
    this.productos = this.productosService.obtenerProductos();
   }
   volver() {
    this.location.back();
  }

}

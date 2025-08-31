import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductoModelo } from '../modelos/productoModelo';


@Injectable({ providedIn: 'root' })
export class CarritoService {
  private items: { producto: ProductoModelo, cantidad: number }[] = [];

  // BehaviorSubject para notificar cambios en la cantidad total
  private cantidadSubject = new BehaviorSubject<number>(0);
  cantidad$ = this.cantidadSubject.asObservable();

  agregarAlCarrito(producto: ProductoModelo, cantidad: number) {
    const existente = this.items.find(i => i.producto.productoId === producto.productoId);
    if (existente) {
      existente.cantidad += cantidad;
    } else {
      this.items.push({ producto, cantidad });
    }
    this.actualizarCantidad();
  }

  private actualizarCantidad() {
    const total = this.items.reduce((sum, item) => sum + item.cantidad, 0);
    this.cantidadSubject.next(total);
  }

  obtenerItems() {
    return [...this.items]; 
  }

  limpiarCarrito() {
    this.items = [];
    this.cantidadSubject.next(0);
  }
}

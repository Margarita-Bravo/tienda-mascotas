import { Injectable } from '@angular/core';
import { ProductoModelo } from '../modelos/productoModelo';
;

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos: ProductoModelo[] =[
    {
      productoId: 1,
      nombre: 'Comida para perro adulto',
      descripcion: 'Alimento balanceado para perros adultos.',
      imagen: 'assets/alimentos/ali-perro.png',
      precio:11500,
      marca:'Excellent',
    },
    {
      productoId: 2,
      nombre: 'Comida para gato',
      descripcion: 'Alimento premium para gatos.',
      imagen: 'assets/alimentos/ali-gato.png',
      precio:25852,
      marca:'Sieger',
      
    },
    {
      productoId: 3,
      nombre: 'Snack saludable',
      descripcion: 'Snack natural para mascotas.',
      imagen: 'assets/alimentos/ali-snack.png',
      precio:3500,
      marca:'Mon Ami',
    },
    {
      productoId: 4,
      nombre: 'Comida para aves',
      descripcion: 'Alimento proteico y energético.',
      imagen: 'assets/alimentos/ali-aves.png',
      precio:11250,
      marca:'Exzootix',
    },
     {
      productoId: 5,
      nombre: 'Comida para conejos, cobayos, chinchilla, hamster',
      descripcion: 'Heno para roedores, calidad premium.',
      imagen: 'assets/alimentos/ali-conejo.png',
      precio:15840,
      marca:'Timothy',
    },
      {
        productoId: 6,
      nombre: 'Comida para peces',
      descripcion: 'Alimento en escamas para peces de agua fria.',
      imagen: 'assets/alimentos/ali-pez.png',
      precio:17325,
      marca:'Shulet',
    },
      {
        productoId: 7,
      nombre: 'Comida para tortugas',
      descripcion: 'Alimento deshidratado, de origen vegetal, para nutrición de tortugas y otros reptiles.',
      imagen: 'assets/alimentos/ali-tortuga.png',
      precio:16200,
      marca:'Zootec',
    },
     {
      productoId: 8,
      nombre: 'Comida para gallinas, patos, ganzos, pavos',
      descripcion: 'Alimento completo de alta calidad formulado para satisfacer las necesidades nutricionales de una bandada de aves de corral mixta.',
      imagen: 'assets/alimentos/ali-pollos.png',
      precio:45800,
      marca:'All Flock ',
    },
    
  ];

  constructor() {}

  //todos los productos
  obtenerProductos(): ProductoModelo[] {
    return this.productos;
  }

  //un producto por id
  obtenerProductoPorId(id: number): ProductoModelo | undefined {
    return this.productos.find(p => p.productoId === id);
  }
}
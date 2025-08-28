import { Routes } from '@angular/router';
import { Home } from './paginas/components/home/home';
import { Alimentos } from './paginas/components/alimentos/alimentos';
import { DetalleProducto } from './paginas/components/detalle-producto/detalle-producto';

export const routes: Routes = [
    { path: '', component: Home },
  { path: 'alimentos', component: Alimentos },
  {path:'detalle-producto/:id',component:DetalleProducto},
];

import { Routes } from '@angular/router';
import { Home } from './paginas/components/home/home';
import { Alimentos } from './paginas/components/alimentos/alimentos';
import { DetalleProducto } from './paginas/components/detalle-producto/detalle-producto';
import { Registro } from './paginas/components/registro/registro';
import { Login } from './paginas/components/login/login';
import { Pago } from './paginas/components/pago/pago';
import { Veterinaria } from './paginas/components/veterinaria/veterinaria';
import { Aseo } from './paginas/components/aseo/aseo';
import { Adopcion } from './paginas/components/adopcion/adopcion';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'alimentos', component: Alimentos },
  { path: 'detalle-producto/:id', component: DetalleProducto },
  { path: 'registro', component: Registro },
  { path: 'login', component: Login },
  { path: 'pago', component: Pago },
  { path: 'veterinaria', component: Veterinaria },
  { path: 'aseo', component: Aseo },
  { path: 'adopcion', component: Adopcion },
];

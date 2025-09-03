import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { Home } from './app/paginas/components/home/home';
import { Alimentos } from './app/paginas/components/alimentos/alimentos';
import { DetalleProducto } from './app/paginas/components/detalle-producto/detalle-producto';
import { Registro } from './app/paginas/components/registro/registro';
import { Login } from './app/paginas/components/login/login';
import { Pago } from './app/paginas/components/pago/pago';
import { Veterinaria } from './app/paginas/components/veterinaria/veterinaria';
import { Aseo } from './app/paginas/components/aseo/aseo';
import { Adopcion } from './app/paginas/components/adopcion/adopcion';
import { Contacto } from './app/paginas/components/contacto/contacto';


bootstrapApplication(App, {
  providers: [
    provideRouter(
      [
        { path: '', component: Home },
        { path: 'alimentos', component: Alimentos },
        { path: 'detalle-producto/:id', component: DetalleProducto },
        { path: 'registro', component: Registro },
        { path: 'login', component: Login },
        { path: 'pago', component: Pago },
        { path: 'veterinaria', component: Veterinaria },
        { path: 'aseo', component: Aseo },
        { path: 'adopcion', component: Adopcion },
        { path: 'contacto', component: Contacto },
      ],
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    )
  ]
}).catch(err => console.error(err));
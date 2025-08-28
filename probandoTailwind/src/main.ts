import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { Home } from './app/paginas/components/home/home';
import { Alimentos } from './app/paginas/components/alimentos/alimentos';
import { DetalleProducto } from './app/paginas/components/detalle-producto/detalle-producto';


bootstrapApplication(App, {
  providers: [
    provideRouter(
      [
        { path: '', component: Home },
        { path: 'alimentos', component: Alimentos },
        {path:'detalle-producto/:id',component:DetalleProducto},
      ],
      withEnabledBlockingInitialNavigation()
    )
  ]
}).catch(err => console.error(err));
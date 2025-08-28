import { Component, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Footer } from "./shared/components/footer/footer";
import { Home } from './paginas/components/home/home';
import { Alimentos } from './paginas/components/alimentos/alimentos';
import { routes } from './app.routes';




@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [ Header, Footer,Home],,
   imports: [Header, 
    Footer, 
    RouterModule],
  // templateUrl: './app.html',RouterModule.forRoot(routes)
  styleUrl: './app.css',
  template: `
    <div class="flex flex-col min-h-screen">
      <app-header></app-header>
      
      <!-- Contenido principal ocupa todo el espacio disponible -->
      <main class="flex-grow pt-20">
        <!-- <app-home></app-home> -->
         <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>
    </div>
  `

})
export class App {
  protected readonly title = signal('probandoTailwind');
}

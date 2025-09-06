import { Component, signal } from '@angular/core';
import { Footer } from "./shared/components/footer/footer";
import { Home } from './paginas/components/home/home';
import { Alimentos } from './paginas/components/alimentos/alimentos';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Header } from './shared/components/header/header';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, RouterModule,CommonModule],
  styleUrl: './app.css',
  template: `
    <div class="flex flex-col min-h-screen">
      <app-header></app-header>
      
      <!-- Contenido principal -->
      <main class="flex-grow pt-15">
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

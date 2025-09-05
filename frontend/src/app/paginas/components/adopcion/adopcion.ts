import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-adopcion',
  standalone: true,
  imports: [CommonModule,RouterLink], 
  templateUrl: './adopcion.html',
  styleUrl: './adopcion.css'
})
export class Adopcion {

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-veterinaria',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './veterinaria.html',
  styleUrl: './veterinaria.css'
})
export class Veterinaria {

}

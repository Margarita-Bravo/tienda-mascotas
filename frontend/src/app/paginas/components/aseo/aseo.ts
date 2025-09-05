import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aseo',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './aseo.html',
  styleUrl: './aseo.css'
})
export class Aseo {

}

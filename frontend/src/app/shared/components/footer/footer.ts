import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone:true,
  imports: [RouterLink,CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

}

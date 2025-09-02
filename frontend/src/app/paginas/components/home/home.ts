import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { Chat } from '../chat/chat';


@Component({
  selector: 'app-home',
   standalone: true,
  imports: [CommonModule, RouterModule,Chat],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  showModal = false;

  ngOnInit() {
 
    setTimeout(() => {
      this.showModal = true;
    }, 2000);
  }

  closeModal() {
    this.showModal = false;
  }

  subscribe() {
    alert('¡Gracias por suscribirte!');
    this.closeModal();
   
  }
}

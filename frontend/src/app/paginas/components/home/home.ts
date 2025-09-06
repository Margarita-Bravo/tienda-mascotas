import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { Chat } from '../chat/chat';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, Chat,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  showModal = false;
  cupon = {
    email: '',
    nombreMascota: '',
    tipoMascota: ''
  };

  enviarCupon() {
    if (!this.cupon.email || !this.cupon.nombreMascota || !this.cupon.tipoMascota) return;

    console.log('Datos enviados:', this.cupon);
    alert('¡Gracias! Te enviaremos tu cupón al email indicado.');


    this.cupon = { email: '', nombreMascota: '', tipoMascota: '' };
  }

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

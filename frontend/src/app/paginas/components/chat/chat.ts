import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat {
  chatOpen = false;
  
  messages: { from: string, text?: string, image?: string }[] = [
  { from: 'bot', text: '¡Hola! 🐶 Bienvenido al chat de soporte 💬 de Narices Frías!'},
  { from: 'bot', image: '/assets/felices-los-cuatro.png' } 
];

  newMessage = '';

  toggleChat() {
    this.chatOpen = !this.chatOpen;
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    this.messages.push({ from: 'user', text: this.newMessage });

    setTimeout(() => {
      this.messages.push({ from: 'bot', text: '¡Gracias por tu mensaje! Te responderemos pronto.' });
    }, 1000);

    this.newMessage = '';
  }
}

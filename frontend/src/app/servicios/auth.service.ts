import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
 isLoggedIn = signal(false);

  login() { 
     this.isLoggedIn.set(true); 
}

  logout() {
    this.isLoggedIn.set(false);
    localStorage.removeItem('token'); 
 }
 
 checkAuth() {
    // Si guardás el token en localStorage:
    const token = localStorage.getItem('token');
    this.isLoggedIn.set(!!token);
  }
}
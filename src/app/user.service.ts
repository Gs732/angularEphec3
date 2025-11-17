import { Injectable, signal } from '@angular/core';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
// Ici je vais mettre l utilisateur par défaut
  private defaultUser: User = {
    id: '0',
    firstName: 'John',
    lastName: 'Doe',
    email: 'jean.dupont@example.com',
    birthDate: new Date('1990-05-15'),
    address: '123 Rue de la Paix, 1000 Bruxelles',
    role: 'user'
  };
  currentUser = signal<User>(this.defaultUser);
  toggleUserRole() {
    const user = this.currentUser();
    this.currentUser.set({ ...user, role: user.role === 'admin' ? 'user' : 'admin' });
  
}
isAdmin() {
    return this.currentUser().role === 'admin';
  }
  constructor() { }
}

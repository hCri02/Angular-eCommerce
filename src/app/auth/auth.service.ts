import { Injectable } from '@angular/core';
import { Persona } from '../dati/persona.data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false

  constructor() { }

  users: Persona[] = []

  isAuthenticated() {
    return this.isLoggedIn
  }

  getUsers() {
    return this.users
  }

  setLogged(logged: boolean) {
    this.isLoggedIn = logged
  }

  pushUser(user: Persona) {
    this.users.push(user)
  }
}

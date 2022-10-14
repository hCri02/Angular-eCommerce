import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string
  password: string

  utenteEsiste: boolean

  constructor(private authService: AuthService, private _router: Router) { }

  onClick(v1: HTMLInputElement, v2: HTMLInputElement) {
    this.email = v1.value
    this.password = v2.value

    this.utenteEsiste = false

    for(let user of this.authService.getUsers()) {
      if(this.email === user.email && this.password === user.password) {
        this.utenteEsiste = true
      }
    }

    if(this.utenteEsiste) {
      this.authService.setLogged(this.utenteEsiste)
      this._router.navigate(['/'])
    }
    else {
      alert("Utente non trovato. Email o Password sbagliata")
    }

    console.log("Autenticato: "+this.authService.isAuthenticated())
  }

  loginForm: FormGroup

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    })
  }

}

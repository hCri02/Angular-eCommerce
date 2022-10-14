import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Persona } from '../dati/persona.data'
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService, private _router: Router) { }

  email: string
  password: string
  confirmPassword: string
  rout: string

  onSubmit(v1: HTMLInputElement, v2:HTMLInputElement, v3:HTMLInputElement) {

    this.email = v1.value
    this.password = v2.value
    this.confirmPassword = v3.value

    if(this.password === this.confirmPassword) {

      this.authService.pushUser({email:this.email, password:this.password});
      console.log(this.email, this.password, this.confirmPassword)
      console.log(this.authService.getUsers())
      this._router.navigate(['/login'])
    }
    else {
      alert("La password non corrisponde")
    }
  }

  singUpForm: FormGroup

  ngOnInit(): void {
    this.singUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      confermaPassword: new FormControl(null, Validators.required)
    })
  }

}


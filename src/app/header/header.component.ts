import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CarrelloService } from '../carrello.service';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  contatore = 0

  constructor(private prodottoService :ProdottoService, private authService: AuthService, private _router: Router, private carrello: CarrelloService) { }

  logged!: boolean;

  ngOnInit(): void {
    setInterval(() => {
      this.contatore = this.prodottoService.counter
      this.logged = this.authService.isAuthenticated()
    }, 1000);
  }

  checkAuth() {

    if(this.authService.isAuthenticated()) {
      this._router.navigate(['/checkout'])
    }
    else {
      alert("Devi essere autenticato per proseguire")
    }

  }

  onClickLogout() {
    this.authService.setLogged(false)
    this.carrello.clearCarrello()
    this.carrello.clearSomma()
    this.contatore = 0
    alert("Ti sei disconnesso")
    this._router.navigate(['/'])
  }

  onRicerca(e: Event) {
    const inputRef = <HTMLInputElement>e.target
    this.prodottoService.filtraProdotto(inputRef.value)
  }

}

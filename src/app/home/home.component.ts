import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CarrelloService } from '../carrello.service';
import { Prodotto } from '../dati/prodotto.data';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prodotti: Prodotto[] = []
  sottratto?: number
  popolari: Prodotto[] = []

  constructor(private prodottoService :ProdottoService, private authService: AuthService, private carrello: CarrelloService) {
    this.prodotti = this.prodottoService.prodotti
  }

  ngOnInit(): void {
    this.prodotti.forEach((prodotto, index) => {

      if (index == 2 || index == 5 || index == 8) {
        this.popolari.push(prodotto)
      }

      this.sottratto = (prodotto.prezzo / 100) * (prodotto.sconto * (-1))
      prodotto.scontato = prodotto.prezzo - this.sottratto
      
      prodotto.scontato = Math.round((prodotto.scontato + Number.EPSILON) * 100) / 100
    });
  }

  conta(prodottoCarrello:Prodotto) {
    console.log(prodottoCarrello);

    if (this.authService.isAuthenticated()) {
      this.prodottoService.incrementaContatore()
      this.carrello.addProdotto(prodottoCarrello);

     this.carrello.calcolaTotale()

      console.log(this.carrello.getCarrello());
    }
    else {
      alert("Devi essere autenticato per aggiungere un prodotto al carrello")
    }

    console.log(this.carrello.getCarrello());
  }

  nonDisponibile() {
    alert("Questo prodotto al momento non è disponibile")
  }

}

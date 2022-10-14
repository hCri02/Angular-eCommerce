import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CarrelloService } from '../carrello.service';
import { Prodotto } from '../dati/prodotto.data';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  prodotti: Prodotto[] = []
  prodottiXiaomi: Prodotto[] = []
  prodottiRedmi: Prodotto[] = []
  prodottiPoco: Prodotto[] = []

  prodottoCarrello!: Prodotto

  sottratto?: number


  constructor(private prodottoService :ProdottoService, private authService: AuthService, private carrello: CarrelloService) {
    this.prodotti = this.prodottoService.prodotti
  }


  ngOnInit(): void {
    this.prodotti.forEach((prodotto, index) => {
      if (prodotto.nome.includes('Xiaomi')) {
        this.prodottiXiaomi.push(prodotto)
      }
      if (prodotto.nome.includes('Redmi')) {
        this.prodottiRedmi.push(prodotto)
      }
      if (prodotto.nome.includes('POCO')) {
        this.prodottiPoco.push(prodotto)
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

}

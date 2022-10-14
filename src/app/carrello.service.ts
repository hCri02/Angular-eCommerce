import { Injectable } from '@angular/core';
import { Prodotto } from './dati/prodotto.data';

Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  private carrello:Prodotto[] = []
  private somma = 0
  private contatore = 0

  constructor() { }

  addProdotto(prod: Prodotto) {
    console.log(prod);
    this.carrello.push(prod)
  }

  getCarrello() {
    return this.carrello
  }

  calcolaTotale() {
    this.somma = this.somma + this.carrello[this.getCarrello().length-1].prezzo
  }

  getSomma() {
    return this.somma
  }

  clearSomma() {
    this.somma = 0
  }

  clearCarrello() {
    this.carrello = []
  }

}
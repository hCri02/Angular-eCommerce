import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../carrello.service';
import { CheckoutService } from '../checkout.service';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-fattura',
  templateUrl: './fattura.component.html',
  styleUrls: ['./fattura.component.css']
})
export class FatturaComponent implements OnInit {

  constructor(private checkoutForm: CheckoutService, private carrello: CarrelloService, private prodotto: ProdottoService) {
  }

  pagamento = this.checkoutForm.getCheckoutForm()
  carrelloProdotti = this.carrello.getCarrello()
  sommaCarrello = this.carrello.getSomma()

  data = Date.now()

  clear() {
    this.carrello.clearCarrello()
    this.prodotto.azzeraContatore()
    this.carrello.clearSomma()
  }

  ngOnInit(): void {
  }

}

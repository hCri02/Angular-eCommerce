import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarrelloService } from '../carrello.service';
import { CheckoutService } from '../checkout.service';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private listaProdotti: ProdottoService, private carrello: CarrelloService, private checkoutForm: CheckoutService, private _router: Router) { }

  prodottiCarrello = this.carrello.getCarrello()
  lengthCarrello = this.prodottiCarrello.length
  somma = this.carrello.getSomma()


  onSubmit(firstName: HTMLInputElement, lastName:HTMLInputElement, username:HTMLInputElement, email:HTMLInputElement, address:HTMLInputElement, zip:HTMLInputElement, nameOnCard:HTMLInputElement, creditCardNumber:HTMLInputElement, expiration:HTMLInputElement, cvv:HTMLInputElement) {
    this.checkoutForm.addCheckoutForm({firstName: firstName.value, lastName: lastName.value, username: username.value, email:email.value, address:address.value, zip:zip.value, nameOnCard:nameOnCard.value, creditCardNumber:creditCardNumber.value, expiration:expiration.value, cvv:cvv.value})


    if(this.lengthCarrello === 0) {
      alert("devi aggiungere qualcosa al carrello per procedere con il pagamento")
      this._router.navigate(['/prodotti'])
    }
    else {
      this._router.navigate(['/fatturata'])
      alert("PAGINA CONFERMA PAGAMENTO")
    }

  }

  carrelloForm!: FormGroup


  ngOnInit(): void {
    this.carrelloForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, Validators.required),
      zip: new FormControl(null, Validators.required),
      nameoncard: new FormControl(null, Validators.required),
      creditcardnumber: new FormControl(null, [Validators.required, Validators.minLength(19), Validators.maxLength(19)]),
      expiration: new FormControl(null, Validators.required),
      cvv: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
    })
  }

}

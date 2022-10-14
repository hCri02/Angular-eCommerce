import { Injectable } from '@angular/core';
import { checkoutForm } from './dati/checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  checkoutForm: checkoutForm[] = []

  constructor() { }

  getCheckoutForm() {
    return this.checkoutForm[this.checkoutForm.length-1]
  }

  addCheckoutForm(form: checkoutForm) {
    this.checkoutForm.push(form)
  }
}
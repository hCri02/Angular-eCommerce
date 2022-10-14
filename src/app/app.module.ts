import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { CarrelloService } from './carrello.service';
import { PersonaService } from './persona.service';
import { ProdottoService } from './prodotto.service';
import { CheckoutService } from './checkout.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FatturaComponent } from './fattura/fattura.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdottiComponent,
    CheckoutComponent,
    HomeComponent,
    LoginComponent,
    PaginaNonTrovataComponent,
    HeaderComponent,
    SignUpComponent,
    ProdottoComponent,
    FatturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CarrelloService, PersonaService, ProdottoService, CheckoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }

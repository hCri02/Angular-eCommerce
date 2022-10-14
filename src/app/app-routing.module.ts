import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { FatturaComponent } from './fattura/fattura.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prodotti', component: ProdottiComponent },
  { path: 'prodotti/:slug', component:ProdottoComponent},
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'fattura', component: FatturaComponent },
  { path: 'pagina-non-trovata', component: PaginaNonTrovataComponent },
  { path: '**', redirectTo: 'pagina-non-trovata' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

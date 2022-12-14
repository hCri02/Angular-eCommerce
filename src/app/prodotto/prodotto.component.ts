import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prodotto } from '../dati/prodotto.data';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  prodotto?:Prodotto

  constructor(private route: ActivatedRoute, private prodottoService: ProdottoService, private router :Router) {
    console.log(route);
    const { slug } = route?.snapshot?.params ?? {}
    this.prodotto = prodottoService.cercaProdotto(slug)
  }

  ngOnInit(): void {
  }

}

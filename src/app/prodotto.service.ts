import { Injectable } from '@angular/core';
import { Prodotto } from './dati/prodotto.data';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  private _prodotti :Prodotto[] = [
    {codice: "001", nome: "Xiaomi 12 Lite 5G", slug: "prod1", descrizione: "Snapdragon® 778G | Tripla fotocamera da 108 MP", prezzo: 499.90, sconto: -10, scontato: 0, foto: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1661333885.70133010!256x256.png?f=webp"},
    {codice: "002", nome: "Xiaomi 11T", slug: "prod2", descrizione: "Fotocamera professionale da 108MP | Ricarica ultra-rapida 67W", prezzo: 599.90, sconto: -35, scontato: 0, foto: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1630653333.95677912!256x256.png?f=webp"},
    {codice: "003", nome: "Xiaomi 12 Pro", slug: "prod3", descrizione: "Modulo fotocamere professionale da 50 MP Snapdragon® 8 Gen 1", prezzo: 999.90, sconto: -25, scontato: 0, foto: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1646741827.86653277!256x256.png?f=webp"},
    {codice: "004", nome: "Redmi Note 11 Pro", slug: "prod4", descrizione: "Display Full HD+ AMOLED da 6,67 MediaTek Helio G96", prezzo: 329.90, sconto: -23, scontato: 0, foto: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1643095089.29012198!256x256.png?f=webp"},
    {codice: "005", nome: "Redmi Note 11S", slug: "prod5", descrizione: "Fotocamera professionale 108 MP | DotDisplay AMOLED 90 Hz", prezzo: 279.90, sconto: -26, scontato: 0, foto: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1643094676.20191867!256x256.png?f=webp"},
    {codice: "006", nome: "Redmi Note 10 Pro", slug: "prod6", descrizione: "Qualcomm® Snapdragon™ 732G | Viaggia a 108MP", prezzo: 329.90, sconto: -35, scontato: 0, foto: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1615348763.92077607!256x256.png?f=webp"},
    {codice: "007", nome: "POCO M5s", slug: "prod7", descrizione: "MediaTek Helio G95 | Quad camera da 64MP con AI", prezzo: 249.90, sconto: -20, scontato: 0, foto: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1661743600.3475658!256x256.png?f=webp"},
    {codice: "008", nome: "POCO M4 Pro", slug: "prod8", descrizione: "AMOLED 90 Hz | Tripla Fotocamera 64 MP | Ricarica Pro da 33 W", prezzo: 279.90, sconto: -18, scontato: 0, foto: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1659691038.38078787!256x256.png?f=webp"},
    {codice: "009", nome: "POCO F4 GT", slug: "prod9", descrizione: "Flagship Snapdragon® 8 Gen 1 a 4nm | Smart 120W HyperCharge", prezzo: 599.90, sconto: -22, scontato: 0, foto: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1656388856.48499359!256x256.png?f=webp"},
  ]

  private _contatore = 0

  // private _carrello :Prodotto[] = []

  // aggiungiACarrello(prodotto:Prodotto) {
  //   this._carrello.push(prodotto)
  // }

  // togliDaCarrello(prodotto:Prodotto) {
  //   this._carrello = this._carrello.filter(p => p !== prodotto)
  // }

  incrementaContatore() {
    this._contatore ++
  }

  azzeraContatore() {
    this._contatore = 0
  }

  get counter() {
    return this._contatore
  }

  get prodotti() {
    return [...this._prodotti]
  }

  cercaProdotto(slug: string) {
    return this._prodotti.find(p => p.slug === slug)
  }

  // get carrello() {
  //   return [...this._carrello]
  // }

  constructor() { }
}

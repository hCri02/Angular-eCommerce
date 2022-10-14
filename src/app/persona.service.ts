import { Injectable } from '@angular/core';
import { Persona } from './dati/persona.data';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private _persone :Persona[] = []

  get persone() {
    return [...this._persone]
  }

  constructor() { }
}

import { Injectable } from '@angular/core';

export interface Opponents {
  name: string,
  isChecked: boolean
}

export interface Games {
  opponent: string,
  won: boolean,
  lost: boolean
}

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  newOpponent: string;

  constructor() { }
}

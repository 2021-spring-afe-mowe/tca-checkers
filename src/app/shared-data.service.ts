import { Injectable } from '@angular/core';

export interface Opponents {
  name: string
}

export interface Games {
  opponentName: string,
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

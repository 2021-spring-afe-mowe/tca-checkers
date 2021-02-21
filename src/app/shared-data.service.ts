import { Injectable } from '@angular/core';

export interface Opponents {
  name: string
}

export interface Games {
  //opponentName maybe an array of opponent names???
  opponentName: string,
  won: boolean,
  lost: boolean
}

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  //variable to display who player chose to play
  playerTwo: string;

  constructor() { }

  setPlayerTwo(opponentChosen: string) {
      this.playerTwo = opponentChosen;
  }

  getPlayerTwo() {
    return this.playerTwo;
  }
}

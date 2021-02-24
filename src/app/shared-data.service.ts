import { Injectable } from '@angular/core';

export interface Opponents {
  name: string
}

export interface Games {
  //opponentName maybe an array of opponent names???
  opponentName: string
  won: boolean
}

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  //variable to display who player chose to play, used on stats screen, set on welcome screen
  playerTwo: string;

  //array to hold oppoents
  opponents: Opponents[] = [];

  constructor() { }

  //Welcome Screen Logic //mockup some data
    getOpponents(): Opponents[] {

      this.opponents = [
        {
          name: 'Sherman'
        },
        {
          name: 'Tina'
        }
      ];
  
      console.log(this.opponents);
    
      return this.opponents
    }

    
  //Stats Screen Logic
  setPlayerTwo(opponentChosen: string) {
      this.playerTwo = opponentChosen;
  }

  getPlayerTwo() {
    return this.playerTwo;
  }
}

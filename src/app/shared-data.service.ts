import { Injectable } from '@angular/core';

export interface Opponents {
  name: string;
}

export interface Games {
  opponentName: string;
  result: string;
}

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  //variable to display who player chose to play, used on stats screen, set on welcome screen
  playerTwo: string;

  //array to hold oppoents
  opponents: Opponents[] = [];

  //array to hold game data
  checkerGames: Games[] = [];

  constructor() { }

  //Welcome Screen Mock Data
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

    //Stats screen Mock Data
    getGamesData() {
      this.checkerGames = [
        {
          opponentName: "Sherman"
          , result: "L"
      }
      , {
          opponentName: "Sherman"
          , result: "D"
      }
      , {
        opponentName: "Sherman"
        , result: "W"
      }
      , {
          opponentName: "Sherman"
          , result: "L"
      }
      , {
          opponentName: "Sherman"
          , result: "L"
      }
      , {
          opponentName: "Sherman"
          , result: "Q"
      }
      , {
          opponentName: "Sherman"
          , result: "W"
      }
      , {
          opponentName: "Tina"
          , result: "L"
      } 
      , {
          opponentName: "Tina"
          , result: "Q"
      }
      , {
          opponentName: "Tina"
          , result: "Q"
      }
  
      ];

      return this.checkerGames;
    }
    
  //Stats Screen Logic
  setPlayerTwo(opponentChosen: string) {
      this.playerTwo = opponentChosen;
  }

  getPlayerTwo() {
    return this.playerTwo;
  }

  //Game Screen
  addNewWinningGame(playerTwo) {
    const newGame = {
      opponentName: playerTwo,
      result: "W"
    };
    console.log(newGame.result);
    console.log(playerTwo);
    this.checkerGames = [
      ...this.checkerGames,
      newGame
    ];
  }
}

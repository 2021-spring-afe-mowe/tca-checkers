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

  //variable to display who player chose to play, 
      //used on stats screen, set on welcome screen
  playerTwo: string;

  //array to hold oppoents
  opponents: Opponents[] = 
  [
    {
      name: 'Sherman'
    },
    {
      name: 'Tina'
    }
  ];

  //array to hold game data
  checkerGames: Games[] =
    [
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

  constructor() { }

  //Welcome Screen Mock Opponent Data
  getOpponents() {
    return this.opponents;
  }

  //Welcome screen Mock Game Data
  getGamesData() {
    return this.checkerGames;
  }

  //Called on Games Screen when user "W", "L", or "D"...Displays results on stats-screen
  addGameData(newResult: Games) {
    console.log(newResult);
    this.checkerGames = [
      ...this.checkerGames,
      newResult
    ]
  }

  //called on Welcome Screen when you add another opponent
  addOpponent(newOpponent: Opponents) {
    console.log(newOpponent);
    this.opponents = [
      ...this.opponents,
      newOpponent
    ]
  }

  //SET PLAYER TWO FOR GAMES SCREEN
  setPlayerTwo(opponentChosen: string) {
    this.playerTwo = opponentChosen;
  }

  getPlayerTwo() {
    return this.playerTwo;
  }
}

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
    return this.checkerGames;
  }

  addGameData(newResult: Games) {
    console.log(newResult);
    this.checkerGames = [
      ...this.checkerGames,
      newResult
    ]
  }

  //Stats Screen Logic
  setPlayerTwo(opponentChosen: string) {
    this.playerTwo = opponentChosen;
  }

  getPlayerTwo() {
    return this.playerTwo;
  }
}

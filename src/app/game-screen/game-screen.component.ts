import { Component, OnInit } from '@angular/core';
import { SharedDataService, Games } from '../shared-data.service';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {

  checkerGame: Games[] = [];

  //Tried to inject dialog into constructor, was getting promise error???
  constructor(private sharedDataSvc: SharedDataService) {}

  ngOnInit(): void {
    this.checkerGame = this.sharedDataSvc.getGamesData();
  }

  //Get the games so I can add new games to array of games objects

  playerTwo = this.sharedDataSvc.getPlayerTwo();

  addNewWinningGame() {
    const newGame = {
      opponentName: this.playerTwo,
      result: "W"
    };
    this.sharedDataSvc.addGameData(newGame);

    //COULD DO THE WORK OF ADDING RESULT HERE INSTEAD OF CALLING METHOD IN SERVICE??
    // this.checkerGame = [
    //   ...this.checkerGame,
    //   newGame
    // ];
    console.log(this.sharedDataSvc.getGamesData());
  }

  addNewLosingGame() {
    const newGame = {
      opponentName: this.playerTwo,
      result: "L"
    };
    this.sharedDataSvc.addGameData(newGame);
    console.log(this.sharedDataSvc.getGamesData());
  }

  addNewDrawGame() {
    const newGame = {
      opponentName: this.playerTwo,
      result: "D"
    };
    this.sharedDataSvc.addGameData(newGame);
    console.log(this.sharedDataSvc.getGamesData());
  }
}
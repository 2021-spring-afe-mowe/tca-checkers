import { Component, OnInit } from '@angular/core';
import { SharedDataService, Games } from '../shared-data.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PlayAgainComponent } from '../play-again/play-again.component';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {

  checkerGame: Games[] = [];

  //Tried to inject dialog into constructor, was getting promise error???
  constructor(private sharedDataSvc: SharedDataService, private bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {
    this.checkerGame = this.sharedDataSvc.getGamesData();
  }

  playerTwo = this.sharedDataSvc.getPlayerTwo();

  addNewWinningGame() {
    this.bottomSheet.open(PlayAgainComponent);
    
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
    this.bottomSheet.open(PlayAgainComponent);

    const newGame = {
      opponentName: this.playerTwo,
      result: "L"
    };
    this.sharedDataSvc.addGameData(newGame);
    console.log(this.sharedDataSvc.getGamesData());
  }

  addNewDrawGame() {
    this.bottomSheet.open(PlayAgainComponent);
    
    const newGame = {
      opponentName: this.playerTwo,
      result: "D"
    };
    this.sharedDataSvc.addGameData(newGame);
    console.log(this.sharedDataSvc.getGamesData());
  }

  addNewQuitGame() {
    const newGame = {
      opponentName: this.playerTwo,
      result: "Q"
    };
    this.sharedDataSvc.addGameData(newGame);
    console.log(this.sharedDataSvc.getGamesData());
  }
}
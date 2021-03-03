import { Component, OnInit } from '@angular/core';
import { SharedDataService, Games } from '../shared-data.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {

  //Dialog Box
  // dialog: MatDialog;

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
    // this.checkerGame = [
    //   ...this.checkerGame,
    //   newGame
    // ];
    console.log(this.sharedDataSvc.getGamesData());
  }

  //Dialog Screen for when player clicks on win
  // openDialog() {
  //   this.dialog.open(WinningDialogElement);
  // }
}

  // //Get the winning dialog content
  // @Component({
  //   selector: 'winning-dialog-element',
  //   templateUrl: 'winning-dialog-element.html',
  // })
  // export class WinningDialogElement {}
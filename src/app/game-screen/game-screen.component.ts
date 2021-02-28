import { Component, OnInit } from '@angular/core';
import { SharedDataService, Games } from '../shared-data.service';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {

  checkerGame: Games[] = [];

  constructor(private sharedDataSvc: SharedDataService) { }

  ngOnInit(): void {
    //Get the games so I can add new games to array of games objects
    this.checkerGame = this.sharedDataSvc.getGamesData();
  }

  playerTwo = this.sharedDataSvc.getPlayerTwo();

  addNewWinningGame() {
    this.sharedDataSvc.addNewWinningGame(this.playerTwo);
    // const newGame = {
    //   opponentName: this.playerTwo,
    //   result: "W"
    // };
    // console.log(newGame.result);
    // console.log(this.playerTwo);
    // this.checkerGame = [
    //   ...this.checkerGame,
    //   newGame
    // ];
  }

}

import { Component, OnInit } from '@angular/core';
import { SharedDataService, Opponents, Games } from '../shared-data.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})

export class WelcomeScreenComponent implements OnInit {

  nameInTextInput = "";

  //For *ngIf
  clicked = false;
  toggleOn;

  //Variable For Opponent
  // playerTwo = this.sharedDataSvc.getPlayerTwo();
  playerTwo = this.getPlayerTwo();

  //variable for stats
  checkerGames: Games[] = [];
  groupByOpponnentName: any;
  shapeForByPlayerStats: any;

  //Variables for Game Results
  numberOfWins: number;
  numberOfLosses: number;
  numberOfDraws: number;
  numberOfGames: number;
  numberOfQuits: number;

  winPercentage: any;
  lossPercentage: any;

  //Everytime there is a change to opponents, called and updated on screen.
      //Tied to ngFor on welcome screen

  //Wasn't using updated opponents on the screen.  Only initialized value in ngOnInit
  get opponents(): Opponents[] {
    return this.sharedDataSvc.getOpponents();
  }

  constructor(private sharedDataSvc: SharedDataService) {}

  //Get the games array here to display on view
  ngOnInit() {
    this.checkerGames = this.sharedDataSvc.getGamesData();
  }

  addNewOpponent() {
    const newOpponent = {
      name: this.nameInTextInput
    };
    this.sharedDataSvc.addOpponent(newOpponent);
  }

  clearInputText() {
    this.nameInTextInput = ' ';
  }

  //set the value for chosen opponent
  selectPlayerTwo(playerTwo: string) {
    this.playerTwo = playerTwo;

    //set player two for games screen
    this.sharedDataSvc.setPlayerTwo(playerTwo);

    this.shapeData();
    
    this.clicked = true;
  }

  getPlayerTwo() {
    return this.playerTwo;
  }

  //method for game stats
  shapeData() {
    // Group by...
    const groupByOpponnentName = this.checkerGames.reduce(
      (acc, x) => acc.set(x.opponentName, [...acc.get(x.opponentName) || [], x])
        , new Map()
    );

    console.log("I am Here three", [...groupByOpponnentName]);

    const shapeForByPlayerStats = [...groupByOpponnentName].map(x => ({
      opponentName: x[0]
      , numberOfGames: x[1].length
      , wins: x[1].filter(y => y.result == "W").length
      , losses: x[1].filter(y => y.result == "L").length
      , draws: x[1].filter(y => y.result == "D").length
      , quits: x[1].filter(y => y.result == "Q").length
    }));

    console.log("I am here too" , shapeForByPlayerStats);

    
    //Use a filter on shapeForByPlayerStats to find opponent name 
        //and get necessary opponent information??????
    const resultsForGames = shapeForByPlayerStats.filter(x => x.opponentName == this.playerTwo);

    console.log("I'm here " , this.playerTwo, resultsForGames, "ooh");

    //Get number of wins, losses, and draws from games vs opponent
    this.numberOfWins = resultsForGames.length > 0 ? resultsForGames[0].wins : 0;
    this.numberOfLosses = resultsForGames.length > 0 ? resultsForGames[0].losses : 0;
    this.numberOfDraws = resultsForGames.length > 0 ? resultsForGames[0].draws : 0;
    this.numberOfQuits = resultsForGames.length > 0 ? resultsForGames[0].quits : 0;
    this.numberOfGames = resultsForGames.length > 0 ? resultsForGames[0].numberOfGames : 0;

    this.winPercentage = resultsForGames.length > 0 ? Math.round((resultsForGames[0].wins / resultsForGames[0].numberOfGames) * (100)) : 0;
    this.lossPercentage = resultsForGames.length > 0 ? Math.round((resultsForGames[0].losses / resultsForGames[0].numberOfGames) * (100)) : 0;
  }
}
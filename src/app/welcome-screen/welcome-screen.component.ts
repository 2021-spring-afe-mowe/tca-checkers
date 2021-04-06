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
  toggleOn;

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

  //Everytime there is a change to opponents, called and updated on screen.
      //Tied to ngFor on welcome screen

  //Wasn't using updated opponents on the screen.  Only initialized value in ngOnInit
  get opponents(): Opponents[] {
    return this.sharedDataSvc.getOpponents();
  }

  constructor(private sharedDataSvc: SharedDataService) {}

  //Variable For Opponent
  // playerTwo = this.sharedDataSvc.getPlayerTwo();
  playerTwo = "";

  //Get the games array here to display on view
  ngOnInit() {
    // this.opponents = this.sharedDataSvc.getOpponents();
    this.checkerGames = this.sharedDataSvc.getGamesData();
    this.shapeData();
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
    // this.sharedDataSvc.setPlayerTwo(playerTwo);
    this.playerTwo = playerTwo;
    console.log(playerTwo);
  }

  //method for game stats
  shapeData() {
    // Group by...
    const groupByOpponnentName = this.checkerGames.reduce(
      (acc, x) => acc.set(x.opponentName, [...acc.get(x.opponentName) || [], x])
        , new Map()
    );

    console.log([...groupByOpponnentName]);

    const shapeForByPlayerStats = [...groupByOpponnentName].map(x => ({
      opponentName: x[0]
      , numberOfGames: x[1].length
      , wins: x[1].filter(y => y.result == "W").length
      , losses: x[1].filter(y => y.result == "L").length
      , draws: x[1].filter(y => y.result == "D").length
      , quits: x[1].filter(y => y.result == "Q").length
    }));

    console.log(shapeForByPlayerStats);

    
    //Use a filter on shapeForByPlayerStats to find opponent name 
        //and get necessary opponent information??????
    const resultsForGames = shapeForByPlayerStats.filter(x => x.opponentName == this.playerTwo);

    //Logic for when a user views stats vs a new player not yet in the DB, don't want it
        //To be blank

    //Get number of wins, losses, and draws from games vs opponent
    resultsForGames.filter(x => this.numberOfWins = x.wins);
    resultsForGames.filter(x => this.numberOfLosses = x.losses);
    resultsForGames.filter(x => this.numberOfDraws = x.draws);
    resultsForGames.filter(x => this.numberOfQuits = x.quits);
    resultsForGames.filter(x => this.numberOfGames = x.numberOfGames);
  }
}
import { Component, OnInit } from '@angular/core';
import { SharedDataService, Games } from '../shared-data.service';

@Component({
  selector: 'app-stats-screen',
  templateUrl: './stats-screen.component.html',
  styleUrls: ['./stats-screen.component.css']
})
export class StatsScreenComponent implements OnInit {

  checkerGames: Games[] = [];
  groupByOpponnentName: any;
  shapeForByPlayerStats: any;

  //Variables for Game Results
  numberOfWins: number;
  numberOfLosses: number;
  numberOfDraws: number;
  numberOfGames: number;
  numberOfQuits: number;

  //Variable For Opponent
  playerTwo = this.sharedDataSvc.getPlayerTwo();

  constructor(private sharedDataSvc: SharedDataService) {}

  //Get the games array here to display on view
  ngOnInit(): void {
    this.checkerGames = this.sharedDataSvc.getGamesData();
    this.shapeData();
  }

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

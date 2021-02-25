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

  constructor(private sharedDataSvc: SharedDataService) { }

  //Get the games array here to display on view
  ngOnInit(): void {
    this.checkerGames = this.sharedDataSvc.getGamesData();
    this.shapeData();
  }

  playerTwo = this.sharedDataSvc.getPlayerTwo();

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
      , quit: x[1].filter(y => y.result == "Q").length
    }));

  console.log(shapeForByPlayerStats);
}
}

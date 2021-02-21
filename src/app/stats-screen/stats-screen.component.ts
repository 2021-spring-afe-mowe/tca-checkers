import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-stats-screen',
  templateUrl: './stats-screen.component.html',
  styleUrls: ['./stats-screen.component.css']
})
export class StatsScreenComponent implements OnInit {

  constructor(private sharedDataSvc: SharedDataService) { }

  //Get the games array here to display on view
  ngOnInit(): void {
  }

  playerTwo = this.sharedDataSvc.getPlayerTwo();

}

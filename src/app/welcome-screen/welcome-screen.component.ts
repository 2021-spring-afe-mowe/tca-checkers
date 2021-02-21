import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

interface Opponents {
  name: string
}

interface Games {
  opponentName: string,
  won: boolean,
  lost: boolean
}

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {

  nameInTextInput = "";

  opponents: Opponents[] = [];

  constructor(private sharedDataSvc: SharedDataService) {}

  ngOnInit() {
    this.opponents = this.sharedDataSvc.getOpponents();
  }

  addNewOpponent() {
    this.sharedDataSvc.addOpponent(this.nameInTextInput);
  }

  clearInputText() {
    this.nameInTextInput = ' ';
  }

  //set the value for chosen opponent
  selectPlayerTwo(playerTwo: string) {
    this.sharedDataSvc.setPlayerTwo(playerTwo);
    console.log(playerTwo);
  }
}

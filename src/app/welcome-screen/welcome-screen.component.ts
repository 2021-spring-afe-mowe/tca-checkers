import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

export interface Opponents {
  name: string
}

export interface Games {
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
  title = 'estimating';

  opponentChosen = "";

  nameInTextInput = "";

  opponents: Opponents[] = [];

  constructor(private sharedDataSvc: SharedDataService) {}

  ngOnInit() {
    this.opponents = this.getOpponents();
  }

  //mockup some data
  getOpponents(): Opponents[] {

    this.opponents = [
      {
        name: 'Sherman'
      },
      {
        name: 'Tina'
      }
    ];

    console.log(this.opponents);
  
    return this.opponents
  }

  addOpponent() {

    const newOpponent = {
      name: this.nameInTextInput,
      isChecked: false
    };

    this.opponents = [
      ...this.opponents,
      newOpponent
    ];
  }

  clearInputText() {
    this.nameInTextInput = ' ';
  }

  //set the value of chosen opponent
  selectPlayerTwo(playerTwo: string) {
    this.sharedDataSvc.setPlayerTwo(playerTwo);
    console.log(playerTwo);
  }
  // setOpponentChosen(foeChosen:string) {
  //   this.opponentChosen = foeChosen;
  //   console.log(this.opponentChosen);
  // }
}

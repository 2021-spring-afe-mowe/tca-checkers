import { Component, OnInit } from '@angular/core';
import { SharedDataService, Opponents } from '../shared-data.service';

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
    const newOpponent = {
      name: this.nameInTextInput
    };
    this.sharedDataSvc.addOpponent(newOpponent);

    // console.log(this.sharedDataSvc.getOpponents());
    // this.opponents = [
    //   ...this.opponents,
    //   newOpponent
    //];
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
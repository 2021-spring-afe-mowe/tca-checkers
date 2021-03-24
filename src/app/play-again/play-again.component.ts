import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-again',
  templateUrl: './play-again.component.html',
  styleUrls: ['./play-again.component.css']
})
export class PlayAgainComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<PlayAgainComponent>, private router: Router) { }

  ngOnInit(): void {
  }

  playAgain() {
    this.bottomSheetRef.dismiss();
  }

  quit() {
    this.bottomSheetRef.dismiss();
    this.router.navigateByUrl("/welcome");
  }

}

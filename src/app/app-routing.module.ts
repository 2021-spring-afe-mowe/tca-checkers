import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import the components
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import {StatsScreenComponent } from './stats-screen/stats-screen.component';
import { GameScreenComponent } from './game-screen/game-screen.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeScreenComponent },
  { path: 'stats', component: StatsScreenComponent },
  { path: 'game', component: GameScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomEntryComponent } from './room-entry/room-entry.component';
import { RoomSetupComponent } from './room-setup/room-setup.component';
import { RaffleGameComponent } from './raffle-game/raffle-game.component';

const routes: Routes = [
  { path: '', redirectTo: '/roomEntry', pathMatch: 'full' },
  { path: 'roomEntry', component: RoomEntryComponent },
  { path: 'roomSetup', component: RoomSetupComponent },
  { path: 'raffleGame', component: RaffleGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

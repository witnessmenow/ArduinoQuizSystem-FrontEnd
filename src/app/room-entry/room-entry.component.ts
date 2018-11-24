import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RouterInitializer } from '@angular/router/src/router_module';
import { RaffleSettings } from '../models/raffle-settings';

@Component({
  selector: 'app-room-entry',
  templateUrl: './room-entry.component.html',
  styleUrls: ['./room-entry.component.css']
})
export class RoomEntryComponent implements OnInit {

  roomName: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const raffleSettings: RaffleSettings = {
      name: this.roomName
    };
    localStorage.setItem(this.roomName, JSON.stringify(raffleSettings));
    let navigationExtras: NavigationExtras = {
      queryParams: { 'roomName': this.roomName },
    };
    this.router.navigate(['/roomSetup'], navigationExtras);
  }

}

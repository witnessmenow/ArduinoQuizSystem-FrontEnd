import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RouterInitializer } from '@angular/router/src/router_module';
import { RaffleSettings } from '../models/raffle-settings';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-room-entry',
  templateUrl: './room-entry.component.html',
  styleUrls: ['./room-entry.component.css']
})
export class RoomEntryComponent implements OnInit {

  roomName: string;

  constructor(private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  onSubmit() {
    const raffleSettings: RaffleSettings = {
      name: this.roomName
    };
    this.localStorageService.set(raffleSettings);
    let navigationExtras: NavigationExtras = {
      queryParams: { 'roomName': this.roomName },
    };
    this.router.navigate(['/roomSetup'], navigationExtras);
  }

}

import { Component, OnInit } from '@angular/core';
import { GetRandomParticipantService } from '../services/get-random-participant.service';
import { Participant } from '../models/participant';
import { ActivatedRoute, NavigationExtras, Router } from '../../../node_modules/@angular/router';
import { RaffleSettings } from '../models/raffle-settings';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-room-setup',
  templateUrl: './room-setup.component.html',
  styleUrls: ['./room-setup.component.css']
})
export class RoomSetupComponent implements OnInit {

  raffleSettings: RaffleSettings;
  participants: Participant[] = [];
  constructor(private localStorageService: LocalStorageService, private randomParticipentService: GetRandomParticipantService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.raffleSettings = this.localStorageService.get(this.route.snapshot.queryParams['roomName']);
    this.getParticipants();


  }

  getParticipants(): void {
    this.randomParticipentService.getParticipants()
      .subscribe(participants => this.participants = participants);
  }

  saveRaffle(): void {
    this.raffleSettings.participants = this.participants;
    this.localStorageService.set(this.raffleSettings);
    let navigationExtras: NavigationExtras = {
      queryParams: { 'roomName': this.raffleSettings.name },
    };
    this.router.navigate(['/raffleGame'], navigationExtras);
  }

}

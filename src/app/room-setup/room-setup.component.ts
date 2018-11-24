import { Component, OnInit } from '@angular/core';
import { GetRandomParticipantService } from '../services/get-random-participant.service';
import { Participant } from '../models/participant';
import { ActivatedRoute, NavigationExtras, Router } from '../../../node_modules/@angular/router';
import { RaffleSettings } from '../models/raffle-settings';

@Component({
  selector: 'app-room-setup',
  templateUrl: './room-setup.component.html',
  styleUrls: ['./room-setup.component.css']
})
export class RoomSetupComponent implements OnInit {

  raffleSettings: RaffleSettings;
  participants: Participant[] = [];
  constructor(private randomParticipentService: GetRandomParticipantService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.raffleSettings = JSON.parse(localStorage.getItem(this.route.snapshot.queryParams['roomName']));
    this.getParticipants();


  }

  getParticipants(): void {
    this.randomParticipentService.getParticipants()
      .subscribe(participants => this.participants = participants);
  }

  saveRaffle(): void {
    this.raffleSettings.participants = this.participants;
    localStorage.setItem(this.raffleSettings.name, JSON.stringify(this.raffleSettings));
    let navigationExtras: NavigationExtras = {
      queryParams: { 'roomName': this.raffleSettings.name },
    };
    this.router.navigate(['/raffleGame'], navigationExtras);
  }

}

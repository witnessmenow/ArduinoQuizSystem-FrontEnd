import { Component, OnInit } from '@angular/core';
import { RaffleSettings } from '../models/raffle-settings';
import { ActivatedRoute } from '@angular/router';
import { GetRandomParticipantService } from '../services/get-random-participant.service';

@Component({
  selector: 'app-raffle-game',
  templateUrl: './raffle-game.component.html',
  styleUrls: ['./raffle-game.component.css']
})
export class RaffleGameComponent implements OnInit {

  raffleSettings: RaffleSettings;

  constructor(private route: ActivatedRoute, private randomParticipentService: GetRandomParticipantService) { }

  ngOnInit() {
    this.raffleSettings = JSON.parse(localStorage.getItem(this.route.snapshot.queryParams['roomName']));
    this.raffleSettings.winners = [];
    this.randomParticipentService.setParticipantArray(this.raffleSettings.participants);
  }

  pickName(): void {
    const winner = this.randomParticipentService.getRandomParticipant();
    for (let i = 0; i < this.raffleSettings.participants.length; i++) {
      if (this.raffleSettings.participants[i].id === winner.id) {
        this.raffleSettings.winners.push(winner);
        this.raffleSettings.participants.splice(i);
        localStorage.setItem(this.route.snapshot.queryParams['roomName'], JSON.stringify(this.raffleSettings));
      }
    }
  }

}

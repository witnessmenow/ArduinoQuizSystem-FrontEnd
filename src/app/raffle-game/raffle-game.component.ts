import { Component, OnInit } from '@angular/core';
import { RaffleSettings } from '../models/raffle-settings';
import { ActivatedRoute } from '@angular/router';
import { GetRandomParticipantService } from '../services/get-random-participant.service';
import { LocalStorageService } from '../services/local-storage.service';
import { GifLoaderService } from '../services/gif-loader.service';

@Component({
  selector: 'app-raffle-game',
  templateUrl: './raffle-game.component.html',
  styleUrls: ['./raffle-game.component.css']
})
export class RaffleGameComponent implements OnInit {

  raffleSettings: RaffleSettings;
  currentGif: string;

  constructor(private route: ActivatedRoute, private randomParticipentService: GetRandomParticipantService,
     private gifService: GifLoaderService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.raffleSettings = JSON.parse(localStorage.getItem(this.route.snapshot.queryParams['roomName']));
    this.raffleSettings.winners = [];
    this.randomParticipentService.setParticipantArray(this.raffleSettings.participants);
  }

  pickName() : void {
    const winner = this.randomParticipentService.getRandomParticipant(this.raffleSettings.participants);
    alert(winner.name);
    for(let i = 0; i < this.raffleSettings.participants.length; i++){
      if(this.raffleSettings.participants[i].id === winner.id){
        this.raffleSettings.winners.push(winner);
        this.raffleSettings.participants.splice(i, 1);
        this.localStorageService.set(this.raffleSettings);
        this.currentGif = this.gifService.getRandomGif();
        console.log(this.raffleSettings.participants);
        console.log(winner);
        console.log(this.raffleSettings.winners);
      }
    }
  }

}

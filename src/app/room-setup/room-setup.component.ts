import { Component, OnInit } from '@angular/core';
import { GetRandomParticipantService } from '../services/get-random-participant.service';
import { Participant } from '../models/participant';

@Component({
  selector: 'app-room-setup',
  templateUrl: './room-setup.component.html',
  styleUrls: ['./room-setup.component.css']
})
export class RoomSetupComponent implements OnInit {

  roomName: string;
  participants: Participant[] = [];
  constructor(private randomParticipentService: GetRandomParticipantService) { }

  ngOnInit() {
    this.roomName = localStorage.getItem('room-name');
    this.getParticipants();
  }

  getParticipants(): void {
    this.randomParticipentService.getParticipants()
      .subscribe(participants => this.participants = participants);
  }

}

import { Injectable } from '@angular/core';
import { Participant } from '../models/participant';
@Injectable({
  providedIn: 'root'
})
export class GetRandomParticipantService {

  constructor() { }

  participants : Participant[] = [];

  getRandomParticipant(): Participant {
    return this.participants[this.randomInt(0, this.participants.length-1)];
  }

  randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  setParticipantArray(participants): void {
    this.participants = participants;
  }
}

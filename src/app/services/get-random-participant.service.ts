import { Injectable } from '@angular/core';
import { Participant } from '../models/participant';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GetRandomParticipantService {

  constructor() { }

  participants: Participant[] = [];

  getRandomParticipant(participants: Participant[]): Participant {
    return participants[this.randomInt(0, participants.length - 1)];
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  setParticipantArray(participants: Participant[]): void {
    this.participants.splice(0, this.participants.length);
    this.participants.push(...participants);
  }

  getParticipants(): Observable<Participant[]> {
    return of(this.participants);
  }
}

import { Injectable } from '@angular/core';
import { RaffleSettings } from '../models/raffle-settings';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() { }

  get(roomName: string) : RaffleSettings {
    return JSON.parse(localStorage.getItem(roomName));
  }

  set(raffleSettings: RaffleSettings) : void {
    localStorage.setItem(raffleSettings.name, JSON.stringify(raffleSettings));
  }
}

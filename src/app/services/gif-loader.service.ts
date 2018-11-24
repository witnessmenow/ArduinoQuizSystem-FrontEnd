import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifLoaderService {

  availableGifs: Array<string> = [];

  constructor() {
    this.resetGifs();
  }

  resetGifs(): void {
    for (let i = 1; i < 30; i++) {
      this.availableGifs.push('winner' + i);
    }
  }

  getRandomGif(): string {
    if (this.availableGifs.length <= 0) {
      this.resetGifs();
    }

    const randomIndex = this.randomInt(0, this.availableGifs.length - 1);
    const selectedGif = this.availableGifs[randomIndex];

    this.availableGifs.splice(randomIndex, 1);
    return selectedGif;
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


}

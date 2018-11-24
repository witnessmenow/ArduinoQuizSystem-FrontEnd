import { Component, OnInit, Input } from '@angular/core';
import { Participant } from '../models/participant';

@Component({
  selector: 'app-winner-display',
  templateUrl: './winner-display.component.html',
  styleUrls: ['./winner-display.component.css']
})
export class WinnerDisplayComponent implements OnInit {

  @Input()
  private _winner: Participant;
  public get winner(): Participant {
    return this._winner;
  }
  public set winner(value: Participant) {
    this._winner = value;
  }
  constructor() { }

  ngOnInit() {
  }

}

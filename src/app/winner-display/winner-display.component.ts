import { Component, OnInit, Input } from '@angular/core';
import { Participant } from '../models/participant';

@Component({
  selector: 'app-winner-display',
  templateUrl: './winner-display.component.html',
  styleUrls: ['./winner-display.component.css']
})
export class WinnerDisplayComponent implements OnInit {

  @Input()
  winner: Participant;

  @Input()
  currentGif: string;

  constructor() { }

  ngOnInit() {
  }

}

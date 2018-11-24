import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-setup',
  templateUrl: './room-setup.component.html',
  styleUrls: ['./room-setup.component.css']
})
export class RoomSetupComponent implements OnInit {

  roomName: string;
  constructor() { }

  ngOnInit() {
    this.roomName = localStorage.getItem('room-name');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterInitializer } from '@angular/router/src/router_module';

@Component({
  selector: 'app-room-entry',
  templateUrl: './room-entry.component.html',
  styleUrls: ['./room-entry.component.css']
})
export class RoomEntryComponent implements OnInit {

  roomName: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    localStorage.setItem('room-name', this.roomName);
    this.router.navigate(['/roomSetup']);
  }

}

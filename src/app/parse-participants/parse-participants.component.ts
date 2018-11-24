import { Component, OnInit } from '@angular/core';

import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-parse-participants',
  templateUrl: './parse-participants.component.html',
  styleUrls: ['./parse-participants.component.css']
})
export class ParseParticipantsComponent implements OnInit {

  constructor(private papa: Papa) { }

  ngOnInit() {
  }

  parseCSV(csvString: string): void {
    const config = {};
    console.log('Result:', this.papa.parse(csvString, config));
  }

}

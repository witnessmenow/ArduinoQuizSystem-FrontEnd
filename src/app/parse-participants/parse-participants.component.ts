import { Component, OnInit } from '@angular/core';

import { Papa } from 'ngx-papaparse';
import { GetRandomParticipantService } from '../services/get-random-participant.service';
import { Participant } from '../models/participant';

@Component({
  selector: 'app-parse-participants',
  templateUrl: './parse-participants.component.html',
  styleUrls: ['./parse-participants.component.css']
})
export class ParseParticipantsComponent implements OnInit {

  constructor(private papa: Papa, private randomParticipentService: GetRandomParticipantService) { }

  ngOnInit() {
  }

  parseCSV(csvString: string): void {
    const config = {};
    const parseResult = this.papa.parse(csvString, config);
    const participantArray = parseResult.data.map(element => {
      return {
        name: element[0],
        id: element[1],
      }
    });

    this.randomParticipentService.setParticipantArray(participantArray);
  }

}

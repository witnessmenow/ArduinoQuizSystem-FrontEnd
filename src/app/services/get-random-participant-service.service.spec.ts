import { TestBed } from '@angular/core/testing';

import { GetRandomParticipantService } from './get-random-participant.service';
import { Participant } from '../models/participant';

describe('GetRandomParticipantServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRandomParticipantService = TestBed.get(GetRandomParticipantService);
    expect(service).toBeTruthy();
  });

  it('can retrieve a participant', () => {
    const service: GetRandomParticipantService = TestBed.get(GetRandomParticipantService);
    expect(service).toBeTruthy();
    const participant = new Participant();
    participant.id = '123';
    participant.name = 'Test Test';
    service.setParticipantArray([participant]);
    expect(service.getRandomParticipant()).toBe(participant);
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseParticipantsComponent } from './parse-participants.component';

describe('ParseParticipantsComponent', () => {
  let component: ParseParticipantsComponent;
  let fixture: ComponentFixture<ParseParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParseParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParseParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

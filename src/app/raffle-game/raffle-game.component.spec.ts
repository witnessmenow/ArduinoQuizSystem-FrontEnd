import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffleGameComponent } from './raffle-game.component';

describe('RaffleGameComponent', () => {
  let component: RaffleGameComponent;
  let fixture: ComponentFixture<RaffleGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaffleGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaffleGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

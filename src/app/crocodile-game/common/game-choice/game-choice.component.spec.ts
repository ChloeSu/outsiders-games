import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameChoiceComponent } from './game-choice.component';

describe('GameChoiceComponent', () => {
  let component: GameChoiceComponent;
  let fixture: ComponentFixture<GameChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameChoiceComponent]
    });
    fixture = TestBed.createComponent(GameChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

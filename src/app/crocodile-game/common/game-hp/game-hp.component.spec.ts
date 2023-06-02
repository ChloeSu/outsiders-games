import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHpComponent } from './game-hp.component';

describe('GameHpComponent', () => {
  let component: GameHpComponent;
  let fixture: ComponentFixture<GameHpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameHpComponent]
    });
    fixture = TestBed.createComponent(GameHpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWordComponent } from './game-word.component';

describe('GameWordComponent', () => {
  let component: GameWordComponent;
  let fixture: ComponentFixture<GameWordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameWordComponent]
    });
    fixture = TestBed.createComponent(GameWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

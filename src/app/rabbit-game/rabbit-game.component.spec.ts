import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbitGameComponent } from './rabbit-game.component';

describe('RabbitGameComponent', () => {
  let component: RabbitGameComponent;
  let fixture: ComponentFixture<RabbitGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RabbitGameComponent]
    });
    fixture = TestBed.createComponent(RabbitGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

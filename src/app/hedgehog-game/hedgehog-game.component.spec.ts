import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HedgehogGameComponent } from './hedgehog-game.component';

describe('HedgehogGameComponent', () => {
  let component: HedgehogGameComponent;
  let fixture: ComponentFixture<HedgehogGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HedgehogGameComponent]
    });
    fixture = TestBed.createComponent(HedgehogGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

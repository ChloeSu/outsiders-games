import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrocodileGameComponent } from './crocodile-game.component';

describe('CrocodileGameComponent', () => {
  let component: CrocodileGameComponent;
  let fixture: ComponentFixture<CrocodileGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrocodileGameComponent]
    });
    fixture = TestBed.createComponent(CrocodileGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

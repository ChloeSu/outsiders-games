import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CowGameComponent } from './cow-game.component';

describe('CowGameComponent', () => {
  let component: CowGameComponent;
  let fixture: ComponentFixture<CowGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CowGameComponent]
    });
    fixture = TestBed.createComponent(CowGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

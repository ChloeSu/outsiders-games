import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeerkatGameComponent } from './meerkat-game.component';

describe('MeerkatGameComponent', () => {
  let component: MeerkatGameComponent;
  let fixture: ComponentFixture<MeerkatGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeerkatGameComponent]
    });
    fixture = TestBed.createComponent(MeerkatGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

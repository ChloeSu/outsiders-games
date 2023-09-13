import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlothGameComponent } from './sloth-game.component';

describe('SlothGameComponent', () => {
  let component: SlothGameComponent;
  let fixture: ComponentFixture<SlothGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlothGameComponent]
    });
    fixture = TestBed.createComponent(SlothGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

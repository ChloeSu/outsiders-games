import { TestBed } from '@angular/core/testing';

import { CrocodileGameService } from './crocodile-game.service';

describe('GamesService', () => {
  let service: CrocodileGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrocodileGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

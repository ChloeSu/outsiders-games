import { Component } from '@angular/core';
import { CrocodileGameService } from '../services/crocodile-game.service';

@Component({
  selector: 'app-crocodile-game',
  templateUrl: './crocodile-game.component.html',
  styleUrls: ['./crocodile-game.component.scss']
})
export class CrocodileGameComponent {

  constructor(
    private gameSrv: CrocodileGameService
  ) {

  }
}

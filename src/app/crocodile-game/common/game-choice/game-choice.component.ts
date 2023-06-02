import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CrocodileGameService } from 'src/app/services/crocodile-game.service';
import { Option } from 'src/app/interfaces/option';

@Component({
  selector: 'app-game-choice',
  templateUrl: './game-choice.component.html',
  styleUrls: ['./game-choice.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state('shown' , style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('shown => hidden', animate('600ms')),
      transition('hidden => shown', animate('300ms')),
    ])
  ]
})
export class GameChoiceComponent {
  options$ = this.gameSrv.OptioinEvent;

  constructor(
    private gameSrv: CrocodileGameService
  ) {}

  ngOnInit() {
  }

  btnClick(option: Option) {
    this.gameSrv.newOptionChoose(option);
  }
}

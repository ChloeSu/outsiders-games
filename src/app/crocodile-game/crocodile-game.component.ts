import { Component, ElementRef, ViewChild } from '@angular/core';
import { CrocodileGameService } from '../services/crocodile-game.service';
import { Message } from '../interfaces/message';

@Component({
  selector: 'app-crocodile-game',
  templateUrl: './crocodile-game.component.html',
  styleUrls: ['./crocodile-game.component.scss']
})
export class CrocodileGameComponent {
  isHidden = true;
  hp = 0;
  viewMsgs: Message[] = [];
  allMsgs: Message[] = [];

  constructor(
    private gameSrv: CrocodileGameService
  ) {
  }

  ngOnInit() {
    this.gameSrv.Messages.subscribe(messages=>{
      this.viewMsgs = messages;
    })

    this.gameSrv.Score.subscribe(score => {
      this.hp = score;
      this.isHidden = score < 100;
    })
    this.gameSrv.GetRandomInitMsg();
  }

  bubbleClick(idx: number) {
    this.gameSrv.messageCliked(idx);
  }
}

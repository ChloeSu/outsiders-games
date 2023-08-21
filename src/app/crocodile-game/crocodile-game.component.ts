import { Component, ElementRef, ViewChild } from '@angular/core';
import { CrocodileGameService } from '../services/crocodile-game.service';
import { crocodileGameItem, pageStages, stageImgMap } from '../interfaces/crocodileGameItem';

@Component({
  selector: 'app-crocodile-game',
  templateUrl: './crocodile-game.component.html',
  styleUrls: ['./crocodile-game.component.scss']
})
export class CrocodileGameComponent {
  hp = 0;
  viewMsgs: crocodileGameItem[] = [];
  allMsgs: crocodileGameItem[] = [];
  stageImgMap = stageImgMap;
  pageStages = pageStages;
  currentStage = pageStages.desc1;

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
      // passed
      if(this.hp == 100 ) window.setTimeout(() => this.currentStage++, 600);
    });
  }

  changeStage() {
    if(this.currentStage != pageStages.end) {
      this.currentStage++;
    }
  }

  bubbleClick(idx: number) {
    this.gameSrv.messageCliked(idx);
  }
}

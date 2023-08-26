import { Component } from '@angular/core';
import { HedgehogGameItem, items, pageStages, stageImgMap } from '../interfaces/hedgehogGameItem';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-hedgehog-game',
  templateUrl: './hedgehog-game.component.html',
  styleUrls: ['./hedgehog-game.component.scss']
})
export class HedgehogGameComponent {
  hp = 0;
  items: HedgehogGameItem[] = items;
  stageImgMap = stageImgMap;
  pageStages = pageStages;
  currentStage = pageStages.desc1;
  currentItem: number = 0;

  constructor(
  ) {
  }

  ngOnInit() {

  }

  changeStage() {
    if(this.currentStage != pageStages.end) {
      this.currentStage++;
    }
  }

  onItemDragEnd(event: CdkDragEnd, i: number): void {
    const rabbitElement = document.getElementById('hedgehog-container');
    if (rabbitElement) {
      const rabbitRect = rabbitElement.getBoundingClientRect();
      const itemRect = event.source.getRootElement().getBoundingClientRect();

      if (
        itemRect.top >= rabbitRect.top &&
        itemRect.bottom <= rabbitRect.bottom &&
        itemRect.left >= rabbitRect.left &&
        itemRect.right <= rabbitRect.right &&
        !items[i].isHidden
      ) {
        this.hp +=25;
        this.items[i].isHidden = true;
        this.currentItem = i;

        if(this.hp == 100) {
          window.setTimeout(() => this.currentItem = 5, 1500);
          window.setTimeout(() => this.currentStage++, 3000);
        }
      }
    }

  }
}

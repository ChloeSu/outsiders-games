import { Component } from '@angular/core';
import { MeerkatGameItem, items, pageStages, stageImgMap } from '../interfaces/meerkatGameItem';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-meerkat-game',
  templateUrl: './meerkat-game.component.html',
  styleUrls: ['./meerkat-game.component.scss']
})
export class MeerkatGameComponent {
  items: MeerkatGameItem[] = items;
  stageImgMap = stageImgMap;
  pageStages = pageStages;
  currentStage = pageStages.gaming;

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
    const element = document.getElementById(`pos${i}`);
    if (element) {
      const rect = element.getBoundingClientRect();
      const itemRect = event.source.getRootElement().getBoundingClientRect();

      if (
        itemRect.top >= rect.top &&
        itemRect.bottom <= rect.bottom &&
        itemRect.left >= rect.left &&
        itemRect.right <= rect.right &&
        !items[i].isFixed
      ) {
        this.items[i].isFixed = true;

        if(this.items.every(x => x.isFixed)) {
          window.setTimeout(() => this.currentStage++, 1500);
          window.setTimeout(() => this.currentStage++, 7500);
        }
      }
    }

  }
}

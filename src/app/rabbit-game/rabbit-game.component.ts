import { Component, HostListener } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { RabbitGameItem, items, pageStages, stageImgMap } from '../interfaces/rabbitGameItem';

@Component({
  selector: 'app-rabbit-game',
  templateUrl: './rabbit-game.component.html',
  styleUrls: ['./rabbit-game.component.scss']
})


export class RabbitGameComponent {
  rabbitHealth: number = 0;
  items: RabbitGameItem[] = items;
  stageImgMap = stageImgMap;
  pageStages = pageStages;
  currentStage = pageStages.desc1;
  showDescImg: string = "/assets/images/rabbit-game/start.png";
  okDefaultPos: { position: { x: number, y: number}} = { position: { x:0, y:0}};
  movingOkPos: { position: { x: number, y: number}} = { position: { x:0, y:0}};

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event: any) {
    window.setTimeout(()=> this.setDefaultPos(), 600);
  }

  ngOnInit() {
    this.setDefaultPos();
  }

  setDefaultPos() {
    // portrait
    let initX = document.body.clientWidth* 5.0 / 100.0;
    let initY = document.body.clientHeight * 5.0 / 100.0;

    // landscape
    if(document.body.clientWidth > document.body.clientHeight) {
      initX = document.body.clientWidth* 5.0 / 100.0;
      initY = document.body.clientHeight * 15.0 / 100.0;
    }
    this.okDefaultPos = { position: { x: initX, y: initY}};
    this.movingOkPos = { position: { x: initX, y: initY}};
  }

  changeStage() {
    if(this.currentStage != pageStages.end) {
      this.currentStage++;
    }
  }

  itemClick(item: RabbitGameItem) {
    if(!item.showPositive) {
      this.showDescImg = item.negtiveImg;
    }
  }

  onItemDragEnd(event: CdkDragEnd): void {
    let offset = 20;

    // get all items DomRec
    for(let i=1; i <=4; i++) {
      let dom = document.getElementsByClassName(`item${i}`)[0].getBoundingClientRect();
      if (dom) {
        const itemRect = event.source.getRootElement().getBoundingClientRect();

        if (
          itemRect.top >= (dom.top - offset) &&
          itemRect.bottom <= (dom.bottom + offset) &&
          itemRect.left >= (dom.left - offset)&&
          itemRect.right <= (dom.right + offset) &&
          !this.items[i-1].showPositive
        ) {
          this.showDescImg = this.items[i-1].positiveImg;
          this.items[i-1].showPositive = true;

          this.movingOkPos.position = {
            x: this.okDefaultPos.position.x + 0.001,
            y: this.okDefaultPos.position.y + 0.001
          };
        }
      }
    }

    if(this.items.every(x => x.showPositive)) {
      window.setTimeout(() => this.currentStage++, 600);
    }
  }
}

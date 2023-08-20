import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { pageStages, stageImgMap } from '../interfaces/cowGameItem';

@Component({
  selector: 'app-cow-game',
  templateUrl: './cow-game.component.html',
  styleUrls: ['./cow-game.component.scss']
})
export class CowGameComponent implements OnInit {
  isNeedleMoving: boolean = false;
  needlePosition: number = 0;
  isMovingForward: boolean = true;
  animationSpeed: number = 50;
  defaultOffset: number = 8;
  score: number = 0;
  buttonClickEvent$ = new Subject<void>();
  stageImgMap = stageImgMap;
  pageStages = pageStages;
  currentStage = pageStages.desc1;
  goodImgIdx: number = 0;
  badImgIdx: number = 0;
  showedImgPath = "/assets/images/cow-game/init.png";
  showAngryCow: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.buttonClickEvent$.subscribe(_=> {
      // 在藍色區點擊會+25的好感，在紅色區點會-25，最低只會到0
      if(this.isNeedleInGreenZone()) {
        this.score+=25;
        this.showedImgPath = `/assets/images/cow-game/g${this.goodImgIdx%4}.png`;
        this.goodImgIdx++;
        this.showAngryCow = false;

        // passed
        if(this.score == 100 ) window.setTimeout(() => this.currentStage++, 600);
      } else if (this.score > 0) {
        this.score-=25;
        this.showedImgPath = `/assets/images/cow-game/b${this.badImgIdx%4}.png`;
        this.badImgIdx++;
        this.showAngryCow = true;
      }
    })
  }

  ngOnDestroy() {
    this.buttonClickEvent$.complete();
  }

  isNeedleInGreenZone() {
    return this.needlePosition >= 25 && this.needlePosition <= 80;
  }

  changeStage() {
    this.currentStage++;
  }

  toggleNeedleAnimation() {
    this.isNeedleMoving = !this.isNeedleMoving;
    if (this.isNeedleMoving) {
      this.moveNeedle();
    } else {
      // needle stopped
      this.buttonClickEvent$.next();
    }
  }

  moveNeedle() {
    let offset = this.defaultOffset;
    offset = this.isNeedleInGreenZone() ? offset : 2;
    if (this.isNeedleMoving) {
      if (this.needlePosition <= 0) {
        this.isMovingForward = true;
      } else if (this.needlePosition >= 100) {
        this.isMovingForward = false;
      }

      if (this.isMovingForward) {
        this.needlePosition+=offset;
      } else {
        this.needlePosition-=offset;
      }

      setTimeout(() => {
        this.moveNeedle();
      }, this.animationSpeed);
    }
  }
}

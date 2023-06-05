import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

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

  constructor() { }

  ngOnInit() {
    this.toggleNeedleAnimation();
  }


  ngAfterViewInit() {
    this.buttonClickEvent$.subscribe(_=> {
      // 拉bar兩端一邊文字可能是打爆他、一邊是罵爆他
      // 要在綠色安全值點擊，才能增加好感值
      // 而在紅色區會扣10好感、在綠色區會加20好感，直到好感一百會過關
      this.score+= this.needlePosition >= 20 && this.needlePosition <= 80 ? 20 : -10;
    })
  }

  ngOnDestroy() {
    this.buttonClickEvent$.complete();
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
    offset = this.needlePosition >= 20 && this.needlePosition <= 80 ? offset : 2;
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

  getHintText(): string {
    if (this.needlePosition < 20) {
      return '罵爆牠';
    } else if (this.needlePosition > 80) {
      return '打爆牠';
    } else {
      return '　';
    }
  }

  getCowImageSrc(): string {
    if (this.needlePosition < 20) {
      return '/assets/images/cow-game/sadcow.gif';
    } else if (this.needlePosition > 80) {
      return '/assets/images/cow-game/angrycow.gif';
    } else {
      return '/assets/images/cow-game/happycow.gif';
    }
  }
}

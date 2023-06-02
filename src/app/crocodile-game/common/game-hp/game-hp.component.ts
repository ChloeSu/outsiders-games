import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CrocodileGameService } from 'src/app/services/crocodile-game.service';

@Component({
  selector: 'app-game-hp',
  templateUrl: './game-hp.component.html',
  styleUrls: ['./game-hp.component.scss']
})
export class GameHpComponent {
  @ViewChild("hp") hpElement!: ElementRef;
  @ViewChild("delay") delayElement!: ElementRef;

  constructor(
    private gameSrv: CrocodileGameService
  ) {
  }

  ngAfterViewInit() {
    const baseWidthRatio = this.hpElement.nativeElement.clientWidth / 100.0;
    this.gameSrv.Score.subscribe(score => {
      let scoreWidth = score * baseWidthRatio;
      this.hpElement.nativeElement.style.width = `${scoreWidth}px`;
      this.delayElement.nativeElement.style.width = `${scoreWidth}px`;
      this.delayElement.nativeElement.style.left = 0;
    })
  }
  ngOnInit() {
  }
}

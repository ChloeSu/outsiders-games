import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CrocodileGameService } from 'src/app/services/crocodile-game.service';
import { Message } from '../../../interfaces/message';
import { BehaviorSubject, Observable, Subject, concatMap, delay, map, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-game-word',
  templateUrl: './game-word.component.html',
  styleUrls: ['./game-word.component.scss']
})
export class GameWordComponent implements OnInit, AfterViewChecked {
  messages: any[] = [];
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  currentMessage: string = '';
  currentIndex: number = 0;
  typingSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private gameSrv: CrocodileGameService
    ) {
  }

  ngOnInit() {
    this.gameSrv.generateInitMessage();
    this.gameSrv.Messages.pipe(
      takeUntil(this.destroy$)
    ).subscribe(message => {
      this.messages.push(message);
      this.gameSrv.setMessageTypingStatus(true);
      this.startTypingAnimation();
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  startTypingAnimation() {
    let index = this.messages.length - 1;
    let message = this.messages[index].text;
    let charIndex = 0;

    const intervalId = setInterval(() => {
      if (charIndex < message.length) {
        charIndex++;
        this.gameSrv.setMessageTypingStatus(true);
      } else {
        clearInterval(intervalId);
        this.updateMessageAnimation(index, false); // 顯示完畢後停止動畫
        if(this.messages[index].waitForChoice) {
          this.gameSrv.requestNextQuesion();
          this.gameSrv.setMessageTypingStatus(true);
        } else {
          this.gameSrv.setMessageTypingStatus(false);
        }
      }
      this.messages[index].text = message.slice(0, charIndex);
    }, 30);

    this.updateMessageAnimation(index, true); // 開始打字動畫
  }

  updateMessageAnimation(index: number, animate: boolean) {
    // 創建一個新的 Message 物件，避免修改原始的物件
    const updatedMessage = { ...this.messages[index], animate: animate };
    this.messages = [
      ...this.messages.slice(0, index),
      updatedMessage,
      ...this.messages.slice(index + 1)
    ];
  }
}


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
  form: FormGroup;
  @ViewChild('scrollMe')
  private myScrollContainer!: ElementRef;
  currentMessage: string = '';
  currentIndex: number = 0;
  typingSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private gameSrv: CrocodileGameService
    ) {
    this.form = this.fb.group({
      input: []
    });
  }

  ngOnInit() {
    this.gameSrv.generateInitMessage();
    // this.gameSrv.Messages.pipe(
    //   tap(_=>this.messages.push(_)),
    //   concatMap(message => this.typingEffect(message))
    // ).subscribe(msg => {

    // });

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
  // typingEffect(message: Message) {
  //   return new Observable<Message>(observer => {
  //     let currentIndex = 0;
  //     const typingInterval = setInterval(() => {
  //       if (currentIndex < message.text.length) {
  //         this.typingSubject.next(message.text.substring(0, currentIndex + 1));
  //         currentIndex++;
  //       } else {
  //         clearInterval(typingInterval);
  //         observer.next(message);
  //         observer.complete();
  //       }
  //     }, 100); // 打字速度，每個字元間隔 100 毫秒
  //   }).pipe(
  //     delay(1000) // 延遲 1 秒後繼續下一個訊息的打字特效
  //   );
  // }

  // messageWithTypingEffect(message: string): string {
  //   let typedMsg = this.typingSubject.getValue();
  //   return typedMsg;
  // }

  startTypingAnimation() {
    let index = this.messages.length - 1;
    let message = this.messages[index].text;
    let charIndex = 0;

    const intervalId = setInterval(() => {
      if (charIndex < message.length) {
        charIndex++;
      } else {
        clearInterval(intervalId);
        this.updateMessageAnimation(index, false); // 顯示完畢後停止動畫
        if(this.messages[index].waitForChoice) this.gameSrv.requestNextQuesion();
        this.gameSrv.setMessageTypingStatus(false);
      }
      this.messages[index].text = message.slice(0, charIndex);
    }, 100);

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


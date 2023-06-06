import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, debounce, filter, fromEvent, map, takeUntil, tap, timer } from 'rxjs';
import { Message, sampleMessages } from '../interfaces/message';
import { Option } from '../interfaces/option';

@Injectable({
  providedIn: 'root'
})
export class CrocodileGameService {
  private _newOptionEvent = new Subject<Option[]>();
  private _messageSubject = new BehaviorSubject<Message>(sampleMessages[0]);
  private _scoreSubject = new BehaviorSubject(100);
  private _messageStoppingSubject = new BehaviorSubject<boolean>(false);
  private _messages = sampleMessages;

  constructor() {
  }

  public get OptioinEvent() {
    return this._newOptionEvent;
  }

  public get Messages() {
    return this._messageSubject;
  }

  public get Score() {
    return this._scoreSubject;
  }

  setMessageTypingStatus(isTyping: boolean) {
    this._messageStoppingSubject.next(isTyping);
  }

  pushNewOption(options: Option[]) {
    this._newOptionEvent.next(options);
  }

  newOptionChoose(option: Option) {
    const message: Message = {
      userSend: true,
      text: option.text,
      waitForChoice: false,
      score: option.score
    }

    this._newOptionEvent.next([]);
    this._messageSubject.next(message);
    timer(1000).subscribe(_ => {
      // TODO: put correct message for this option, just choose randomly now
      this._messageSubject.next(this.getRamdonMessage());
      this.generateInitMessage();
    });

    this._scoreSubject.next(Math.max(Math.min(this._scoreSubject.getValue() + option.score, 100),0));
  }

  generateInitMessage() {
    const needUserChoice$ = new Subject();

    fromEvent<PointerEvent>(document, 'pointerdown').pipe(
      debounce(() => timer(300)),
      map(x => this.getRamdonMessage()),
      filter(_=> !this._messageStoppingSubject.getValue()),
      takeUntil(needUserChoice$),
    ).subscribe(msg => {
      this._messageSubject.next(msg);
      if(msg.waitForChoice) needUserChoice$.next(0);
    });
  }

  requestNextQuesion() {
    timer(500).subscribe(_ => {
      this._newOptionEvent
      .next([{
        text: "option1",
        score: Math.round(-30 * Math.random())
      },
      {
        text: "option2",
        score: Math.round(-50 * Math.random())
      },
      {
        text: "option3",
        score: Math.round(60 * Math.random())
      }])
    });
  }

  getRamdonMessage() {
    return this._messages[Math.min(Math.floor(Math.random()* 5), 5)];
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, debounce, fromEvent, map, skipWhile, takeUntil, tap, timer } from 'rxjs';
import { Message } from '../interfaces/message';
import { Option } from '../interfaces/option';

@Injectable({
  providedIn: 'root'
})
export class CrocodileGameService {
  private _newOptionEvent = new Subject<Option[]>();
  private _messageSubject = new Subject<Message>();
  private _scoreSubject = new BehaviorSubject(100);
  private _messageTypingSubject = new BehaviorSubject<boolean>(false);

  // fromEvent not working in safari, try addEventListener way...
  private _clickEvent = new Subject<MouseEvent>();

  constructor() {
    window.addEventListener('click', (event: MouseEvent) => {
      this._clickEvent.next(event);
    });
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
    this._messageTypingSubject.next(isTyping);
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
      this.generateInitMessage();
    });

    this._scoreSubject.next(Math.max(Math.min(this._scoreSubject.getValue() + option.score, 100),0));
  }

  generateInitMessage() {
    let messages = [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        waitForChoice: true
      },
      {
        text: 'Nullam consequat ultricies dui, eget sollicitudin enim pellentesque eget.',
        waitForChoice: false
      },
      {
        text: 'Fusce varius risus id libero tristique, eget euismod justo mattis.',
        waitForChoice: true
      },
      {
        text: 'In hac habitasse platea dictumst. Quisque venenatis nunc id mi fringilla, ac consectetur lacus facilisis. ',
        waitForChoice: false
      },
      {
        text: 'Curabitur in luctus arcu. Nunc fringilla odio nec tempor consequat.',
        waitForChoice: true
      },
      {
        text: 'Curabitur ullamcorper, ligula et aliquet tristique, massa velit aliquam urna, ac cursus nulla nisl sit amet nunc.',
        waitForChoice: true
      }
    ]

    this._messageSubject.next(messages[1]);
    const needUserChoice$ = new Subject();

    this._clickEvent.pipe(
      debounce(() => timer(300)),
      // scan(item => item + 1, 0),
      map(x => messages[Math.min(Math.floor(Math.random()* 5), 5)]),
      takeUntil(needUserChoice$),
      skipWhile(() => this._messageTypingSubject.getValue())
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

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, from, groupBy, mergeMap, take, toArray } from 'rxjs';
import { Message, sampleMessages } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class CrocodileGameService {
  private _viewMessageSubject = new Subject<Message[]>();
  private _scoreSubject = new BehaviorSubject(0);
  private _remainMessages = [ ...sampleMessages ];
  private _viewMessages: Message[] = [];

  constructor() {
  }

  public get Messages() {
    return this._viewMessageSubject;
  }

  public get Score() {
    return this._scoreSubject;
  }

  // Fisher-Yates 洗牌算法
  shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [ ...array ];
    let currentIndex = shuffledArray.length;
    let temporaryValue: T;
    let randomIndex: number;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temporaryValue;
    }

    return shuffledArray;
  }

  GetRandomInitMsg() {
    this._remainMessages = this.shuffleArray(this._remainMessages);

    from(this._remainMessages).pipe(
      groupBy((msg: Message) => msg.isCorrectChoice),
      mergeMap(group => group.pipe(take(2))),
      toArray()
    ).subscribe((result: Message[]) => {
      const filteredMessages = this._remainMessages.filter(msg => !result.includes(msg));
      this._viewMessageSubject.next(result);
      this._viewMessages = result;
      this._remainMessages = filteredMessages;
    });
  }

  messageCliked(idx: number) {
    if(!this._viewMessages[idx].isClicked) {
      const currentScore = this._scoreSubject.getValue();
      const finalScore = Math.min(Math.max(currentScore + this._viewMessages[idx].score, 0), 100);
      this._scoreSubject.next(finalScore);
    }

    this._viewMessages[idx].isClicked = true;

    if(!this._viewMessages[idx].isCorrectChoice) {
      this._remainMessages = this.shuffleArray(this._remainMessages);
      const badMsgIdx = this._remainMessages.findIndex(x=>!x.isCorrectChoice);
      const badMsg = this._remainMessages.splice(badMsgIdx, 1);
      this._viewMessages[idx] = badMsg[0];
      this._viewMessageSubject.next(this._viewMessages);
    }
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TimerAction } from '../models/timer';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private _onStartTimer$ = new Subject<TimerAction>();
  private _onPauseTimer$ = new Subject<TimerAction>();
  private _onResetTimer$ = new Subject<boolean>();
  private _onCompleteTimer$ = new Subject<boolean>();

  constructor() { }

  get timer() {
    return this._onStartTimer$.asObservable();
  }

  setTimer(timeObj: TimerAction) {
    this._onStartTimer$.next(timeObj);
  }

  get pauseTimer() {
    return this._onPauseTimer$.asObservable();
  }

  setPauseTimer(timeObj: TimerAction) {
    this._onPauseTimer$.next(timeObj);
  }

  get resetTimer() {
    return this._onResetTimer$.asObservable();
  }

  setResetTimer(state: boolean) {
    this._onResetTimer$.next(state);
  }

  get completeTimer() {
    return this._onCompleteTimer$.asObservable();
  }

  setCompleteTimer(state: boolean) {
    this._onCompleteTimer$.next(state);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerAction } from 'src/app/core/models/timer';
import { TimerService } from 'src/app/core/services/timer.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-timer2-count-down',
  templateUrl: './timer2-count-down.component.html',
  styleUrls: ['./timer2-count-down.component.scss']
})
export class Timer2CountDownComponent implements OnInit, OnDestroy {
  
  private timerId: any;
  public counter: any = 0;
  private subs = new SubSink();

  constructor(private _timerService: TimerService) {
    this.setTimerSubscriptions();
  }

  ngOnInit(): void {
  }

  setTimerSubscriptions() {
    this.subs.sink = this._timerService.timer.subscribe((data: TimerAction) => {
      this.startTimer(data.timerLimit);
    })
    this.subs.sink = this._timerService.pauseTimer.subscribe((data: TimerAction) => {
      this.pauseTimer();
    })
    this.subs.sink = this._timerService.resetTimer.subscribe((data: boolean) => {
      this.resetTimer(data);
    })
  }

  startTimer(seconds: number| undefined) {
    seconds = (this.counter > 0) ? this.counter: seconds;
    this.counter = seconds;
    this.timerId = setInterval(() => {
      if(this.counter > 0) {
        this.counter -= 1;
      } else {
        this._timerService.setCompleteTimer(true);
        clearInterval(this.timerId);
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.timerId);
  }

  resetTimer(state: boolean) {
    this.counter = 0;
    state && clearInterval(this.timerId);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}

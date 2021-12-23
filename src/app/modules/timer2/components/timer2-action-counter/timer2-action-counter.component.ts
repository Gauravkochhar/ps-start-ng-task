import { Component, OnInit } from '@angular/core';
import { TimerAction } from 'src/app/core/models/timer';
import { TimerService } from 'src/app/core/services/timer.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-timer2-action-counter',
  templateUrl: './timer2-action-counter.component.html',
  styleUrls: ['./timer2-action-counter.component.scss']
})
export class Timer2ActionCounterComponent implements OnInit {

  public timerHistory: any[] = [];
  private subs = new SubSink();

  constructor(private _timerService: TimerService) {
    this.setTimerSubscriptions();
  }

  ngOnInit(): void {
  }

  setTimerSubscriptions() {
    this.subs.sink = this._timerService.timer.subscribe((data: TimerAction) => {
      this.timerHistory.push(data);
    })
    this.subs.sink = this._timerService.pauseTimer.subscribe((data: TimerAction) => {
      this.timerHistory.push(data);
    })
    this.subs.sink = this._timerService.resetTimer.subscribe((data: boolean) => {
      this.timerHistory = [];
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}

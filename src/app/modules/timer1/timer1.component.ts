import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/core/services/util.service';
import { Timer1ActionCounterComponent } from './components/timer1-action-counter/timer1-action-counter.component';
import { Timer1ActionTrackerComponent } from './components/timer1-action-tracker/timer1-action-tracker.component';
import { Timer1ControlPanelComponent } from './components/timer1-control-panel/timer1-control-panel.component';
import { Timer1CountDownComponent } from './components/timer1-count-down/timer1-count-down.component';

@Component({
  selector: 'app-timer1',
  templateUrl: './timer1.component.html',
  styleUrls: ['./timer1.component.scss']
})
export class Timer1Component implements OnInit {

  public timerHistory = [];
  @ViewChild('countDown', {static: false}) countDownComp!: Timer1CountDownComponent;
  @ViewChild('controlPanel', {static: false}) controlPanelComp!: Timer1ControlPanelComponent;
  @ViewChild('actionTracker', {static: false}) actionTrackerComp!: Timer1ActionTrackerComponent;
  @ViewChild('actionCounter', {static: false}) actionCounterComp!: Timer1ActionCounterComponent;

  constructor(
    private _utilService: UtilService
  ) { }

  ngOnInit(): void {
  }

  setInitialState(e: any) {
    this.controlPanelComp.setInitialState();
  }

  onTimerStart(e: any) {
    const { timerRange } = e;
    !isNaN(timerRange) && this.countDownComp.startTimer(+timerRange);
  }
  
  onTimerPause(e: any) {
    this.countDownComp.pauseTimer();
  }

  onResetTimer(e: any) {
    this.countDownComp.resetTimer();
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-timer1-count-down',
  templateUrl: './timer1-count-down.component.html',
  styleUrls: ['./timer1-count-down.component.scss']
})
export class Timer1CountDownComponent implements OnInit {

  timerId: any;
  counter = 0;
  @Input() timerHistory: any[] = [];
  @Output() public onResetTimer = new EventEmitter<any>();
  @Output() public timerHistoryChange = new EventEmitter<any>();
  constructor(private _utilService: UtilService) { }

  ngOnInit(): void {
  }

  startTimer(seconds: any) {
      if( seconds) {
        this.timerHistory.push({
          action: 'start',
          time: this._utilService.getCurrentTime()
        })
        
      }
      this.timerHistoryChange.emit(this.timerHistory);
      seconds = (this.counter > 0) ? this.counter: seconds;
      this.counter = seconds;
      this.timerId = setInterval(() => {
        if(this.counter > 0) {
          this.counter -= 1;
        } else {
          this.onResetTimer.emit({});
          clearInterval(this.timerId);
        }
      }, 1000);
  }

  pauseTimer() {
    this.timerHistory.push({
      action: 'pause',
      time: this._utilService.getCurrentTime()
    })
    this.timerHistoryChange.emit(this.timerHistory);
    clearInterval(this.timerId);
  }

  resetTimer() {
    this.timerHistory = [];
    this.timerHistoryChange.emit(this.timerHistory);
    this.counter = 0;
    clearInterval(this.timerId);
    this.onResetTimer.emit({});
  }

}

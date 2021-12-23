import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TimerService } from 'src/app/core/services/timer.service';
import { UtilService } from 'src/app/core/services/util.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-timer2-control-panel',
  templateUrl: './timer2-control-panel.component.html',
  styleUrls: ['./timer2-control-panel.component.scss']
})
export class Timer2ControlPanelComponent implements OnInit, OnDestroy {

  public inputEnable = true;
  public startBtnVisible = true;
  public timerForm!: FormGroup;
  private subs = new SubSink();

  constructor(
    private _ngFb: FormBuilder,
    private _utilService: UtilService,
    private _timerService: TimerService) {
    this.setTimerSubscription();
    this.initializeTimerForm();
  }

  ngOnInit(): void {
  }

  setTimerSubscription() {
    this.subs.sink = this._timerService.completeTimer.subscribe((data: boolean) => {
      this.onCompleteTimer(data);
    })
  }

  initializeTimerForm() {
    this.timerForm = this._ngFb.group({
      timerLimit: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.min(1)]]
    })
  }

  onTimerStartRequest() {
    [this.inputEnable, this.startBtnVisible] = [false, false];
    this._timerService.setTimer({action: 'start', time: this._utilService.getCurrentTime(), timerLimit: +this.timerForm.getRawValue().timerLimit });
  }

  onTimerPauseRequest() {
    this.startBtnVisible = true;
    this._timerService.setPauseTimer({action: 'pause', time: this._utilService.getCurrentTime()});
  }

  onResetRequest() {
    [this.inputEnable, this.startBtnVisible] = [true, true]
    this.timerForm.controls.timerLimit.setValue('');
    this._timerService.setResetTimer(true);
  }

  onCompleteTimer(state: boolean) {
    [this.inputEnable, this.startBtnVisible] = [true, true];
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

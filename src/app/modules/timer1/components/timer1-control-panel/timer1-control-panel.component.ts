import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-timer1-control-panel',
  templateUrl: './timer1-control-panel.component.html',
  styleUrls: ['./timer1-control-panel.component.scss']
})
export class Timer1ControlPanelComponent implements OnInit {

  public inputEnable = true;
  public startBtnVisible = true;
  public timerForm!: FormGroup;
  @Output() public onTimerStart = new EventEmitter<any>();
  @Output() public onTimerPause = new EventEmitter<any>();
  @Output() public onResetTimer = new EventEmitter<any>();


  constructor(
    private _ngFb: FormBuilder,
    private _utilService: UtilService
    ) { 
    this.initializeTimerForm();
  }

  ngOnInit(): void {
  }

  initializeTimerForm() {
      this.timerForm = this._ngFb.group({
        timerLimit: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.min(1)]]
      })
  }

  setInitialState() {
    [this.inputEnable, this.startBtnVisible] = [true, true];
  }

  onTimerStartRequest() {
    [this.inputEnable, this.startBtnVisible] = [false, false];
    this.onTimerStart.emit({ timerRange: this._utilService.get(this.timerForm.getRawValue(), 'timerLimit') });
  }
  
  onTimerPauseRequest() {
    this.startBtnVisible = true;
    this.onTimerPause.emit({});
  }
  
  onResetRequest() {
    this.timerForm.controls.timerLimit.setValue('');
    this.onResetTimer.emit({});
  }
}

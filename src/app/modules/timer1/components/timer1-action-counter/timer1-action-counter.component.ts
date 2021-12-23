import { Component, Input, OnInit } from '@angular/core';

export interface CountReport {
  startCount: number;
  pauseCount: number;
}
@Component({
  selector: 'app-timer1-action-counter',
  templateUrl: './timer1-action-counter.component.html',
  styleUrls: ['./timer1-action-counter.component.scss']
})
export class Timer1ActionCounterComponent implements OnInit {

  public countReport!:CountReport;
  @Input() timerHistory: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}

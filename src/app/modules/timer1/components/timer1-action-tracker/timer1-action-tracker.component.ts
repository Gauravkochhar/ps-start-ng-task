import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer1-action-tracker',
  templateUrl: './timer1-action-tracker.component.html',
  styleUrls: ['./timer1-action-tracker.component.scss']
})
export class Timer1ActionTrackerComponent implements OnInit {

  @Input() timerHistory: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Timer1RoutingModule } from './timer1-routing.module';
import { Timer1Component } from './timer1.component';
import { Timer1CountDownComponent } from './components/timer1-count-down/timer1-count-down.component';
import { Timer1ControlPanelComponent } from './components/timer1-control-panel/timer1-control-panel.component';
import { Timer1ActionTrackerComponent } from './components/timer1-action-tracker/timer1-action-tracker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { Timer1ActionCounterComponent } from './components/timer1-action-counter/timer1-action-counter.component';


@NgModule({
  declarations: [
    Timer1Component,
    Timer1CountDownComponent,
    Timer1ControlPanelComponent,
    Timer1ActionTrackerComponent,
    Timer1ActionCounterComponent
  ],
  imports: [
    CommonModule,
    Timer1RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class Timer1Module { }

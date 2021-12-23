import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Timer2RoutingModule } from './timer2-routing.module';
import { Timer2Component } from './timer2.component';
import { Timer2ActionCounterComponent } from './components/timer2-action-counter/timer2-action-counter.component';
import { Timer2ActionTrackerComponent } from './components/timer2-action-tracker/timer2-action-tracker.component';
import { Timer2ControlPanelComponent } from './components/timer2-control-panel/timer2-control-panel.component';
import { Timer2CountDownComponent } from './components/timer2-count-down/timer2-count-down.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Timer2Component,
    Timer2ActionCounterComponent,
    Timer2ActionTrackerComponent,
    Timer2ControlPanelComponent,
    Timer2CountDownComponent
  ],
  imports: [
    CommonModule,
    Timer2RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class Timer2Module { }

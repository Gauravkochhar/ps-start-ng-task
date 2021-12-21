import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Timer1RoutingModule } from './timer1-routing.module';
import { Timer1Component } from './timer1.component';


@NgModule({
  declarations: [
    Timer1Component
  ],
  imports: [
    CommonModule,
    Timer1RoutingModule
  ]
})
export class Timer1Module { }

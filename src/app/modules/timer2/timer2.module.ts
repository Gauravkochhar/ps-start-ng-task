import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Timer2RoutingModule } from './timer2-routing.module';
import { Timer2Component } from './timer2.component';


@NgModule({
  declarations: [
    Timer2Component
  ],
  imports: [
    CommonModule,
    Timer2RoutingModule
  ]
})
export class Timer2Module { }

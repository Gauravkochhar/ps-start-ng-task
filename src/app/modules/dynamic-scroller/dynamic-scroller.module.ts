import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicScrollerRoutingModule } from './dynamic-scroller-routing.module';
import { DynamicScrollerComponent } from './dynamic-scroller.component';


@NgModule({
  declarations: [
    DynamicScrollerComponent
  ],
  imports: [
    CommonModule,
    DynamicScrollerRoutingModule
  ]
})
export class DynamicScrollerModule { }

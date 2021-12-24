import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicScrollerRoutingModule } from './dynamic-scroller-routing.module';
import { DynamicScrollerComponent } from './dynamic-scroller.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DynamicScrollerComponent
  ],
  imports: [
    CommonModule,
    DynamicScrollerRoutingModule,
    SharedModule
  ]
})
export class DynamicScrollerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentMarksRoutingModule } from './student-marks-routing.module';
import { StudentMarksComponent } from './student-marks.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StudentMarksComponent
  ],
  imports: [
    CommonModule,
    StudentMarksRoutingModule,
    SharedModule
  ]
})
export class StudentMarksModule { }

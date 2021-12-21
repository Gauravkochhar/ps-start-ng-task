import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentMarksComponent } from './student-marks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: StudentMarksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentMarksRoutingModule { }

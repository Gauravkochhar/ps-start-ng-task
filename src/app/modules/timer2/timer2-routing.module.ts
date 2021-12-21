import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Timer2Component } from './timer2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Timer2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Timer2RoutingModule { }
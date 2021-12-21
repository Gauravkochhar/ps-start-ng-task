import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Timer1Component } from './timer1.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Timer1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Timer1RoutingModule { }

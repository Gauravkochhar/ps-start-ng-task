import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicScrollerComponent } from './dynamic-scroller.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DynamicScrollerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicScrollerRoutingModule { }

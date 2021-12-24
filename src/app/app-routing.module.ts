import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { APP_ROUTES } from './core/contants/routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTES.defaultPage,
    pathMatch: 'full'
  },
  {
    path: 'feature',
    component: BaseComponent,
    children: [
      {
        path: APP_ROUTES.bannerPage,
        loadChildren: () => import('./modules/banner/banner.module').then((m) => m.BannerModule)
      },
      {
        path: APP_ROUTES.productListing,
        loadChildren: () => import('./modules/product/product.module').then((m) => m.ProductModule)
      },
      {
        path: APP_ROUTES.timer1,
        loadChildren: () => import('./modules/timer1/timer1.module').then((m) => m.Timer1Module)
      },
      {
        path: APP_ROUTES.timer2,
        loadChildren: () => import('./modules/timer2/timer2.module').then((m) => m.Timer2Module)
      },
      {
        path: APP_ROUTES.studentMarks,
        loadChildren: () => import('./modules/student-marks/student-marks.module').then((m) => m.StudentMarksModule)
      },
      {
        path: APP_ROUTES.dynamicScroller,
        loadChildren: () => import('./modules/dynamic-scroller/dynamic-scroller.module').then((m) => m.DynamicScrollerModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'top' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
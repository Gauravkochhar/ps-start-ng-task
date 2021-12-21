import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerModule } from './modules/banner/banner.module';
import { DynamicScrollerModule } from './modules/dynamic-scroller/dynamic-scroller.module';
import { ProductModule } from './modules/product/product.module';
import { SharedModule } from './modules/shared/shared.module';
import { StudentMarksModule } from './modules/student-marks/student-marks.module';
import { Timer1Module } from './modules/timer1/timer1.module';
import { Timer2Module } from './modules/timer2/timer2.module';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

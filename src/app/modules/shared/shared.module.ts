import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DataFromPathPipe } from 'src/app/core/pipes/field-from-path.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TableComponent } from './components/table/table.component';
import { OnlyNumber } from 'src/app/core/directives/number-directive';
import { ActionCounterPipe } from 'src/app/core/pipes/action-counter.pipe';
import { ShowOnScrollDirective } from 'src/app/core/directives/show-on-scroll.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DataFromPathPipe,
    ActionCounterPipe,
    ShowOnScrollDirective,
    TableComponent,
    OnlyNumber,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    ScrollingModule
  ],
  exports: [
    HeaderComponent,
    HttpClientModule,
    DataFromPathPipe,
    ActionCounterPipe,
    ScrollingModule,
    TableComponent,
    OnlyNumber,
    ShowOnScrollDirective,
    PageNotFoundComponent
  ]
})
export class SharedModule { }

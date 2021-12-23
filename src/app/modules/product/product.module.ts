import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }

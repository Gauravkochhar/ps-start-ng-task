import { Component, OnInit } from '@angular/core';
import { priceFilterList, productList } from 'src/app/core/contants/product';
import { UtilService } from 'src/app/core/services/util.service';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public appliedFilter: any = {filterId: ''};
  public defaultListView = true;
  public productList = productList;
  public tempProductList: any[] = [];
  public priceFilterList = priceFilterList;
  
  constructor() { }

  ngOnInit(): void {
    this.tempProductList = this.productList;
  }

  applyFilter(filter: any) {
    this.appliedFilter = filter;
    this.tempProductList = this.productList.filter((elm) => {
      if((elm.rsp >= +this.appliedFilter.min) && (elm.rsp <= +this.appliedFilter.max)) {
        return true;
      } else {
        return false;
      }
    })
  }
}

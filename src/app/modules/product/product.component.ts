import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { productFilter, productList } from 'src/app/core/contants/product';
import { Product } from 'src/app/core/models/product-schema';
import { UtilService } from 'src/app/core/services/util.service';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private productLimit = 40;
  public readonly FILTER: any = productFilter;
  public defaultListView = true;
  public productList$: Observable<Product[]> | undefined;
  public appliedFilter: any = this.defaultFilter;

  constructor(
    private _apiService: ApiService,
    private _utilSerivice: UtilService
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }

/**
  * This function is using to return default filter values of initial stage.
  */
 get defaultFilter(): any {
  return {
    limit: this.productLimit.toString(),
    year: '',
    launch: '',
    landing: ''
  };
}

  /**
  * 1- This Function returns an object with applied filter values.
  * 2- Using for request body
  */
  private getAppliedFilter() {
    return this._utilSerivice.removeEmptyProperties(this._utilSerivice.cloneDeep({
      limit: this._utilSerivice.get(this.appliedFilter, 'limit') || this.productLimit.toString(),
      launch_success: this._utilSerivice.get(this.appliedFilter, this.FILTER.launch) || '',
      land_success: this._utilSerivice.get(this.appliedFilter, this.FILTER.landing) || '',
      launch_year: this._utilSerivice.get(this.appliedFilter, this.FILTER.year) || '',
    }));
  }

  /**
  * This function is using to get default mission list according to applied filter.
  */
  private getProductList() {
    // this._apiService.getProductList(this.getAppliedFilter()).subscribe((res: Product[]) => {
    //   const isResultOk = this._utilSerivice.isArray(this._utilSerivice.get(res, 'body')) ? true : false;
    //   this.productList$ = isResultOk ? of(this._utilSerivice.get(res, 'body')): of([]);
    // })
    this.productList$ = of(productList);
  } 

}

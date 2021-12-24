import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private productListUrl = 'launches';

  constructor(
    private httpService: HttpService) {
  }

  /**
  * Function to get mission list.
  * @param params Object
  * @return Observable as response.
  */
  public getProductList(params: any) {
    return this.httpService.getRequest(this.productListUrl, params, [], true);
    // return this.httpService.getLocalRequest('assets/mocks/mission.json');
  }

  public fetchStudentMarksList() {
    // return this.httpService.getLocalRequest('assets/mocks/student-marks.json');
    return this.httpService.getLocalRequest('assets/mocks/student-marks-list.json');
  }

}

import { Component, OnInit } from '@angular/core';
import { filterMetaData, propertiesHeaderList } from 'src/app/core/contants/marks-table-config';
import { Datum, StudentMarksResponse } from 'src/app/core/models/student-marks-schema';
import { ApiService } from 'src/app/core/services/api.service';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.scss']
})
export class StudentMarksComponent implements OnInit {

  public propertiesData: Datum[] = [];
  public tempPropertiesData : Datum[] = [];
  public temp1PropertiesData: Datum[] = [];
  public propertiesHeaderList = propertiesHeaderList;
  public readonly filterMetaData = filterMetaData;
  public filterInformation = { searchInput: '', filterByKeyName: '' };

  constructor(
    private _apiService: ApiService,
    private _utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.getProperties();
  }

    /* 
  Below function is fetching property list by http request.
  */
  getProperties() {
    this._apiService.fetchStudentMarksList().subscribe((response: any) => {
      const isResultOk = (this._utilService.get(response, 'body.success') == '1') && (this._utilService.get(response, 'body.message') == 'success');
      if (isResultOk) {
        this.propertiesData = this._utilService.get(response, 'body.data');
        this.tempPropertiesData = this._utilService.cloneDeep(this._utilService.get(response, 'body.data'));
        this.temp1PropertiesData = this._utilService.cloneDeep(this._utilService.get(response, 'body.data'));
      }
    });
  }

  centeralRequest(operationType: any, operationData: any) {
    if((operationType == this.filterMetaData.sorting) && operationData.activeSortData.length) {
      console.log('operationData',operationData.activeSortData);
      const dataFound = operationData.activeSortData.find((elm: any) => elm.keyName == operationData.lastClickedColumn);
      if(dataFound) {
        const { keyName, sortStatus } = dataFound;
        if(sortStatus == 'asc') {
          this.tempPropertiesData = this.propertiesData.sort((a: any, b: any) => (a[keyName] < b[keyName] ? -1 : 1));
        } else if(sortStatus == 'desc') {
          this.tempPropertiesData = this.propertiesData.sort((a: any, b: any) => (a[keyName] > b[keyName] ? -1 : 1));
        } else {
          this.tempPropertiesData = this.temp1PropertiesData ;
        }
      } else {
        this.tempPropertiesData = this.temp1PropertiesData ;
      }
    } else {
      this.tempPropertiesData = this.temp1PropertiesData;
    }
  }
}

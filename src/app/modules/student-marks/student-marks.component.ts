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
      }
    });
  }

  centeralRequest(operationType: any, operationData: any) {

  }
}

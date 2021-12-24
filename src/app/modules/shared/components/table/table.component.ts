import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public lastClickedColumn: any;
  public activeSortData: any[] = [];
  @Input() activeFilterKeyName: any;
  @Input() serialNoVisible = true;
  @Input() rows: any[] = [];
  @Input() columns: any[] = [];
  @Output() sortStatusChange = new EventEmitter<any>();

  constructor(private _utilService: UtilService) { }

  ngOnInit() {
  }

  getCellData(rowData: any, valuePath: any) {
    return this._utilService.get(rowData, valuePath);
  }

  updateSortStatus($event: any) {
    const indexOfPreviousHistory = this.activeSortData.findIndex((elm: any) => elm.keyName === $event.keyName);
    if (indexOfPreviousHistory > -1) {
      const sortStatus = this._utilService.get(this.activeSortData[indexOfPreviousHistory], 'sortStatus');
      this.activeSortData.splice(indexOfPreviousHistory, 1);
      if (sortStatus === 'asc') {
        this.activeSortData.unshift({ keyName: $event.keyName, sortStatus: 'desc' })
      } else if (sortStatus !== 'desc') { //i.e applying filter on fresh column (no filter active)
        this.activeSortData.unshift({ keyName: $event.keyName, sortStatus: 'asc' })
      }
    } else {
      this.activeSortData.unshift({ keyName: $event.keyName, sortStatus: 'asc' });
    }
    this.lastClickedColumn = $event.keyName;
    this.sortStatusChange.emit({ activeSortData: this.activeSortData, lastClickedColumn: $event.keyName });
  }

  isColumnInRespectiveOrder(orderType: any, column: any) {
    const index = this.activeSortData.findIndex((elm: any) => (column.keyName === elm.keyName) && (elm.sortStatus === orderType));
    return (index > -1) &&  (this.lastClickedColumn==column.keyName) ? true : false;
  }
}

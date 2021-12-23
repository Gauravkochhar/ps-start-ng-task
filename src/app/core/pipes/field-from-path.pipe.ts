import { Pipe, PipeTransform } from '@angular/core';
import { UtilService } from '../services/util.service';
@Pipe({ name: 'dataFromPath' })
export class DataFromPathPipe implements PipeTransform {

  constructor(private utilService: UtilService) {
  }

  transform(data: Object, path: string): Object {
    return this.utilService.isNull(this.utilService.get(data, path)) ? 'N.A' : (this.utilService.toString(this.utilService.get(data, path) || 'N.A'));
  }

}
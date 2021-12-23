import { Pipe, PipeTransform } from '@angular/core';
import { TimerAction } from '../models/timer';

@Pipe({
  name: 'actionCounter',
  pure: false
})
export class ActionCounterPipe implements PipeTransform {

  transform(data: TimerAction[], ...args: unknown[]): unknown {
    return data.filter((elm: TimerAction) => elm.action == args[0]).length;
  }

}

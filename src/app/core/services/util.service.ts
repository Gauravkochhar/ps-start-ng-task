import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  /**
  * Function is using for remove only undefined containing properties.
  */
  public removeUndefined(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }

  /**
  * Function is removing falsy value properties of an object.
  */
  public removeEmptyProperties(obj: any) {
    for(let k in obj){
      if(obj.hasOwnProperty(k) && !obj[k]){
        delete obj[k];
      }
    }
    return obj
  }

  /**
   * 
   * @param obj: Object as data source
   * @param path : Accessing nested JavaScript objects and arrays by string path
   * @returns 
   */
  public get(obj: any, path: any) {
    path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    path = path.replace(/^\./, '');           // strip a leading dot
      var a = path.split('.');
      for (var i = 0, n = a.length; i < n; ++i) {
          var k = a[i];
          if (k in obj) {
              obj = obj[k];
          } else {
              return;
          }
      }
      return obj;
  }

  /**
   * 
   * @param data 
   * @returns data into string format.
   */
  public toString(data: any) {
    return data ? data.toString(): '';
  }

  /**
   * 
   * @param data 
   * @returns true in case of data is null otherwise returns false.
   */
  public isNull(data: any) {
    return data === null;
  }

  public isArray(data: any) {
    return Array.isArray(data);
  }

  public cloneDeep(data: any) {
    return JSON.parse(JSON.stringify(data));
  }

  public getCurrentTime() {
    const timeInMs = new Date().getTime();
    return new Date(timeInMs).toLocaleDateString().split('/').join('-') + ' ' + new Date(timeInMs).toLocaleTimeString();
  }
}



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  /**
   * @description Format a number as 2.5K if a thousand or more, otherwise 900
   * @param num 
   * @returns 
   */
  kFormatter(num: any) {
    return Math.abs(num) > 999 ? Math.sign(num)*(+(Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  }  
}

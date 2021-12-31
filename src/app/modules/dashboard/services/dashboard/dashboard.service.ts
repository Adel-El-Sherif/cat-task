import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MainChart } from '../../models/main-chart/main-chart';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiAdminUrl: string = environment.apiAdminURL;

  constructor(
    private _HttpClient: HttpClient
  ) { }



  /**
   * @description Get Main Chart
   * @returns {Observable<MainChart>} MainChart
   */
  getMainChart(): Observable<MainChart>  {
    const URL = `${this.apiAdminUrl}main-charts`;
    return (this._HttpClient.get(URL) as Observable<MainChart>);
  }
  


}

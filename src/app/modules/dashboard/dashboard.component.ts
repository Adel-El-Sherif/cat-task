import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { MainChart } from './models/main-chart/main-chart';
import { DashboardService } from './services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mainChart!: MainChart;

  constructor(
    private _DashboardService: DashboardService
    ) { }

  ngOnInit(): void {
    this.getData();
  }



  getData(): void {
    this.getMainChart();
  }

  // To get main chart
  getMainChart(): void {
    this._DashboardService.getMainChart()
    .subscribe((mainChart: MainChart) => {
      this.mainChart = mainChart;      
    })
  }


}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NumOfPatientComponent } from './components/num-of-patient/num-of-patient.component';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    DashboardComponent,
    NumOfPatientComponent,
    AreaChartComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }

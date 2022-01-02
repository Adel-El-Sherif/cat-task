import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NumOfPatientComponent } from './components/num-of-patient/num-of-patient.component';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { NumOfPatientPerProductComponent } from './components/num-of-patient-per-product/num-of-patient-per-product.component';
import { ColumnChartComponent } from './components/column-chart/column-chart.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NumOfPatientComponent,
    AreaChartComponent,
    NumOfPatientPerProductComponent,
    ColumnChartComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexAnnotations,
  ApexFill,
  ApexStroke,
  ApexGrid,
} from "ng-apexcharts";
import { HelperService } from 'src/app/shared/services/helper/helper.service';
import { NumberOfPatientPerProducts } from '../../models/number-of-patient-per-products/number-of-patient-per-products';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: any; //ApexXAxis;
  annotations: ApexAnnotations;
  fill: ApexFill;
  stroke: ApexStroke;
  grid: ApexGrid;
  toolbar: any
}


@Component({
  selector: 'column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;
  numberOfPatientPerProducts!: NumberOfPatientPerProducts;
  patientPerProducts: any = {
    name: [],
    total: []
  };
  // booleans 
  initChart: boolean = false;

  // using an input property setter to intercept and act upon a value from the parent.
  @Input() set data(data: NumberOfPatientPerProducts | undefined) {

    if(data) {
      this.numberOfPatientPerProducts = data;      
      this.prepareChartData();
      this.chartOptions = this.getChartOptions();
      this.initChart = true;
    }
  }


  /**
   * @description To re format Chart data
   */
  prepareChartData(): any {
    let patientsPerYear: any = {
      name: [],
      total: []
    };
    this.numberOfPatientPerProducts?.data.forEach(element => {
      patientsPerYear.name.push(element.name);
      patientsPerYear.total.push(element.total);
    })
    this.patientPerProducts = patientsPerYear
  }


  constructor(
    private _HelperService: HelperService
  ) { 

  }

  ngOnInit(): void {
  }


  // Chart options
  getChartOptions() {
    const colors = '#935CCB'
    return {
      series: [
        {
          name: "Servings",
          data: this.patientPerProducts?.total
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        }  
      },
      plotOptions: {
        bar: {
          columnWidth: "25%",
          borderRadius: 2,
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 0
      },

      grid: {
        borderColor: '#bababa',
        strokeDashArray: 6,
        row: {
          colors: ["#fff", "#fff"]
        }
      },
      xaxis: {
        axisBorder: {
          show: false
        },
        labels: {
          style: {
            colors: '#bababa',
            fontWeight: 600,
            fontSize: '.9rem',
          }
        },
        categories: this.patientPerProducts?.name
      },

      yaxis: {
        min: 0,
        max: 10000,
        // logBase: 2000,
        tickAmount: 5,
        // forceNiceScale: true,
        labels : {
          formatter: (value: any) => {
          return this._HelperService.kFormatter(value);
          },
          style: {
            colors: '#bababa',
            fontWeight: 600,
            fontSize: '1rem',
          }
        }
      },
      fill: {
        type: 'solid',
        colors: colors,
      },
      tooltip: {
        
        enabled: true,
        	custom: function({ series, seriesIndex, dataPointIndex, w }: any) {
							return (
							'<div class="custom-tooltip">' +
								'<span>' +
										series[seriesIndex][dataPointIndex] +
								'</span>' +
							'</div>'
							)
						}
      },
    };
  }

 

}

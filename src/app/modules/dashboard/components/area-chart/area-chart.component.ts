import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { NumberOfPatients } from '../../models/number-of-patients/number-of-patients';

@Component({
  selector: 'area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {
  
  numberOfPatients!: NumberOfPatients;
  chartOptions: any = {};
  patientsPerYear: any = {
    years: [],
    total: []
  };

  // booleans 
  initChart: boolean = false;

  // using an input property setter to intercept and act upon a value from the parent.
  @Input() set data(data: NumberOfPatients | undefined) {

    if(data) {
      this.numberOfPatients = data;
      this.prepareChartData();
      this.chartOptions = this.getChartOptions();
      this.initChart = true;
    }
  }

  constructor() { }

  ngOnInit(): void {

  }


  /**
   * @description To re format Chart data
   */
  prepareChartData(): any {
    let patientsPerYear: any = {
      years: [],
      total: []
    };
    this.numberOfPatients?.patients_per_year.forEach(element => {
      patientsPerYear.years.push(element.year);
      patientsPerYear.total.push(element.total);
    })
    this.patientsPerYear = patientsPerYear
  }


  // Chart options
  getChartOptions() {
    const colors = '#0059fa'
    const strokeColor = '#fff';
    return {
      series: [{
        name: 'Net Profit',
        data: (this.patientsPerYear?.total as Array<any>).reverse()
      }],
      chart: {
        type: 'area',
        height: 300,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
        showForSingleSeries: false,
        showForNullSeries: false,
        showForZeroSeries: false,
        position: 'top',
        itemMargin: {
          horizontal: 20
        }

      },
      plotOptions: {},
      legend: {
        show: true
      },
      fill: {
        type: ['gradient'],
        opacity: 1,
        gradient: {
          shade: 'dark',
          type: "vertical",
          shadeIntensity: 0.1,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: .2,
          // stops: [0, 50, 100],
          colorStops: []
        }
      },
      grid: {
        show: true,
        borderColor: 'transparent',
        xaxis: {
          lines: {
              show: false
          }
        }, 
        padding: {
          top: 50,
          right: 0,
          bottom: 0,
          left: 0
      }, 
      },
      stroke: {
        lineCap: 'butt',
        curve: ['smooth'],

        // curve: 'smooth',
        show: true,
        width: 3,
        colors: [strokeColor]
      },
      xaxis: {
        categories: (this.patientsPerYear?.years as Array<any>).reverse(),
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: true,
          style: {
            fontSize: '12px',
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            width: 1,
            dashArray: 3
          }
        },
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: true,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        
        enabled: true,
        intersect: false,
        style: {
          fontSize: '1rem',
          color: colors
        },
        y: {
          formatter: function(value: any, { series, seriesIndex, dataPointIndex, w }: any) {              
            return `${value} / Y${w.globals?.categoryLabels[dataPointIndex]}`
          }
        },

        x:{
          show: false
        },
        marker: {
          show: false
        },
        onDatasetHover: {
          highlightDataSeries: false

        },
      },
      colors: [colors],
      noData: {
        text: 'Loading...'
      },
      markers: {
        size: 9,
        showNullDataPoints: true,
        colors: [colors],
        strokeColor: [strokeColor],
        strokeWidth: 2,
        hover: {
          size: 9,
        }
      }
    };
  }

}

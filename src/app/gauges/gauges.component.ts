import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-gauges',
  templateUrl: './gauges.component.html',
  styleUrls: ['./gauges.component.css']
})
export class GaugesComponent {

  Highcharts=Highcharts
  chartOptions={}

  constructor(){



    this.chartOptions={



      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Appointment Review',
        align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: 'Face To Face',
            y: 74.77,
            sliced: true,
            selected: true
        },  {
            name: 'E-Consult',
            y: 12.82
        },  {
            name: 'Available',
            y: 4.63
        }]
    }]



    }
  }


}

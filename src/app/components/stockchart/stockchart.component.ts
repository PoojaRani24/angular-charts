import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { Options } from 'highcharts/highstock';

@Component({
  selector: 'app-stockchart',
  templateUrl: './stockchart.component.html',
  styleUrls: ['./stockchart.component.scss']
})
export class StockchartComponent implements OnInit {
  isHighcharts=typeof Highcharts==='object';
  Highcharts:typeof Highcharts = Highcharts;
  chartOptions: Options = {
    series: [
      {
        type: 'line',
        pointInterval: 24 * 3600 * 1000,
        data: [1, 2, 3, 4]
      }
    ]
  };

 
  ngOnInit(): void {
  }

}

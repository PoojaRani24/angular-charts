import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent{
  isHighcharts=typeof Highcharts ==='object';
  Highcharts:typeof Highcharts=Highcharts; 
  chartOptions:Highcharts.Options={
    title: {
      text: 'Basic Line Chart'
  }, 
    series:[{
      data:[1,2,3,4,5],
      type:"line"
    }]
  }
  chartConstructor:string='chart'

  constructor(){
   console.log(this.chartConstructor)
  }

}

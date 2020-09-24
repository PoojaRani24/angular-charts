import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { LinechartComponent } from './components/linechart/linechart.component';
import { ColumnchartComponent } from './components/columnchart/columnchart.component';
import { HorizontallayoutComponent } from './components/horizontallayout/horizontallayout.component';
import { SplinechartComponent } from './components/splinechart/splinechart.component';
import { StockchartComponent } from './components/stockchart/stockchart.component';
import { StockIndicatorChartComponent } from './components/stock-indicator-chart/stock-indicator-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    ColumnchartComponent,
    HorizontallayoutComponent,
    SplinechartComponent,
    StockchartComponent,
    StockIndicatorChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

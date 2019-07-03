import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, AreaSeriesService } from '@syncfusion/ej2-angular-charts';
import { LegendService, ZoomService } from '@syncfusion/ej2-angular-charts';
import { GraphService } from '../app/service/graph.service';

/**
 * Module
 */
@NgModule({
  imports: [
    BrowserModule, ChartModule, HttpClientModule, HttpModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [DateTimeService, AreaSeriesService, LegendService, ZoomService, GraphService]
})
export class AppModule { }
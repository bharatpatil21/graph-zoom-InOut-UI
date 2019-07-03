import { Component, OnInit } from '@angular/core';
import { series1 } from '../app/chart';

import { GraphService } from './service/graph.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private graphService: GraphService
  ) { }

  public primaryXAxis: Object;
  public chartData: any = [];
  public title: string;
  public primaryYAxis: Object;
  public border: Object;
  public zoom: Object;
  public animation: Object;
  public legend: Object;

  ngOnInit(): void {
    this.primaryXAxis = {
      valueType: 'DateTime',
      labelFormat: 'yyMMMdd hh:ss',
    };
    this.zoom = {
      enableMouseWheelZooming: true,
      enablePinchZooming: true,
      enableSelectionZooming: true
    };
    this.animation = { enable: false };
    this.legend = { visible: false };
    this.getGraph();
  }

  getGraph() {
    this.graphService.getGraphData().subscribe(
      graphData => {
        if (graphData.statusCode === 200) {
          this.chartData = graphData.data;
        } else {
          console.log('error-1', graphData)
        }
      }, error => {
        console.log('error-', error)
      });
  }
}

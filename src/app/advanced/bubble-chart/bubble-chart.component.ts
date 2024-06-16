import { AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { registerables, Chart } from 'chart.js';
Chart.register(...registerables)
@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css'],
  standalone: true
})
export class BubbleChartComponent implements AfterViewInit {
  constructor() { }
  @ViewChild('myChart') public myChart!: ElementRef;
  private chartInstance: Chart | undefined;

  ngAfterViewInit() {
    this.renderChart();
  }
  private renderChart() {
    let myChart = this.myChart.nativeElement
    const data = {
      datasets: [{
        label: 'First Dataset',
        data: [{
          x: 20,
          y: 30,
          r: 15
        }, {
          x: 40,
          y: 10,
          r: 10
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    };
    new Chart(myChart, {
      type: 'bubble',
      data: data,
      options: {}
    });
  }
}

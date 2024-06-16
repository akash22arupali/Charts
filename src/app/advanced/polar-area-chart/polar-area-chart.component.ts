import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)
@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.css'],
  standalone: true
})
export class PolarAreaChartComponent implements AfterViewInit {
  constructor() { }
  @ViewChild('myChart') public myChart!: ElementRef;
  private chartInstance: Chart | undefined;

  ngAfterViewInit() {
    this.renderChart();
  }
  private renderChart() {
    let myChart = this.myChart.nativeElement
    const data = {
      labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ]
      }]
    };
    new Chart(myChart, {
      type: 'polarArea',
      data: data,
      options: {}
    });
  }
}

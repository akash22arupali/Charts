import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)
@Component({
  selector: 'app-mixed-chart',
  templateUrl: './mixed-chart.component.html',
  styleUrls: ['./mixed-chart.component.css'],
  standalone: true
})
export class MixedChartComponent implements AfterViewInit {
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
        'January',
        'February',
        'March',
        'April'
      ],
      datasets: [{
        type: 'bar' as const,
        label: 'Bar Dataset',
        data: [10, 20, 30, 40],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)'
      }, {
        type: 'line' as const,
        label: 'Line Dataset',
        data: [50, 50, 50, 50],
        fill: false,
        borderColor: 'rgb(54, 162, 235)'
      }]
    };
    new Chart(myChart, {
      type: 'scatter',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

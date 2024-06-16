import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
  standalone: true
})
export class LineChartComponent implements AfterViewInit {
  @ViewChild('myChart') public myChart!: ElementRef;
  private chartInstance: Chart | undefined;

  ngAfterViewInit() {
    this.renderChart();
  }
  private renderChart() {
    let myChart = this.myChart.nativeElement
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
    new Chart(myChart, {
      type: 'line',
      data: data,
    });
  }
}

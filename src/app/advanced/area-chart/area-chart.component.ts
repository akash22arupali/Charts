import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
    selector: 'app-area-chart',
    templateUrl: './area-chart.component.html',
    styleUrls: ['./area-chart.component.css'],
    standalone: true
})
export class AreaChartComponent implements AfterViewInit {

    constructor() { }
    @ViewChild('myChart') public myChart!: ElementRef;
    private chartInstance: Chart | undefined;

    ngAfterViewInit() {
        this.renderChart();
    }
    private renderChart() {

        let myChart = this.myChart.nativeElement

        new Chart(myChart, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets: [
                    {
                        label: 'Dataset 0',
                        data: [10, 20, 30, 40, 50],
                        fill: 'origin',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Semi-transparent red
                        borderColor: 'rgba(255, 99, 132, 1)', // Solid red line
                        borderWidth: 1
                    },
                    {
                        label: 'Dataset 1',
                        data: [50, 40, 30, 20, 10],
                        fill: '+2',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Semi-transparent blue
                        borderColor: 'rgba(54, 162, 235, 1)', // Solid blue line
                        borderWidth: 1
                    },
                    {
                        label: 'Dataset 2',
                        data: [20, 30, 40, 30, 20],
                        fill: 1,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Semi-transparent green
                        borderColor: 'rgba(75, 192, 192, 1)', // Solid green line
                        borderWidth: 1
                    },
                    {
                        label: 'Dataset 3',
                        data: [30, 40, 50, 40, 30],
                        fill: false,
                        backgroundColor: 'rgba(153, 102, 255, 0.2)', // Semi-transparent purple
                        borderColor: 'rgba(153, 102, 255, 1)', // Solid purple line
                        borderWidth: 1
                    },
                    {
                        label: 'Dataset 4',
                        data: [40, 30, 20, 10, 0],
                        fill: '-2',
                        backgroundColor: 'rgba(255, 159, 64, 0.2)', // Semi-transparent orange
                        borderColor: 'rgba(255, 159, 64, 1)', // Solid orange line
                        borderWidth: 1
                    },
                    {
                        label: 'Dataset 5',
                        data: [25, 25, 25, 25, 25],
                        fill: { value: 25 },
                        backgroundColor: 'rgba(255, 206, 86, 0.2)', // Semi-transparent yellow
                        borderColor: 'rgba(255, 206, 86, 1)', // Solid yellow line
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: true
                    }
                }
            }
        });
    }
}

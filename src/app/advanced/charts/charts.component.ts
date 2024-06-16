import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  standalone: true
})
export class ChartsComponent implements AfterViewInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  @ViewChild('myChart') public myChart!: ElementRef;
  private chartInstance: Chart | undefined;


  ngAfterViewInit() {
    this.renderChart();
  }

  //   // ngOnDestroy() {
  //   //   this.destroyChart();
  //   // }
  //   constructor(){}
  private renderChart() {

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Looping tension',
        data: [65, 59, 80, 81, 0, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      }]
    };
    //  let myChart=this.myChart.nativeElement
    // new Chart(myChart,{
    //     type: 'line',
    //     data: data,
    //     options: {
    //         interaction: {
    //             // Overrides the global setting
    //             mode: 'index'
    //         }
    //     }
    // });
    // public destroyChart() {
    //   if (this.chartInstance) {
    //     this.chartInstance.destroy();
    //   }
    // }

    // const data = {
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //   datasets: [{
    //     label: 'Looping tension',
    //     data: [65, 59, 80, 81, 90, 55, 40],
    //     fill: true,
    //     borderColor: 'rgb(75, 192, 192)',
    //   }]
    // };
    //   let myChart = this.myChart.nativeElement
    //   new Chart(myChart, {
    //     type: 'line',
    //     data: {
    //       datasets: [{
    //         data: [0, 0],
    //       }, {
    //         data: [0, 1]
    //       }, {
    //         data: [1, 0],
    //         showLine: false // overrides the `line` dataset default
    //       }, {
    //         type: 'scatter', // 'line' dataset default does not affect this dataset since it's a 'scatter'
    //         data: [1, 1]
    //       }]
    //     }
    //   });
    // }


    //   let myChart=this.myChart.nativeElement
    //    new Chart(myChart,{
    //     type: 'bar',
    //     data: {
    //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //         datasets: [{
    //             label: '# of Votes',
    //             data: [12, 19, 3, 5, 2, 3],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)',
    //                 'rgba(54, 162, 235, 0.2)',
    //                 'rgba(255, 206, 86, 0.2)',
    //                 'rgba(75, 192, 192, 0.2)',
    //                 'rgba(153, 102, 255, 0.2)',
    //                 'rgba(255, 159, 64, 0.2)'
    //             ],
    //             borderColor: [
    //                 'rgba(255, 99, 132, 1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             borderWidth: 1
    //         }]
    //     },
    //     options: {
    //         animation: {
    //             duration: 1000, // Duration in milliseconds
    //             easing: 'easeInOutQuad' // Easing function
    //         }
    //     }

    // });



    // let myChart=this.myChart.nativeElement
    //    new Chart(myChart, {
    //     type: 'doughnut',
    //     data: data,
    //     options: {
    //         animation: {
    //             onProgress: function(animation) {
    //                 myChart.value = animation.currentStep / animation.numSteps;
    //             }
    //         }
    //     }
    // });





    //     const data = {
    //       labels: [
    //         'Red',
    //         'Blue',
    //         'Yellow'
    //       ],
    //       datasets: [{
    //         label: 'My First Dataset',
    //         data: [300, 50, 100],
    //         backgroundColor: [
    //           'rgb(255, 99, 132)',
    //           'rgb(54, 162, 235)',
    //           'rgb(255, 205, 86)'
    //         ],
    //         hoverOffset: 4
    //       }]
    //     };



    //     const config = {
    //       type: 'doughnut',
    //       data: data,
    //       plugins: [plugin],
    //     };


    //   }}

    // let myChart=this.myChart.nativeElement
    //   new Chart(myChart, {
    //     type: 'line',
    //     data: data,
    //     options: {
    //       // This chart will not respond to mousemove, etc
    //       events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
    //       plugins:{

    //       }

    //     }
    //   });


    // let myChart=this.myChart.nativeElement
    //   new Chart(myChart, {
    //     type: 'line',
    //     data: data,
    //     options: {
    //         interaction: {
    //            // mode: 'point'
    //            // mode: 'nearest'
    //             mode: 'index'
    //         }
    //     }
    // });

    let myChart = this.myChart.nativeElement

    new Chart(myChart, {
      type: 'line',
      data: data,
      options: {
        interaction: {
          mode: 'y'
        },

        devicePixelRatio: 10,
        layout: {
          padding: 100
        },

        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: true,
            labels: {
              color: 'rgb(255, 99, 132)'
            }
          },
          tooltip: {
            position: 'nearest'
          },
          title: {
            display: true,
            text: 'Custom Chart Title',

            padding: {
              top: 10,
              bottom: 30
            }
          },
          subtitle: {
            display: true,
            text: 'Custom Chart Subtitle'
          }
        }
      }

    });
  }
}
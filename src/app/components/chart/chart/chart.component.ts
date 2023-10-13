import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  title = 'ng-chart';
  chart: any = [];

  constructor() { }

  createChart() {
    this.chart = new Chart('MyGraph', {
      type: 'bar',
      data: {
        labels: ['User 1', 'User 2', 'User 3', 'User 4', 'User 5', 'User 6', 'User 7', 'User 8', 'User 9', 'User 10'],
        datasets: [
          {
            label: 'Followers',
            data: [12, 19, 3, 5, 2, 3, 7, 8, 9, 14],
            borderWidth: 1,
            backgroundColor: 'rgb(217, 107, 0)'
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  ngOnInit() {
    this.createChart();
  }



}
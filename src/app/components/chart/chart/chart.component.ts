import { Component, ElementRef, Input, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @Input() users: any = [];

  title = 'ng-chart';
  chart: any = {};

  constructor(private userService: UserService) {
  }

  createChart(config: any) {
    this.chart = new Chart('MyGraph', config);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fillData(changes["users"].currentValue);
  }

  async fillData(data: any[]) {
    const users = data.map((user) => user.login) as never[];
    const promises = data.map(async (user) => {
      let data = await this.userService.getUserPromise(user.url);
      return data.followers;
    });

    let followers = await Promise.all(promises) as never[];

    let chartInfo = {
      type: 'bar',
      data: {
        labels: users,
        datasets: [
          {
            label: 'Followers',
            data: followers,
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
    }

    this.createChart(chartInfo);
  }



}
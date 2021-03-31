import { Injectable } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Injectable({
  providedIn: 'root',
})
export class BuildChartService {
  constructor() {}

  buildChart(id: string, data: any) {
    Chart.defaults.global.legend.display = false;
    Chart.defaults.scale.gridLines.display = false;
    new Chart(id, {
      type: 'line',
      data: {
        labels: ['15min', '30min', '1h', '6h', '12h', '24h'],
        datasets: [
          {
            data: [
              data.percent_change_15m,
              data.percent_change_30m,
              data.percent_change_1h,
              data.percent_change_6h,
              data.percent_change_12h,
              data.percent_change_24h,
            ],

            backgroundColor: [['#92c9ff31']],
            borderColor: ['#92C8FF'],
            borderWidth: 3,
            pointBackgroundColor: '#233dbd',
            pointBorderColor: '#8196FF',
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },
    });
  }
}

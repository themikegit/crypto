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
        labels: ['Jan', '', '', '', '', '', '', '', '', '', '', 'Dec'],
        datasets: [
          {
            data: [
              data[0].high,
              data[30].high,
              data[60].high,
              data[90].high,
              data[120].high,
              data[150].high,
              data[180].high,
              data[210].high,
              data[240].high,
              data[270].high,
              data[300].high,
              data[330].high,
              data[360].high,
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

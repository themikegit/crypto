import { Component, Input, OnInit } from '@angular/core';
import { BuildChartService } from 'src/app/build-chart.service';

@Component({
  selector: 'app-single-coin',
  templateUrl: './single-coin.component.html',
  styleUrls: ['./single-coin.component.scss'],
})
export class SingleCoinComponent implements OnInit {
  @Input() singleCoin: any;
  constructor(private buildChart: BuildChartService) {}

  exploding: boolean;
  ngOnInit(): void {
    if (this.singleCoin.quotes.USD.volume_24h > 2000000000) {
      this.exploding = true;
    }
  }

  ngAfterViewInit(): void {
    this.buildChart.buildChart(this.singleCoin.id, this.singleCoin.quotes.USD);
  }
}

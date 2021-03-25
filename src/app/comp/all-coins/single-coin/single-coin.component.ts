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

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.buildChart.buildChart(this.singleCoin.id, this.singleCoin.quotes.USD);
  }
}

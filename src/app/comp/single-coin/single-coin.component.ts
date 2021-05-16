import { Component, Input, OnInit } from '@angular/core';
import { BuildChartService } from 'src/app/build-chart.service';
import { GrowthServiceService } from 'src/app/growth-service.service';

@Component({
  selector: 'app-single-coin',
  templateUrl: './single-coin.component.html',
  styleUrls: ['./single-coin.component.scss'],
})
export class SingleCoinComponent implements OnInit {
  @Input() singleCoin: any;
  constructor(
    private buildChart: BuildChartService,
    private growthServ: GrowthServiceService
  ) {}

  growth;

  ngOnInit(): void {
    // this.cryptoSrv.oneCoin.next(this.singleCoin);
    let arr = this.singleCoin.ohlc;
    this.growth = this.growthServ.calcGrowth(arr[0].close, arr[360].close);
  }

  ngAfterViewInit(): void {
    this.buildChart.buildChart(this.singleCoin.id, this.singleCoin.ohlc);
    //this.cryptoSrv.oneCoin.subscribe((res) => console.log(res, 'one coin'));
  }
}

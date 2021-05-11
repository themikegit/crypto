import { Component, Input, OnInit } from '@angular/core';
import { BuildChartService } from 'src/app/build-chart.service';
import { CryptoApiService } from 'src/app/crypto-api.service';

@Component({
  selector: 'app-single-coin',
  templateUrl: './single-coin.component.html',
  styleUrls: ['./single-coin.component.scss'],
})
export class SingleCoinComponent implements OnInit {
  @Input() singleCoin: any;
  constructor(
    private buildChart: BuildChartService,
    private cryptoSrv: CryptoApiService
  ) {}

  growth;

  ngOnInit(): void {
    this.cryptoSrv.oneCoin.next(this.singleCoin);
    let arr = this.singleCoin.ohlc;
    let first = arr[0].close;
    let last = arr[360].close;
    this.growth = ((last - first) / first) * 100;
  }

  ngAfterViewInit(): void {
    this.buildChart.buildChart(this.singleCoin.id, this.singleCoin.ohlc);
    //this.cryptoSrv.oneCoin.subscribe((res) => console.log(res, 'one coin'));
  }
}

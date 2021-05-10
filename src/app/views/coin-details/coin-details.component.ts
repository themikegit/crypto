import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import { BuildChartService } from 'src/app/build-chart.service';
import { CryptoApiService } from 'src/app/crypto-api.service';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss'],
})
export class CoinDetailsComponent implements OnInit {
  idRt: string;
  coinComplete: any[];
  isLoading = true;
  growth: number;
  coinDetails;
  coinHistory;
  coinTicker;

  constructor(
    private route: ActivatedRoute,
    private cryptoApi: CryptoApiService,
    private chart: BuildChartService
  ) {
    this.idRt = this.route.snapshot.params.id;
    this.coinDetails = this.cryptoApi.getCoinDetails(this.idRt);
    this.coinHistory = this.cryptoApi.getCoinHistory(this.idRt);
    this.coinTicker = this.cryptoApi.getTicker(this.idRt);
  }

  calcGrowth(first: number, last: number) {
    return ((last - first) / first) * 100;
  }

  ngOnInit() {
    forkJoin([this.coinDetails, this.coinHistory, this.coinTicker]).subscribe(
      (res) => {
        this.coinComplete = res;
        this.isLoading = false;
        let arr = this.coinComplete[1];
        this.growth = this.calcGrowth(arr[0].close, arr[360].close);
        this.chart.buildChart(this.idRt, this.coinComplete[1]);
        console.log(this.coinComplete);
      }
    );
  }
}

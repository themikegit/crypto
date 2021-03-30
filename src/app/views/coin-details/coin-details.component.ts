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
  constructor(
    private route: ActivatedRoute,
    private cryptoApi: CryptoApiService,
    private buildChart: BuildChartService
  ) {
    this.idRt = this.route.snapshot.params.id;
  }

  idRt: string;
  details$: Observable<any>;
  coinStats: any;
  isLoading = true;
  chartData;

  ngOnInit() {
    let coinDetails = this.cryptoApi.getCoinDetails(this.idRt);
    let coinHistory = this.cryptoApi.getCoinHistory(this.idRt);

    // forkJoin([coinDetails, coinHistory]).subscribe((res) => console.log(res));

    this.details$ = forkJoin([coinDetails, coinHistory]);
    this.cryptoApi.getCoinHistory(this.idRt).subscribe((res: any) => {
      this.chartData = res.quotes.USD;
      console.log(this.chartData);
    });

    // **** Concat operator - solution for nested observables. bad in this case ****
    // this.cryptoApi
    //   .getCoinDetails(this.idRt)
    //   .pipe(
    //     tap((res) => console.log('result first', res)),
    //     concatMap((res) => this.cryptoApi.getCoinHistory(this.idRt)),
    //     tap((res) => console.log('result second', res))
    //   )
    //   .subscribe((res) => console.log('result total', res));
  }
  ngAfterViewInit() {
    this.buildChart.buildChart(this.idRt, this.chartData);
  }
}

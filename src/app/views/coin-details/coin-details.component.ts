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
    private chart: BuildChartService
  ) {
    this.idRt = this.route.snapshot.params.id;
  }

  idRt: string;
  coinComplete: any[];
  isLoading = true;

  ngOnInit() {
    let coinDetails = this.cryptoApi.getCoinDetails(this.idRt);
    let coinHistory = this.cryptoApi.getCoinHistory(this.idRt);

    forkJoin([coinDetails, coinHistory]).subscribe((res) => {
      this.coinComplete = res;
      this.isLoading = false;
    });

    // **** details as observable. use async pipe in component. How to take data for chart ****
    // this.details$ = forkJoin([coinDetails, coinHistory]);

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
    this.chart.buildChart(this.idRt, this.coinComplete[1].quotes.USD);
  }
}

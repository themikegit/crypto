import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  details: any;
  coinStats: any;
  isLoading = true;

  ngOnInit() {
    this.cryptoApi.getCoinDetails(this.idRt).subscribe((res) => {
      this.details = res;
      this.isLoading = false;
    });
    this.cryptoApi.getCoinHistory(this.idRt).subscribe((res) => {
      this.coinStats = res;
    });
  }
  ngAfterViewInit(): void {
    this.buildChart.buildChart(this.idRt, this.coinStats.quotes.USD);
  }
}

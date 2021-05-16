import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildChartService } from 'src/app/build-chart.service';
import { map, filter } from 'rxjs/operators';
import { CryptoApiService } from 'src/app/crypto-api.service';
import { GrowthServiceService } from 'src/app/growth-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-coin-template',
  templateUrl: './single-coin-template.component.html',
  styleUrls: ['./single-coin-template.component.scss'],
})
export class SingleCoinTemplateComponent implements OnInit {
  routeSub;
  coin = <any>{};
  growth: number;
  isLoading = true;
  arr: any;
  status: any;

  findStatus(arr, id) {
    let filtArr = arr.filter((item) => item.id == id);
    this.status = filtArr[0].status;
  }

  constructor(
    private buildChart: BuildChartService,
    private cryptoApi: CryptoApiService,
    private route: ActivatedRoute,
    private growthServ: GrowthServiceService,
    private http: HttpClient
  ) {
    this.route.params.subscribe((res) => (this.routeSub = res));
  }

  ngOnInit(): void {
    this.cryptoApi.getSinglCoin(this.routeSub.id).subscribe((res) => {
      this.coin = res[1];
      this.arr = res[0];

      this.findStatus(res[2], this.routeSub.id);

      this.buildChart.buildChart(this.coin.id, this.arr);

      this.growth = this.growthServ.calcGrowth(
        this.arr[0].close,
        this.arr[360].close
      );
      this.growth = this.growthServ.calcGrowth(
        this.arr[0].close,
        this.arr[360].close
      );
      this.isLoading = false;
    });

    // this.cryptoApi
    //   .getCoins()
    //   .pipe(map((res) => res.filter((item) => item.id === this.routeSub.id)))
    //   .subscribe((res) => {
    //     this.coin = res[0];

    //     this.buildChart.buildChart(this.coin.id, this.coin.ohlc);
    //     let arr = this.coin.ohlc;
    //     this.growth = this.growthServ.calcGrowth(arr[0].close, arr[360].close);
    //     this.isLoading = false;
    //   });
  }
}

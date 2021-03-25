import { Component, OnInit } from '@angular/core';
import { CryptoApiService } from 'src/app/crypto-api.service';

@Component({
  selector: 'app-all-coins',
  templateUrl: './all-coins.component.html',
  styleUrls: ['./all-coins.component.scss'],
})
export class AllCoinsComponent implements OnInit {
  constructor(private cryptoApi: CryptoApiService) {}

  allCoins = <any>[];
  isLoading = true;

  ngOnInit(): void {
    this.cryptoApi
      .getCoins()
      .subscribe((res) => this.cryptoApi.coinsRes.next(res));
    this.cryptoApi.coinsRes.subscribe((res) => {
      this.allCoins = res;
      this.isLoading = false;
      console.log(this.allCoins);
    });
  }
}

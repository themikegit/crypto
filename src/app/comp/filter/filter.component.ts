import { Component, OnInit } from '@angular/core';
import { CryptoApiService } from 'src/app/crypto-api.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  constructor(private cryptoApi: CryptoApiService) {}

  // two-way binding. Listening toggler
  option = false;
  explodingLimit = 1_500_000_000;

  onSelect() {
    if (this.option) {
      this.cryptoApi
        .getCoins(undefined, this.explodingLimit)
        .subscribe((res) => this.cryptoApi.coinsRes.next(res));
    } else {
      this.cryptoApi
        .getCoins(undefined, 10)
        .subscribe((res) => this.cryptoApi.coinsRes.next(res));
    }
  }
}

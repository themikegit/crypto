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

  onSelect() {
    let volumeValue: number;
    if (this.option) {
      volumeValue = 1_500_000_000;
    } else {
      volumeValue = 10;
    }

    //How to omit function parametar? Using undefined now.
    this.cryptoApi
      .getCoins(undefined, volumeValue)
      .subscribe((res) => this.cryptoApi.coinsRes.next(res));
  }
}

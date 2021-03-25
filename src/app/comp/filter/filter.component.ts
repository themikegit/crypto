import { Component, OnInit } from '@angular/core';
import { CryptoApiService } from 'src/app/crypto-api.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(private cryptoApi: CryptoApiService) {}

  option = 'all';

  ngOnInit(): void {}
  onSelect() {
    this.cryptoApi
      .getCoins()
      .subscribe((res) => this.cryptoApi.coinsRes.next(res));
  }
}

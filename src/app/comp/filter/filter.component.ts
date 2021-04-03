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

    /**
     * @Comment
     * Function argument/parameter can't be ommited
     * Think about what exactly you are trying to achive here
     * 1. optional parameters always go at the end and can be marked with ? check line 39
     * 2. using undefined is not a good practice, if you want a "value" that actually is not an value use null
     */
    this.cryptoApi
      .getCoins(undefined, volumeValue)
      .subscribe((res) => this.cryptoApi.coinsRes.next(res));
  }
}


/**
 * testFunction(required, optional?) { ... }
 */
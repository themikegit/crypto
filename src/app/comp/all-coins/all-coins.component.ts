import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { CryptoApiService } from 'src/app/crypto-api.service';
import { SearchModelService } from 'src/app/search-model.service';

@Component({
  selector: 'app-all-coins',
  templateUrl: './all-coins.component.html',
  styleUrls: ['./all-coins.component.scss'],
})
export class AllCoinsComponent implements OnInit {
  constructor(
    private cryptoApi: CryptoApiService,
    private searchModel: SearchModelService
  ) {}

  allCoins = <any>[];
  isLoading = true;
  searchTerm: string;

  ngOnInit() {
    // record user search term
    this.searchModel.modelValue
      .pipe(debounceTime(1000))
      .subscribe((res) => (this.searchTerm = res));
    // initial load of all coins
    this.cryptoApi
      .getCoins()
      .subscribe((res) => this.cryptoApi.coinsRes.next(res));
    this.cryptoApi.coinsRes.subscribe((res) => {
      this.allCoins = res;
      this.isLoading = false;
    });
  }
}

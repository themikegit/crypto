import { Component, OnInit } from '@angular/core';
import { debounceTime, tap } from 'rxjs/operators';
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
  p: number = 1;

  getAllCoins() {
    // subscribe to API result and update subject with the result.

    this.cryptoApi.getCoins().subscribe((res) => {
      this.cryptoApi.coinsRes.next(res);
    });
  }

  setAllCoins() {
    this.cryptoApi.coinsRes.subscribe((res) => {
      this.allCoins = res;
      this.isLoading = false;
    });
  }

  provideFilterTerm() {
    // subscribe to search input value - used for filter pipe in template.
    this.searchModel.modelValue
      .pipe(tap(() => (this.isLoading = true)))
      .subscribe((res) => {
        this.searchTerm = res;
        this.isLoading = false;
      });
  }

  ngOnInit() {
    this.getAllCoins();
    this.provideFilterTerm();
    this.setAllCoins();
  }
}

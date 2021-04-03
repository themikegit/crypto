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

  /**
   * @Comment
   * It is a good practice to extract everything to separate methods and call
   * them inside ngOnInit. example check line 44
   * This way you achieve readability
   */

  ngOnInit() {
    // subscribe to API result and update subject with the result.
    this.cryptoApi
      .getCoins()
      .subscribe((res) => this.cryptoApi.coinsRes.next(res));
    this.cryptoApi.coinsRes.subscribe((res) => {
      this.allCoins = res;
      this.isLoading = false;
    });
    // subscribe to search input value - used for filter pipe in template.
    this.searchModel.modelValue.pipe(debounceTime(1000)).subscribe((res) => {
      this.searchTerm = res;
    });
  }
}


/**
 * ngOnInit() {
 *  this.getCoins();
 * }
 *
 *
 * getCoins() {
 *  this.cryptoApi.getCoins()...
 * }
 */
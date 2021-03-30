import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { CryptoApiService } from 'src/app/crypto-api.service';
import { SearchModelService } from 'src/app/search-model.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(
    private searchModel: SearchModelService,
    private cryptoApi: CryptoApiService
  ) {}

  searchCoins = new FormGroup({
    search: new FormControl(''),
  });

  filteredArr = ['initial'];

  onSearchChange() {
    //send info of filed search filed and hide hero text
    this.searchModel.modelValue.next(this.searchCoins.value.search);
    // filtering withAPI Calls
    // this.cryptoApi
    //   .getCoins()
    //   .pipe(
    //     debounceTime(2500),
    //     map((result: any) =>
    //       result.filter((res) =>
    //         res.name
    //           .toLowerCase()
    //           .includes(this.searchCoins.value.search.toLowerCase())
    //       )
    //     )
    //   )
    //   .subscribe((res) => {
    //     this.cryptoApi.coinsRes.next(res);
    //     this.filteredArr = res;
    //   });
  }
}

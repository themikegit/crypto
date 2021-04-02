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
  constructor(private searchModel: SearchModelService) {}

  searchCoins = new FormGroup({
    search: new FormControl(''),
  });

  onSearchChange() {
    this.searchModel.modelValue.next(this.searchCoins.value.search);
  }
}

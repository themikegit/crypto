import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  ngOnInit() {
    this.searchCoins.valueChanges.subscribe((res) => {
      this.searchModel.modelValue.next(res.search);
    });
  }
}

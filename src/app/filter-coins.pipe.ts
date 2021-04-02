import { Pipe, PipeTransform } from '@angular/core';
import { SearchModelService } from './search-model.service';

@Pipe({
  name: 'filterCoins',
})
export class FilterCoinsPipe implements PipeTransform {
  constructor(private serachServ: SearchModelService) {}
  transform(coins: any, searchTerm: string) {
    if (!coins || !searchTerm) {
      return coins;
    } else {
      let filteredCoins = coins.filter(
        (coin) =>
          coin.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
      // this.serachServ.isFilterResult.next(filteredCoins);

      return filteredCoins;
    }
  }
}

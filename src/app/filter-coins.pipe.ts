import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCoins',
})
export class FilterCoinsPipe implements PipeTransform {
  transform(coins: any, searchTerm: string) {
    if (!coins || !searchTerm) {
      return coins;
    }

    return coins.filter(
      (coin) => coin.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}

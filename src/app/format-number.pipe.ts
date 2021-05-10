import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber',
})
export class FormatNumberPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    if (value <= 999) {
      return value;
    } else if (value >= 1000 && value < 1000000) {
      let k = value / 1000;
      return Math.floor(k) + 'K';
    } else if (value >= 1000000 && value < 1000000000) {
      let k = value / 1000000;
      return Math.floor(k) + 'Mil';
    } else if (value >= 1000000000 && value < 1000000000000) {
      let k = value / 1000000000;
      return Math.floor(k) + 'Bil';
    } else if (value >= 1000000000000 && value < 1000000000000000) {
      let k = value / 1000000000000;
      return Math.floor(k) + 'Tri';
    }
  }
}

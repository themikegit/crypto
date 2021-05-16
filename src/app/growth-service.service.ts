import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GrowthServiceService {
  constructor() {}

  calcGrowth(first: number, last: number) {
    return ((last - first) / first) * 100;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CryptoApiService {
  coinsRes;
  constructor(private http: HttpClient) {
    this.coinsRes = new Subject();
  }

  getCoins(num = 50) {
    return this.http
      .get(`https://api.coinpaprika.com/v1/tickers`)
      .pipe(map((coins: any) => coins.filter((coin, index) => index < num)));
  }

  getCoinDetails(coin_id) {
    return this.http.get(`https://api.coinpaprika.com/v1/coins/${coin_id}`);
  }

  getCoinHistory(coin_id) {
    return this.http.get(`https://api.coinpaprika.com/v1/tickers/${coin_id}`);
  }
}

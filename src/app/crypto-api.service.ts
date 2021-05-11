import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { forkJoin, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CryptoApiService {
  coinsRes;
  oneCoin;

  constructor(private http: HttpClient) {
    this.coinsRes = new Subject();
    this.oneCoin = new Subject();
  }
  awsArr = [];
  generalData = [];

  createDateParam() {
    let dt = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
    return dt.toISOString();
  }

  getCoins() {
    let current = new Date().toISOString();
    return this.http.get('assets/api.json').pipe(
      tap((res: any) => (this.awsArr = res)),
      switchMap((res: any) => {
        return forkJoin(
          res.map((res1: any) => {
            return this.http.get(
              `https://api.coinpaprika.com/v1/ticker/${res1.id}`
            );
          })
        );
      }),
      tap((res: any) => {
        this.generalData = res;
      }),
      switchMap((res: any) => {
        return forkJoin(
          res.map((res1: any) => {
            return this.http.get(
              `https://api.coinpaprika.com/v1/coins/${
                res1.id
              }/ohlcv/historical?start=${this.createDateParam()}&end=${current}`
            );
          })
        );
      }),
      map((result) => {
        return result.map((item: Object, index) => ({
          ohlc: item,
          status: this.awsArr[index].status,
          symbol: this.generalData[index].symbol,
          name: this.generalData[index].name,
          volume: this.generalData[index].volume_24h_usd,
          id: this.generalData[index].id,
          price: this.generalData[index].price_usd,
          change: this.generalData[index].percent_change_24h,
          description: this.generalData[index].description,
        }));
      })
    );
  }

  // getCoinDetails(coin_id: string) {
  //   return this.http.get(`https://api.coinpaprika.com/v1/coins/${coin_id}`);
  // }

  // getTicker(coin_id: string) {
  //   return this.http.get(`https://api.coinpaprika.com/v1/tickers/${coin_id}`);
  // }

  // getCoinHistory(coin_id: string) {
  //   let current = new Date().toISOString();
  //   return this.http.get(
  //     `https://api.coinpaprika.com/v1/coins/${coin_id}/ohlcv/historical?start=${this.createDateParam()}&end=${current}`
  //   );
  // }
}

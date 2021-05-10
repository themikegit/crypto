import { Component, OnInit } from '@angular/core';
import { CryptoApiService } from 'src/app/crypto-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private cryptoApi: CryptoApiService) {}

  coins = [];
  ngOnInit(): void {

    /**
     * @Comment
     * in this case 6 is something we call a MAGIC NUMBER
     * for aanother person this can be hard to understand why you are using a 6
     * good practive is to define a constant or propert with verbose name: e.g.
     *
     * perPage = 6;
     *
     * or for whatever 6 is used..
     */
    this.cryptoApi.getCoins(6).subscribe((res) => {
      this.coins = res;
    });
  }
}

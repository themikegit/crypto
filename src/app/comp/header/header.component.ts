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
    this.cryptoApi.getCoins(6).subscribe((res) => {
      this.coins = res;
    });
  }
}

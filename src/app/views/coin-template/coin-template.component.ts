import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildChartService } from 'src/app/build-chart.service';
import { map, filter } from 'rxjs/operators';
import { CryptoApiService } from 'src/app/crypto-api.service';
import { GrowthServiceService } from 'src/app/growth-service.service';

@Component({
  selector: 'app-coin-template',
  templateUrl: './coin-template.component.html',
  styleUrls: ['./coin-template.component.scss'],
})
export class CoinTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BuildChartService } from 'src/app/build-chart.service';

@Component({
  selector: 'app-single-coin',
  templateUrl: './single-coin.component.html',
  styleUrls: ['./single-coin.component.scss'],
})
export class SingleCoinComponent implements OnInit {
  @Input() singleCoin: any;
  constructor(
    private buildChart: BuildChartService,
    private http: HttpClient
  ) {}
  chimpForm: FormGroup;
  growth;
  onSubmit() {
    console.log('hello');
    this.http.post(
      'https://gmail.us1.list-manage.com/subscribe/post',
      this.chimpForm.value
    );
  }
  ngOnInit(): void {
    let arr = this.singleCoin.ohlc;
    let first = arr[0].close;
    let last = arr[360].close;
    this.growth = ((last - first) / first) * 100;
  }

  ngAfterViewInit(): void {
    this.buildChart.buildChart(this.singleCoin.id, this.singleCoin.ohlc);
  }
}

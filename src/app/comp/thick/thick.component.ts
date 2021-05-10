import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thick',
  templateUrl: './thick.component.html',
  styleUrls: ['./thick.component.scss'],
})
export class ThickComponent implements OnInit {
  @Input() coinDetails;
  constructor() {}

  ngOnInit(): void {}
}

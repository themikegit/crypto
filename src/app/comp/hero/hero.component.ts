import { Component, OnInit } from '@angular/core';
import { SearchModelService } from 'src/app/search-model.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor(private searchModel: SearchModelService) {}

  isTouched;

  ngOnInit(): void {
    this.searchModel.modelValue.subscribe((res) => {
      this.isTouched = res;
    });

    const options = {
      strings: ['Exchange Feauters', 'Market CAP', 'Volume Stats'],
      typeSpeed: 80,
      backSpeed: 40,
      showCursor: true,
      cursorChar: '',
      loop: true,
    };

    const typed = new Typed('.typed-element', options);
  }
}

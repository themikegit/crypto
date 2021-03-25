import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
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

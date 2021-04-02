import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[appSpecialHover]',
})
export class SpecialHoverDirective implements OnInit {
  constructor(private eleRe: ElementRef, private rendered: Renderer2) {}

  ngOnInit() {}

  //@ViewChild('hideView') hideViewRef: ElementRef;

  @HostListener('mouseenter') hoverin() {
    this.rendered.setStyle(this.eleRe.nativeElement, 'opacity', '1');
  }
  @HostListener('mouseleave') hoverout() {
    this.rendered.setStyle(this.eleRe.nativeElement, 'opacity', '0.5');
  }
}

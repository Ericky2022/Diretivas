import { Directive, HostListener, ElementRef, Renderer2, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit{

  @HostListener('mouseenter') onMouseOver(){
    // this.renderer.setStyle(this.eletementRef, 'backgroundcolor', 'yellow');
    this.backgroundColor = 'yellow'
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this.renderer.setStyle(this.eletementRef, 'backgroundcolor', 'yellow');
    this.backgroundColor = 'white'
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}

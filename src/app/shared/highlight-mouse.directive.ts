import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this.renderer.setStyle(this.eletementRef, 'backgroundcolor', 'yellow');
    this.backgroundColor = 'yellow'
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this.renderer.setStyle(this.eletementRef, 'backgroundcolor', 'yellow');
    this.backgroundColor = 'white'
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  constructor(
    // private eletementRef: ElementRef,
    // private renderer: Renderer2
    ) { }


}

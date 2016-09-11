import {Directive, ElementRef, Renderer, Input} from '@angular/core';

@Directive({selector : '[layout],[layout-align]'})
export class LayoutDirective {
  @Input() set layout(type: string) {
    this.renderer.setElementClass(this.el.nativeElement, `layout-${type}`, true);
  }

  @Input('layout-align') set layoutAlign(type: string) {
    this.renderer.setElementClass(this.el.nativeElement,
                                  `layout-align-${type.replace(' ', '-')}`, true);
  }

  constructor(private el: ElementRef, private renderer: Renderer) {}
}

import { Directive, ElementRef, Renderer2 } from '@angular/core';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[data-cy]'
})
export class DataCyDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {

      renderer.removeAttribute(el.nativeElement, 'data-cy');

  }
}
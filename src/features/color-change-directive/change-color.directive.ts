import { Directive, ElementRef, Renderer2, effect, input } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  appChangeColor = input('blueviolet');

  constructor(readonly el: ElementRef, readonly renderer: Renderer2) {
    effect(() => {
      // (el.nativeElement as HTMLElement).style.color = this.appChangeColor();
      renderer.setStyle(el.nativeElement, 'color', this.appChangeColor());
    });
  }

}

import { Directive, ElementRef, effect, input } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  appChangeColor = input('red');

  constructor(readonly el: ElementRef) {
    effect(() => {
      (el.nativeElement as HTMLElement).style.color = this.appChangeColor();
    });
  }

}

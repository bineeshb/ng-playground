import { Directive, inject } from '@angular/core';
import { AnimalService } from '../services/animal.service';

@Directive({
  selector: '[appChild]',
  providers: [
    { provide: AnimalService, useValue: { value: 'giraffe (child directive)' } }
  ]
})
export class ChildDirective {
  animal = inject(AnimalService, { host: true, optional: true });

  constructor() {
    console.log(this.animal?.value);
  }
}

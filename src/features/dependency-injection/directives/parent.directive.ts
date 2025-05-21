import { Directive, inject } from '@angular/core';
import { AnimalService } from '../services/animal.service';

@Directive({
  selector: '[appParent]',
  providers: [
    { provide: AnimalService, useValue: { value: 'elephant (parent directive)' } }
  ]
})
export class ParentDirective {
  animal = inject(AnimalService, { host: true, optional: true });

  constructor() {
    console.log(this.animal?.value);
  }
}

import { Component, inject } from '@angular/core';
import { FlowerService } from '../services/flower.service';
import { AnimalService } from '../services/animal.service';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-child',
  imports: [ContentComponent],
  templateUrl: './child.component.html',
  styles: `
    :host {
      display: block;
      padding: 5px 10px;
      border: 1px solid green;
    }
  `,
  providers: [
    { provide: FlowerService, useValue: { value: 'sunflower (child providers)' } }
  ],
  viewProviders: [
    { provide: AnimalService, useValue: { value: 'dog (child viewProviders)' } }
  ]
})
export class ChildComponent {
  flower = inject(FlowerService);
  // flower = inject(FlowerService, { skipSelf: true });
  // flower = inject(FlowerService, { host: true });
  // flower = inject(FlowerService, { skipSelf: true, host: true, optional: true });

  animal = inject(AnimalService);
  // animal = inject(AnimalService, { skipSelf: true });
  // animal = inject(AnimalService, { host: true });
  // animal = inject(AnimalService, { skipSelf: true, host: true, optional: true });
}

import { Component, inject, input } from '@angular/core';
import { FlowerService } from '../services/flower.service';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styles: `
    :host {
      display: block;
      padding: 5px 10px;
      border: 1px solid blue;
    }
  `
})
export class ContentComponent {
  type = input('Direct Child');

  flower = inject(FlowerService);
  animal = inject(AnimalService);
}

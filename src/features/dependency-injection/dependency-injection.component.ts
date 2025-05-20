import { Component, inject } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FlowerService } from './flower.service';
import { AnimalService } from './animal.service';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-dependency-injection',
  imports: [ChildComponent, ContentComponent],
  templateUrl: './dependency-injection.component.html',
  styles: `
    :host {
      display: block;
      padding: 5px 10px;
      border: 1px solid red;
    }
  `,
  // viewProviders: [
  //   { provide: AnimalService, useValue: { value: 'tiger (parent viewProviders)' } }
  // ]
})
export class DependencyInjectionComponent {
  flower = inject(FlowerService);
  animal = inject(AnimalService);
}

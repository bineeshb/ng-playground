import { Component, inject } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FlowerService } from './services/flower.service';
import { AnimalService } from './services/animal.service';
import { ContentComponent } from './content/content.component';
import { ChildDirective } from './directives/child.directive';
import { ParentDirective } from './directives/parent.directive';

@Component({
  selector: 'app-dependency-injection',
  imports: [ChildComponent, ContentComponent, ChildDirective, ParentDirective],
  templateUrl: './dependency-injection.component.html',
  styles: `
    :host {
      display: block;
      padding: 5px 10px;
      border: 1px solid red;
    }
  `,
  // providers: [
  //   { provide: AnimalService, useValue: { value: 'tiger (parent providers)' } }
  // ],
  // viewProviders: [
  //   { provide: AnimalService, useValue: { value: 'tiger (parent viewProviders)' } }
  // ]
})
export class DependencyInjectionComponent {
  flower = inject(FlowerService);
  animal = inject(AnimalService);
}

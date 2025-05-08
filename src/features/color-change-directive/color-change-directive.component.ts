import { Component, signal } from '@angular/core';
import { ChangeColorDirective } from './change-color.directive';

@Component({
  selector: 'app-color-change-directive',
  imports: [ChangeColorDirective],
  templateUrl: './color-change-directive.component.html',
  styleUrl: './color-change-directive.component.scss'
})
export class ColorChangeDirectiveComponent {
  colors = ['red', 'green', 'blue', 'grey', 'black', 'pink'];
  pColor = signal('blueviolet');

  updateColor(color: string): void {
    this.pColor.set(color);
  }
}

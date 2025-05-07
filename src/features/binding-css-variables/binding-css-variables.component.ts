import { Component, HostBinding, signal } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-binding-css-variables',
  imports: [ChildComponent],
  templateUrl: './binding-css-variables.component.html',
  styleUrl: './binding-css-variables.component.scss'
})
export class BindingCssVariablesComponent {
  colors = ['red', 'green', 'blue', 'grey', 'black'];
  hColor = signal(this.colors[0]);
  pColor = signal<string | null>(null);
  
  @HostBinding('style.--color')
  get hostColor(): string {
    return this.hColor();
  }

  updateHostColor(color: string): void {
    this.hColor.set(color);
  }

  updateParaColor(color: string): void {
    this.pColor.set(color);
  }
}

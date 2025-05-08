import { Component, HostBinding, Renderer2, effect, inject, signal } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-binding-css-variables',
  imports: [ChildComponent],
  templateUrl: './binding-css-variables.component.html',
  styleUrl: './binding-css-variables.component.scss'
})
export class BindingCssVariablesComponent {
  colors = ['red', 'green', 'blue', 'grey', 'black', 'pink'];
  hColor = signal('blueviolet');
  pColor = signal<string | null>(null);
  document = inject(DOCUMENT);
  renderer = inject(Renderer2);
  
  @HostBinding('style.--test-color')
  get hostColor(): string {
    return this.hColor();
  }

  constructor() {
    effect(() => {
      // this.document.documentElement.style.setProperty('--test-color', this.hColor());
      this.renderer.setProperty(this.document.documentElement, 'style', `--test-color: ${this.hColor()};`);
    });
  }

  updateHostColor(color: string): void {
    this.hColor.set(color);
  }

  updateParaColor(color: string): void {
    this.pColor.set(color);
  }
}

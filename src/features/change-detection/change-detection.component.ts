import { Component } from '@angular/core';
import { DefaultComponent } from './default/default.component';
import { OnpushComponent } from './onpush/onpush.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-change-detection',
  imports: [DefaultComponent, OnpushComponent],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss'
})
export class ChangeDetectionComponent {
  items: string[] = [];
  bsItems: BehaviorSubject<string[]> = new BehaviorSubject([] as string[]);
  showBSSubList = true;
  showBSAsyncList = false;
  
  constructor() {
    this.initData();
  }

  initData(): void {
    this.items = Array.from({ length: 2 }).map((_, i) => `Item ${i + 1}`);
    this.bsItems = new BehaviorSubject(Array.from({ length: 2 }).map((_, i) => `BSItem ${i + 1}`));
  }

  pushItem(): void {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  addItem(): void {
    this.items = [...this.items, `Item ${this.items.length + 1}`];
  }

  addBSItem(): void {
    this.bsItems.next([...this.bsItems.value, `BSItem ${this.bsItems.value.length + 1}`]);
  }

  toggleBSSubList(): void {
    this.showBSSubList = !this.showBSSubList;
  }

  toggleBSAsyncList(): void {
    this.showBSAsyncList = !this.showBSAsyncList;
  }
}

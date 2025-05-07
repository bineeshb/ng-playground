import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject, input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-onpush',
  imports: [AsyncPipe],
  templateUrl: './onpush.component.html',
  styleUrl: './onpush.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushComponent implements OnInit {
  cd = inject(ChangeDetectorRef);
  showBSSubList = input(false);
  showBSAsyncList = input(false);
  items = input<string[]>([]);
  bsItems = input(new BehaviorSubject<string[]>([]));
  bsItemsList: string[] = [];

  ngOnInit(): void {
    this.bsItems().subscribe(list => this.bsItemsList = list);
  }

  refresh(): void {
    this.cd.detectChanges();
  }
}

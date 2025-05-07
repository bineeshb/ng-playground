import { AsyncPipe } from '@angular/common';
import { Component, OnInit, input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-default',
  imports: [AsyncPipe],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent implements OnInit {
  showBSSubList = input(false);
  showBSAsyncList = input(false);
  items = input<string[]>([]);
  bsItems = input(new BehaviorSubject<string[]>([]));
  bsItemsList: string[] = [];

  ngOnInit(): void {
    this.bsItems().subscribe(list => this.bsItemsList = list);
  }
}

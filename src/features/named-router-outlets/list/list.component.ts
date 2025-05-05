import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  list = Array.from({ length: 5 }).map((_, i) => ({ id: i + 1, label: `Item ${i + 1}` }))
}

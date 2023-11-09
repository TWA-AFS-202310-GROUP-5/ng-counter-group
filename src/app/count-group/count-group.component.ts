import { Component } from '@angular/core';

@Component({
  selector: 'app-count-group',
  templateUrl: './count-group.component.html',
  styleUrls: ['./count-group.component.css']
})
export class CountGroupComponent {
  counters: {num: number}[] = [
    {num: 1},
    {num: 2},
    {num: 3},
    {num: 4}
  ]

}

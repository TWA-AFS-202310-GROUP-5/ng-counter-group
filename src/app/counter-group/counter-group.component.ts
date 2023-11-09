import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {
  
  sum = 0 
  counters : {num: number}[] = [
    {num:1},
    {num:2},
    {num:3},
  ]

  createCounter(){
    this.counters.push({num: 1})
    this.sum++
  }
  
}

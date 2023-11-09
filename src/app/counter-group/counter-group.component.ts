import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {
  
  counters : {num: number}[] = [{num: 1}, {num:2}]

  createCounter(){
    this.counters.push({num: 0})
  }

  get sum(){
    return this.counters.reduce(
      (result, current) => result + current.num, 0)
  }
  
}

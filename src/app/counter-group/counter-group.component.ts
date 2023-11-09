import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {
  counters: { num: number }[] = []

  onCreateCounter() {
    this.counters.push({ num: 0 })
  }

  onResetCounters() {
    this.counters.map(counter => counter.num = 0)
  }

  onRemoveCounter(index: number) {
    this.counters.splice(index, 1);
  }

  get sum() {
    return this.counters.reduce(
      (result, current) => result + current.num, 0
    )
  }
}

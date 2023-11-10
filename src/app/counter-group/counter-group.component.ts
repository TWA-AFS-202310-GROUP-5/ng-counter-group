import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css'],
})
export class CounterGroupComponent {
  counters: { num: number }[] = [{ num: 1 }, { num: 2 }, { num: 3 }];

  get sum() {
    return this.counters.reduce((result, current) => result + current.num, 0);
  }
  onCreateCounter() {
    this.counters.push({ num: 0 });
  }
  onDeleteCounter(counter: any) {
    var index = this.counters.findIndex((elt) => elt === counter);
    if (index != -1) {
      this.counters.splice(index, 1);
    }
  }

  onResetAll() {
    this.counters.map((counter) => (counter.num = 0));
  }
}

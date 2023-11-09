import { Component } from '@angular/core';

@Component({
  selector: 'app-count-group',
  templateUrl: './count-group.component.html',
  styleUrls: ['./count-group.component.css']
})
export class CountGroupComponent {
  counters: {num: number}[] = [
    {num: 0},
  ]

  get sum() {
    return this.counters.reduce((result, current) => result + current.num,0)
  }

  onAdd() {
    this.counters.push({num:0})
  }

  onReset() {
    this.counters.map(n => n.num =0);
  }

  onDelete(index:number) {
      this.counters.splice(index,1)
      
  }

  onResetOne(index:number) {
    this.counters[index] = {num:0}
  }
}

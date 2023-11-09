import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() number = 0;
  @Input() index = 0;

  @Output() change = new EventEmitter();
  @Output() changeIndex = new EventEmitter();
  @Output() resetIndex = new EventEmitter();



  onIncrease() {
    this.number++;
    this.change.emit(this.number);
  }
  onDecrease() {
    this.number--;
    this.change.emit(this.number);

  }

  onDeleteCounter() {
    this.changeIndex.emit(this.index);
  }

  onResetCounter() {
    this.resetIndex.emit(this.index);
  }


}



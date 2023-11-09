import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() number = 0
  @Output() change = new EventEmitter()

  onIncrease() {
    this.number++
    this.emitChangeNum()
  }

  onDecrease() {
    this.number--
    this.emitChangeNum()
  }

  onReset() {
    this.number = 0
    this.emitChangeNum()
  }

  emitChangeNum() {
    this.change.emit(this.number)
  }
}

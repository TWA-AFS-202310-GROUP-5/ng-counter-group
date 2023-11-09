import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {

  @Input() number = 0;
  @Output() numberChange = new EventEmitter<number>();
  
  onIncrease(){
    this.number++;
    this.numberChange.emit(this.number);
  }
  onDecrease() {
    this.number--;
    this.numberChange.emit(this.number);
  }
}

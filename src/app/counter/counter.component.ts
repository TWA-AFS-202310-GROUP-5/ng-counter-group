import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  number =0 

  onIncrease(){
    this.number++
  }

  onDecrease(){
    this.number--
  }

  reset(){
    this.number = 0
  }

  get isShowIncreaseButton(){
      return this.number <= 10
  }

  get isShowDecreaseButton(){
    return this.number > -1
  }

}

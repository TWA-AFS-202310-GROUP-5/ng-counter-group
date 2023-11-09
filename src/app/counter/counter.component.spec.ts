import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase number when call onIncrease', () => {
    //given
    component.number = 2
    //when
    component.onIncrease()
    //then
    expect(component.number).toEqual(3)
  });

  it('should decrease number when call onDecrease', () => {
    //given
    component.number = 2
    //when
    component.onDecrease()
    //then
    expect(component.number).toEqual(1)
  });

  it('should isShowIncreaseButton be true when number <= 10', () => {
    //given
    component.number = 2
    //then
    expect(component.isShowIncreaseButton).toEqual(true)
  });

  it('should isShowDecreaseButton be false when number > 10', () => {
    //given
    component.number = 12
    //then
    expect(component.isShowDecreaseButton).toEqual(true)
  });



  /*
  it('should increase number when click increase button', () => {
    //given
    component.number = 2
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click')
    fixture.detectChanges()
    //when
    const text = fixture.debugElement.query(By.css('span')).nativeElement.textContent
    //then
    expect(text).toEqual(" number : 3 ")
  });
  */

  /*
  it('should rest number to 0 when click reset button', () => {
    //given
    component.number = 7
    fixture.debugElement.queryAll(By.css('button'))[2].triggerEventHandler('click')
    fixture.detectChanges()
    //when
    const text = fixture.debugElement.query(By.css('span')).nativeElement.textContent
    //then
    expect(text).toEqual(" number : 0 ")
  });
  */
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent]
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new counter when call createCounter', () => {
    //given
    component.counters = []
    //when
    component.createCounter()
    //then
    expect(component.counters).toEqual([{num: 0}])
  });

  it('should reset all counters when call onReset', () => {
    //given
    component.counters = [{num: 0}, {num: 1}, {num: 3}]
    //when
    component.onReset()
    //then
    expect(component.counters).toEqual([{num: 0}, {num: 0}, {num: 0}])
  });

  it('should remove a specific counter when call onClickRemove', () => {
    //given
    component.counters = [{num: 0}, {num: 1}, {num: 3}]
    //when
    component.onClickRemove(1)
    //then
    expect(component.counters).toEqual([{num: 0}, {num: 3}])
  });

  it('should sum be 10 when given counters number sum equal to 10', () => {
    //given
    component.counters = [{num: 6}, {num: 1}, {num: 3}]
    //then
    expect(component.sum).toEqual(10)
  });

});

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

  it('should get sum of counters when sum', () => {
    component.counters = [{num: 1}, {num: 2}, {num: -1}];

    expect(component.sum).toBe(2);
  });

  it('should get 0 of counters when sum given counters is empty', () => {
    component.counters = [];

    expect(component.sum).toBe(0);
  });

  it('should change all counters to 0 when onResetCounter', () => {
    component.counters = [{num: 1}, {num: 2}, {num: -1}];

    component.onResetCounters()

    expect(component.counters[0].num).toBe(0);
    expect(component.counters[1].num).toBe(0);
    expect(component.counters[2].num).toBe(0);
    expect(component.sum).toBe(0);
  });

  it('should remove counter when onRemoveCounter', () => {
    component.counters = [{num: 1}, {num: 2}, {num: -1}];

    component.onRemoveCounter(1)

    expect(component.counters.length).toBe(2);
    expect(component.counters[0].num).toBe(1);
    expect(component.counters[1].num).toBe(-1);
    expect(component.sum).toBe(0);
  });

  it('should create counter when onCreateCounter', () => {
    component.counters = [];

    component.onCreateCounter()

    expect(component.counters.length).toBe(1);
    expect(component.counters[0].num).toBe(0);
    expect(component.sum).toBe(0);
  });

});

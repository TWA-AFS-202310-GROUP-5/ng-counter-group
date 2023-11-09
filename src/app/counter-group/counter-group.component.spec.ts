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

});

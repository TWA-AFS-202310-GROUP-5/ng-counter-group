import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
import { CounterComponent } from '../counter/counter.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent, CounterComponent]
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the sum of every counter number', () => {
    component.counters = [
      { num: 2 },
      { num: 2 },
      { num: 3 },
    ]
    expect(component.sum).toEqual(7)
  })

  it('should remove the corresponding counter and get correct sum value when call remove', () => {
    component.counters = [
      { num: 1 },
      { num: 2 },
      { num: 3 },
    ]
    component.remove(0)
    expect(component.sum).toEqual(5)
  });

  it('should get 0 sum value when call reset', () => {
    component.counters = [
      { num: 1 },
      { num: 2 },
      { num: 3 },
    ]
    component.reset()
    expect(component.sum).toEqual(0)
  })

  it('should create counter when call onAdd', () => {
    component.counters = [
      { num: 1 },
      { num: 2 },
      { num: 3 },
    ]
    component.onAdd()
    expect(component.counters.length).toEqual(4)
    expect(component.sum).toEqual(6)
  })
});

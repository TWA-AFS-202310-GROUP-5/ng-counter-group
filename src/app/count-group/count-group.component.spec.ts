import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountGroupComponent } from './count-group.component';
import { CounterComponent } from '../counter/counter.component';

describe('CountGroupComponent', () => {
  let component: CountGroupComponent;
  let fixture: ComponentFixture<CountGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountGroupComponent, CounterComponent]
    });
    fixture = TestBed.createComponent(CountGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get sum of counter', ()=>{
      component.counters.push({num:1});
      component.counters.push({num:2});
      expect(component.sum).toBe(3)
  });

  it('should reset counter all number to 0', () => {
    component.counters.push({num:1});
    component.counters.push({num:2});

    component.onReset();
    expect(component.counters[0].num).toBe(0)
    expect(component.counters[1].num).toBe(0)

  });

  it('should delete one element by index', () => {
    component.counters.push({num:1});
    component.counters.push({num:2});

    component.onDelete(0);

    expect(component.counters.length).toBe(2)
    expect(component.counters[0].num).toBe(1)
  });

  it("should reset one element to 0 by index", () => {
    component.counters.push({num:1});
    component.counters.push({num:2});

    component.onResetOne(1);

    expect(component.counters[1].num).toBe(0);

  })
});

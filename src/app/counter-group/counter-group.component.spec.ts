import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CounterComponent } from '../counter/counter.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent, CounterComponent],
      imports: [
        MatIconModule,
        MatButtonModule,
        MatDividerModule
      ],
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.counters = [
      {num: 1},
      {num: 2},
      {num: 3}
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should add new counter when call onCreateCounter", ()=>{
    let originLength = component.counters.length

    component.onCreateCounter();

    expect(component.counters.length).toBe(originLength + 1);
  })
  it("should remove a counter when call onDeleteCounter", ()=>{
    let counter = {num: 4};
    component.counters.push(counter)
    let originLength = component.counters.length

    component.onDeleteCounter(counter);

    expect(component.counters.length).toBe(originLength - 1);
    expect(component.counters.findIndex(c => c.num == 4)).toBe(-1);
  })
  it("should update sum when change counter's number", ()=>{
    let originSum = component.sum;

    component.counters[0].num += 10;

    expect(component.sum).toBe(originSum + 10);
  })

  it("should reset all counters when call onResetAll",()=>{
    component.onResetAll();

    expect(component.counters.every(c => c.num == 0)).toBeTrue();
  })
});

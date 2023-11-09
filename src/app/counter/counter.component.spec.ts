import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

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

  it('should add 1 when call OnIncrease', () => {
    component.number = 2;
    component.OnIncrease()
    expect(component.number).toBe(3);
  });

  it('should subtract 1 when call DeIncrease', () => {
    component.number = 2;
    component.OnDecrease();
    expect(component.number).toBe(1);
  });
});

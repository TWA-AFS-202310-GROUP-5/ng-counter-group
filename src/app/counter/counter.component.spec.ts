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
    component.number = 2;

    component.onIncrease();

    expect(component.number).toBe(3);
  });

  it('should increase number when call onDecrease', () => {
    component.number = 2;

    component.onDecrease();

    expect(component.number).toBe(1);
  });

  it('should increase number when click increase button', () => {
    component.number = 2

    fixture.debugElement.query(By.css('button')).triggerEventHandler('click')
    fixture.detectChanges()

    const text = fixture.debugElement.query(By.css('span')).nativeElement.textContent

    expect(text).toEqual('number: 3')
  });

});

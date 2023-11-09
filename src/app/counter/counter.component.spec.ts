import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
      imports: [
        MatIconModule,
        MatButtonModule,
        MatDividerModule
      ],
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase number when call onIncrease', ()=>{
    component.number = 2;

    component.onIncrease();

    expect(component.number).toBe(3);
  })

  it('should decrease number when call onDecrease', ()=>{
    component.number = 2;

    component.onDecrease();

    expect(component.number).toBe(1);
  })

  it("should reset num to 0 when call reset", ()=>{
    component.number = 2;
    component.onReset();
    expect(component.number).toBe(0);
  })
});

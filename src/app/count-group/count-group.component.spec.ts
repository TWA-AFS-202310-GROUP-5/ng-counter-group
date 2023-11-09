import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountGroupComponent } from './count-group.component';

describe('CountGroupComponent', () => {
  let component: CountGroupComponent;
  let fixture: ComponentFixture<CountGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountGroupComponent]
    });
    fixture = TestBed.createComponent(CountGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

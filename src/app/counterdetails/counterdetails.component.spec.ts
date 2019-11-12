import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterdetailsComponent } from './counterdetails.component';

describe('CounterdetailsComponent', () => {
  let component: CounterdetailsComponent;
  let fixture: ComponentFixture<CounterdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

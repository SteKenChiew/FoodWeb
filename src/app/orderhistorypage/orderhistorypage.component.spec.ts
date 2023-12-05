import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderhistorypageComponent } from './orderhistorypage.component';

describe('OrderhistorypageComponent', () => {
  let component: OrderhistorypageComponent;
  let fixture: ComponentFixture<OrderhistorypageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderhistorypageComponent]
    });
    fixture = TestBed.createComponent(OrderhistorypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

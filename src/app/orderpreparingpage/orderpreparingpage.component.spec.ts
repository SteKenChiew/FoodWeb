import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpreparingpageComponent } from './orderpreparingpage.component';

describe('OrderpreparingpageComponent', () => {
  let component: OrderpreparingpageComponent;
  let fixture: ComponentFixture<OrderpreparingpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderpreparingpageComponent]
    });
    fixture = TestBed.createComponent(OrderpreparingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantregisterComponent } from './merchantregister.component';

describe('MerchantregisterComponent', () => {
  let component: MerchantregisterComponent;
  let fixture: ComponentFixture<MerchantregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantregisterComponent]
    });
    fixture = TestBed.createComponent(MerchantregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

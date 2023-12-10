import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantadditemComponent } from './merchantadditem.component';

describe('MerchantadditemComponent', () => {
  let component: MerchantadditemComponent;
  let fixture: ComponentFixture<MerchantadditemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantadditemComponent]
    });
    fixture = TestBed.createComponent(MerchantadditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

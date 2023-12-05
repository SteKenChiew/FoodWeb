import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantmainComponent } from './merchantmain.component';

describe('MerchantmainComponent', () => {
  let component: MerchantmainComponent;
  let fixture: ComponentFixture<MerchantmainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantmainComponent]
    });
    fixture = TestBed.createComponent(MerchantmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantmainpageComponent } from './merchantmainpage.component';

describe('MerchantmainpageComponent', () => {
  let component: MerchantmainpageComponent;
  let fixture: ComponentFixture<MerchantmainpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantmainpageComponent]
    });
    fixture = TestBed.createComponent(MerchantmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

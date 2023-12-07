import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantsignupComponent } from './merchantsignup.component';

describe('MerchantsignupComponent', () => {
  let component: MerchantsignupComponent;
  let fixture: ComponentFixture<MerchantsignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantsignupComponent]
    });
    fixture = TestBed.createComponent(MerchantsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

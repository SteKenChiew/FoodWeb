import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchanteditmenuComponent } from './merchanteditmenu.component';

describe('MerchanteditmenuComponent', () => {
  let component: MerchanteditmenuComponent;
  let fixture: ComponentFixture<MerchanteditmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchanteditmenuComponent]
    });
    fixture = TestBed.createComponent(MerchanteditmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusactiveorderComponent } from './cusactiveorder.component';

describe('CusactiveorderComponent', () => {
  let component: CusactiveorderComponent;
  let fixture: ComponentFixture<CusactiveorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CusactiveorderComponent]
    });
    fixture = TestBed.createComponent(CusactiveorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

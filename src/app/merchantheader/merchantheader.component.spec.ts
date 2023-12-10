import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantheaderComponent } from './merchantheader.component';

describe('MerchantheaderComponent', () => {
  let component: MerchantheaderComponent;
  let fixture: ComponentFixture<MerchantheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantheaderComponent]
    });
    fixture = TestBed.createComponent(MerchantheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

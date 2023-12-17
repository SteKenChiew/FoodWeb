import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusorderhistoryComponent } from './cusorderhistory.component';

describe('CusorderhistoryComponent', () => {
  let component: CusorderhistoryComponent;
  let fixture: ComponentFixture<CusorderhistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CusorderhistoryComponent]
    });
    fixture = TestBed.createComponent(CusorderhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

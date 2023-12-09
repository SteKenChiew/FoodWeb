import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminresListComponent } from './adminres-list.component';

describe('AdminresListComponent', () => {
  let component: AdminresListComponent;
  let fixture: ComponentFixture<AdminresListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminresListComponent]
    });
    fixture = TestBed.createComponent(AdminresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

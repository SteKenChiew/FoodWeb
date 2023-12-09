import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincusListComponent } from './admincus-list.component';

describe('AdmincusListComponent', () => {
  let component: AdmincusListComponent;
  let fixture: ComponentFixture<AdmincusListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmincusListComponent]
    });
    fixture = TestBed.createComponent(AdmincusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

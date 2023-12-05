import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyorderpageComponent } from './readyorderpage.component';

describe('ReadyorderpageComponent', () => {
  let component: ReadyorderpageComponent;
  let fixture: ComponentFixture<ReadyorderpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadyorderpageComponent]
    });
    fixture = TestBed.createComponent(ReadyorderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

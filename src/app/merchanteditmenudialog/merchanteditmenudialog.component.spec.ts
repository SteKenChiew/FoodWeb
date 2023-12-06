import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchanteditmenudialogComponent } from './merchanteditmenudialog.component';

describe('MerchanteditmenudialogComponent', () => {
  let component: MerchanteditmenudialogComponent;
  let fixture: ComponentFixture<MerchanteditmenudialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchanteditmenudialogComponent]
    });
    fixture = TestBed.createComponent(MerchanteditmenudialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

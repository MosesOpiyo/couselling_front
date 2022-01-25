import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorsOptionComponent } from './counsellors-option.component';

describe('CounsellorsOptionComponent', () => {
  let component: CounsellorsOptionComponent;
  let fixture: ComponentFixture<CounsellorsOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounsellorsOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorsOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

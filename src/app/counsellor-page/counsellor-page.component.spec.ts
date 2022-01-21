import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorPageComponent } from './counsellor-page.component';

describe('CounsellorPageComponent', () => {
  let component: CounsellorPageComponent;
  let fixture: ComponentFixture<CounsellorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounsellorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

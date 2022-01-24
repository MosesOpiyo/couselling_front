import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorGroupsComponent } from './counsellor-groups.component';

describe('CounsellorGroupsComponent', () => {
  let component: CounsellorGroupsComponent;
  let fixture: ComponentFixture<CounsellorGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounsellorGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

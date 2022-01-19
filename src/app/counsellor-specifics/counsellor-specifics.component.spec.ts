import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorSpecificsComponent } from './counsellor-specifics.component';

describe('CounsellorSpecificsComponent', () => {
  let component: CounsellorSpecificsComponent;
  let fixture: ComponentFixture<CounsellorSpecificsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounsellorSpecificsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorSpecificsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

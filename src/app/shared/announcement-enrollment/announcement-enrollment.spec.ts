import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementEnrollment } from './announcement-enrollment';

describe('AnnouncementEnrollment', () => {
  let component: AnnouncementEnrollment;
  let fixture: ComponentFixture<AnnouncementEnrollment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncementEnrollment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementEnrollment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

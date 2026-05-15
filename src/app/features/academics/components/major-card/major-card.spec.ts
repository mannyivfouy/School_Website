import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorCard } from './major-card';

describe('MajorCard', () => {
  let component: MajorCard;
  let fixture: ComponentFixture<MajorCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MajorCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajorCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

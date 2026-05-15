import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorModal } from './major-modal';

describe('MajorModal', () => {
  let component: MajorModal;
  let fixture: ComponentFixture<MajorModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MajorModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajorModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

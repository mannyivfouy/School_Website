import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChooseSetec } from './why-choose-setec';

describe('WhyChooseSetec', () => {
  let component: WhyChooseSetec;
  let fixture: ComponentFixture<WhyChooseSetec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyChooseSetec]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyChooseSetec);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

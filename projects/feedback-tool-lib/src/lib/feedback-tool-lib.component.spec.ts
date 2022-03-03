import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackToolLibComponent } from './feedback-tool-lib.component';

describe('FeedbackToolLibComponent', () => {
  let component: FeedbackToolLibComponent;
  let fixture: ComponentFixture<FeedbackToolLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackToolLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackToolLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

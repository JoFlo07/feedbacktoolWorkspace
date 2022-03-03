import { TestBed } from '@angular/core/testing';

import { FeedbackToolLibService } from './feedback-tool-lib.service';

describe('FeedbackToolLibService', () => {
  let service: FeedbackToolLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackToolLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

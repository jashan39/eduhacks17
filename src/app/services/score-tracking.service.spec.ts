import { TestBed, inject } from '@angular/core/testing';

import { ScoreTrackingService } from './score-tracking.service';

describe('ScoreTrackingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreTrackingService]
    });
  });

  it('should be created', inject([ScoreTrackingService], (service: ScoreTrackingService) => {
    expect(service).toBeTruthy();
  }));
});

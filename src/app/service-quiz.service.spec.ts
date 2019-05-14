import { TestBed } from '@angular/core/testing';

import { ServiceQuizService } from './service-quiz.service';

describe('ServiceQuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceQuizService = TestBed.get(ServiceQuizService);
    expect(service).toBeTruthy();
  });
});

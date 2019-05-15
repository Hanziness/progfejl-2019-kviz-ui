import { TestBed } from '@angular/core/testing';

import { ActivateVisitorService } from './activate-visitor.service';

describe('ActivateVisitorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivateVisitorService = TestBed.get(ActivateVisitorService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ActivateUserService } from './activate-user.service';

describe('ActivateUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivateUserService = TestBed.get(ActivateUserService);
    expect(service).toBeTruthy();
  });
});

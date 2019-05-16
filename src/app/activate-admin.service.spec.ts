import { TestBed } from '@angular/core/testing';

import { ActivateAdminService } from './activate-admin.service';

describe('ActivateAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivateAdminService = TestBed.get(ActivateAdminService);
    expect(service).toBeTruthy();
  });
});

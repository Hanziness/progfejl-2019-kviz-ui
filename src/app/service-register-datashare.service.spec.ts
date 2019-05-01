import { TestBed } from '@angular/core/testing';

import { ServiceRegisterDatashareService } from './service-register-datashare.service';

describe('ServiceRegisterDatashareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceRegisterDatashareService = TestBed.get(ServiceRegisterDatashareService);
    expect(service).toBeTruthy();
  });
});

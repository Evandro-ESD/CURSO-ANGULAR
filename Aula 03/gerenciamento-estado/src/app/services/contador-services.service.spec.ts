import { TestBed } from '@angular/core/testing';

import { ContadorServicesService } from './contador-services.service';

describe('ContadorServicesService', () => {
  let service: ContadorServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContadorServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CunsultaCPFService } from './cunsulta-cpf.service';

describe('CunsultaCPFService', () => {
  let service: CunsultaCPFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CunsultaCPFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { imcGuard } from './imc.guard';

describe('imcGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => imcGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

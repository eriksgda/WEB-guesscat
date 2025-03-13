import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { reverseAuthguardGuard } from './reverse-authguard.guard';

describe('reverseAuthguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => reverseAuthguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

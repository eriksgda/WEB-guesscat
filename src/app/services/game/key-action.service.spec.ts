import { TestBed } from '@angular/core/testing';

import { KeyActionService } from './key-action.service';

describe('KeyActionService', () => {
  let service: KeyActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

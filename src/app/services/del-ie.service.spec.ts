import { TestBed } from '@angular/core/testing';

import { DelIeService } from './del-ie.service';

describe('DelIeService', () => {
  let service: DelIeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelIeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UpIeService } from './up-ie.service';

describe('UpIeService', () => {
  let service: UpIeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpIeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

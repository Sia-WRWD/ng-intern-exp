import { TestBed } from '@angular/core/testing';

import { AddIEService } from './add-ie.service';

describe('AddIEService', () => {
  let service: AddIEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddIEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

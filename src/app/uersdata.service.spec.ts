import { TestBed } from '@angular/core/testing';

import { UersdataService } from './uersdata.service';

describe('UersdataService', () => {
  let service: UersdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UersdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

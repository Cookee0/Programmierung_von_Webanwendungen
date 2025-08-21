import {TestBed} from '@angular/core/testing';

import {Co2TableService} from './co2-table-service';

describe('Co2TableService', () => {
  let service: Co2TableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Co2TableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

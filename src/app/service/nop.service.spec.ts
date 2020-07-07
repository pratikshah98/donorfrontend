import { TestBed } from '@angular/core/testing';

import { NopService } from './nop.service';

describe('NopService', () => {
  let service: NopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BlurbService } from './blurb.service';

describe('BlurbService', () => {
  let service: BlurbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlurbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

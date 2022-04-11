import { TestBed } from '@angular/core/testing';

import { MarkDoneService } from './mark-done.service';

describe('MarkDoneService', () => {
  let service: MarkDoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkDoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

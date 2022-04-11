import { TestBed } from '@angular/core/testing';

import { GetAlertService } from './get-alert.service';

describe('GetAlertService', () => {
  let service: GetAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

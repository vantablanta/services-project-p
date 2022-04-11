import { TestBed } from '@angular/core/testing';

import { GetGoalListService } from './get-goal-list.service';

describe('GetGoalListService', () => {
  let service: GetGoalListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGoalListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CommnetService } from './commnet.service';

describe('CommnetService', () => {
  let service: CommnetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommnetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

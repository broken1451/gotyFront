import { TestBed } from '@angular/core/testing';

import { GotyService } from "./GotyService";

describe('GotyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GotyService = TestBed.get(GotyService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FlixbusCharterService } from './flixbus-charter.service';

describe('FlixbusCharterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlixbusCharterService = TestBed.get(FlixbusCharterService);
    expect(service).toBeTruthy();
  });
});

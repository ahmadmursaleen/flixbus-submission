import { TestBed } from '@angular/core/testing';

import { FirebaseAuthenitcationService } from './firebase-authenitcation.service';

describe('FirebaseAuthenitcationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseAuthenitcationService = TestBed.get(FirebaseAuthenitcationService);
    expect(service).toBeTruthy();
  });
});

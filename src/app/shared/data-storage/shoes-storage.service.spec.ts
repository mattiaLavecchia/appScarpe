import { TestBed } from '@angular/core/testing';

import { ShoesStorageService } from './shoes-storage.service';

describe('ShoesStorageService', () => {
  let service: ShoesStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoesStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

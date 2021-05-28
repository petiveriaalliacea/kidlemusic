import { TestBed } from '@angular/core/testing';

import { MusicstoreService } from './musicstore.service';

describe('MusicstoreService', () => {
  let service: MusicstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

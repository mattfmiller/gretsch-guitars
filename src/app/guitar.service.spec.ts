import { TestBed, inject } from '@angular/core/testing';

import { GuitarService } from './guitar.service';

describe('GuitarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuitarService]
    });
  });

  it('should be created', inject([GuitarService], (service: GuitarService) => {
    expect(service).toBeTruthy();
  }));
});

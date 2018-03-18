import { TestBed, inject } from '@angular/core/testing';

import { StudioGhibliService } from './studio-ghibli.service';

describe('StudioGhibliService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudioGhibliService]
    });
  });

  it('should be created', inject([StudioGhibliService], (service: StudioGhibliService) => {
    expect(service).toBeTruthy();
  }));
});

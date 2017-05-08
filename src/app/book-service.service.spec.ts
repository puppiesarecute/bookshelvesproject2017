import { TestBed, inject } from '@angular/core/testing';

import { BookServiceService } from './book-service.service';

describe('BookServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookServiceService]
    });
  });

  it('should ...', inject([BookServiceService], (service: BookServiceService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ServicegerantService } from './servicegerant.service';

describe('ServicegerantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicegerantService]
    });
  });

  it('should be created', inject([ServicegerantService], (service: ServicegerantService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { GroupServService } from './group-serv.service';

describe('GroupServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupServService]
    });
  });

  it('should be created', inject([GroupServService], (service: GroupServService) => {
    expect(service).toBeTruthy();
  }));
});

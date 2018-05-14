import { TestBed, inject } from '@angular/core/testing';

import { EtablissementsService } from './etablissements.service';

describe('EtablissementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtablissementsService]
    });
  });

  it('should be created', inject([EtablissementsService], (service: EtablissementsService) => {
    expect(service).toBeTruthy();
  }));
});

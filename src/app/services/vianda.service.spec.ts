import { TestBed } from '@angular/core/testing';

import { ViandaService } from './vianda.service';

describe('ViandaService', () => {
  let service: ViandaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViandaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ReportVoosService } from './report-voos.service';

describe('ReportVoosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportVoosService = TestBed.get(ReportVoosService);
    expect(service).toBeTruthy();
  });
});

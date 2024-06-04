import { TestBed } from '@angular/core/testing';

import { TockenInspectorService } from './tocken-inspector.service';

describe('TockenInspectorService', () => {
  let service: TockenInspectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TockenInspectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
